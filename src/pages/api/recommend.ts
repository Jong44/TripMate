import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import csvParser from 'csv-parser';
import { DateTime } from 'luxon';

// Fungsi membaca dataset dari CSV
async function loadDataset() {
  const datasetPath = path.resolve(process.cwd(), './datasets/data_final.csv');
  const data: any[] = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(datasetPath)
      .pipe(csvParser())
      .on('data', (row) => {
        row.Rating = parseFloat(row.Rating);
        row.Price = parseInt(row.Price, 10);
        row.Latitude = parseFloat(row.Latitude);
        row.Longitude = parseFloat(row.Longitude);
        row.Ideal_Duration = parseInt(row.Ideal_Duration, 10);
        data.push(row);
      })
      .on('end', () => resolve(data))
      .on('error', (error) => reject(error));
  });
}

// Fungsi menghitung waktu perjalanan menggunakan Google Maps API
async function calculateTravelTime(
    originLat: number,
    originLng: number,
    destLat: number,
    destLng: number
) {
  const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${originLat},${originLng}&destination=${destLat},${destLng}&mode=driving&key=${GOOGLE_MAPS_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "OK") {
      const duration = data.routes[0].legs[0].duration.value; // Durasi dalam detik
      return Math.ceil(duration / 60); // Konversi ke menit
    } else {
      console.error("Error from Google Maps API:", data.error_message || "Unknown error");
      return 0;
    }
  } catch (error) {
    console.error("Error fetching travel time:", error);
    return 0;
  }
}

async function generateScheduleEnhanced(weather, city, budget, minRating, startTime, visitDay, maxDuration = 720) {
  const data = await loadDataset(); // Muat dataset dari CSV
  const filteredData = data.filter(
    (item) =>
      item.City.toLowerCase() === city.toLowerCase() &&
      item.Rating >= minRating &&
      item.Weather_Suitability.includes(weather)
  );

  let schedule = [];
  let remainingBudget = budget;
  let currentTime = DateTime.fromISO(`1970-01-01T${startTime}`);
  let totalTime = 0;
  let previousCoords = null;

  let mealTimes = { Lunch: "12:00", Dinner: "18:00" };
  let mealsTaken = { Lunch: false, Dinner: false };

  for (const destination of filteredData) {
    if (remainingBudget < destination.Price || totalTime >= maxDuration) break;

    // Perhitungan waktu perjalanan
    let travelTime = 0;
    if (previousCoords) {
      travelTime = await calculateTravelTime(
        previousCoords.lat,
        previousCoords.lng,
        destination.Latitude,
        destination.Longitude
      );

      currentTime = currentTime.plus({ minutes: travelTime });
      totalTime += travelTime;

      schedule.push({
        time: `${currentTime.minus({ minutes: travelTime }).toFormat('HH:mm')} - ${currentTime.toFormat('HH:mm')}`,
        activity: "Travel to next destination",
        duration: `${travelTime} menit`,
        price: "-"
      });
    }

    // Hentikan jika waktu telah melebihi batas
    if (totalTime + destination.Ideal_Duration > maxDuration) break;

    // Tambahkan destinasi ke jadwal
    schedule.push({
      time: `${currentTime.toFormat('HH:mm')} - ${currentTime.plus({ minutes: destination.Ideal_Duration }).toFormat('HH:mm')}`,
      activity: destination.Place_Name,
      duration: `${destination.Ideal_Duration} menit`,
      price: destination.Price,
      rating: destination.Rating,
      category: destination.Category
    });

    currentTime = currentTime.plus({ minutes: destination.Ideal_Duration });
    totalTime += destination.Ideal_Duration;
    remainingBudget -= destination.Price;

    previousCoords = { lat: destination.Latitude, lng: destination.Longitude };

    // Tambahkan waktu makan jika waktu sudah sesuai
    for (const [meal, mealTime] of Object.entries(mealTimes)) {
      if (!mealsTaken[meal] && currentTime >= DateTime.fromISO(`1970-01-01T${mealTime}`)) {
        const restaurants = filteredData.filter(
          (item) =>
            item.Category === "Restaurant" && item.Price <= remainingBudget
        );
        if (restaurants.length > 0) {
          const restaurant = restaurants[0];
          schedule.push({
            time: `${DateTime.fromISO(`1970-01-01T${mealTime}`).toFormat('HH:mm')} - ${DateTime.fromISO(`1970-01-01T${mealTime}`).plus({ minutes: 60 }).toFormat('HH:mm')}`,
            activity: `Meal at ${restaurant.Place_Name}`,
            duration: "60 menit",
            price: restaurant.Price,
            rating: restaurant.Rating,
            category: "Food"
          });
          remainingBudget -= restaurant.Price;
          mealsTaken[meal] = true;
        }
      }
    }
  }

  return {
    destination: schedule,
    total_expense: budget - remainingBudget,
    remaining_budget: remainingBudget
  };
}

// API Handler
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { current_weather, city, budget, visit_day, min_rating, start_time } = req.body;

    if (!current_weather || !city || !budget || !visit_day || !min_rating || !start_time) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const schedule = await generateScheduleEnhanced(
      current_weather,
      city,
      budget,
      min_rating,
      start_time,
      visit_day
    );

    return res.status(200).json(schedule);
  } catch (error) {
    console.error("Error generating schedule:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
