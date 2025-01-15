import React, { useState } from 'react'
import CardItenary from './card/card_itenary'
import ArrowLeftIcon from '../icons/arrow_left'
import ArrowRightIcons from '../icons/arrow_right'

const ItenarySection = () => {
  const [inputData, setInputData] = useState({
    current_weather: "",
    city: "",
    budget: 0,
    visit_day: "",
    min_rating: 0,
    start_time: "",
  });
  const [itinerary, setItinerary] = useState<ItenaryProps | any>({});
  const [loading, setLoading] = useState(false);
  const [slice, setSlice] = useState(0);

  const generateItinerary = () => {
    setLoading(true);
    const itenary = {
      Schedule: [
        {
          Time: "08:00 - 09:26",
          Activity: "Ekowisata Mangrove Wonorejo",
          Duration: "86 menit",
          Price: 0,
          Rating: 4.5,
          Category: "Tourism"
        },
        {
          Time: "09:26 - 09:50",
          Activity: "Travel to next destination",
          Duration: "24 menit",
          Price: "-"
        },
        {
          Time: "09:50 - 11:45",
          Activity: "Taman Harmoni Keputih",
          Duration: "115 menit",
          Price: 0,
          Rating: 4.5,
          Category: "Tourism"
        },
        {
          Time: "11:45 - 12:05",
          Activity: "Travel to next destination",
          Duration: "20 menit",
          Price: "-"
        },
        {
          Time: "12:05 - 14:01",
          Activity: "Air Mancur Menari",
          Duration: "116 menit",
          Price: 35000,
          Rating: 4.5,
          Category: "Tourism"
        },
        {
          Time: "12:00 - 13:00",
          Activity: "Meal at The Duck King",
          Duration: "60 menit",
          Price: 150000,
          Rating: 4.5,
          Category: "Food"
        },
        {
          Time: "14:01 - 14:26",
          Activity: "Travel to hotel",
          Duration: "25 menit",
          Price: "-"
        },
        {
          Time: "14:00",
          Activity: "Check-in at Midtown Hotel Surabaya",
          Duration: "Overnight",
          Price: 814527,
          Rating: 4.5,
          Category: "Lodging"
        },
        {
          Time: "14:26 - 14:49",
          Activity: "Travel to next destination",
          Duration: "23 menit",
          Price: "-"
        },
        {
          Time: "14:49 - 17:30",
          Activity: "Taman Prestasi",
          Duration: "161 menit",
          Price: 0,
          Rating: 4.5,
          Category: "Tourism"
        },
        {
          Time: "17:30 - 17:55",
          Activity: "Travel to next destination",
          Duration: "25 menit",
          Price: "-",
        },
        {
          Time: "17:55 - 19:07",
          Activity: "Taman Kunang-Kunang",
          Duration: "72 menit",
          Price: 0,
          Rating: 4.5,
          Category: "Tourism"
        },
        {
          Time: "19:07 - 19:28",
          Activity: "Back to hotel",
          Duration: "21 menit",
          Price: "-"
        }
      ],
      Total_Expenses: 999527,
      Remaining_Budget: 473
    }
    setItinerary({
      Schedule: itenary.Schedule.slice(slice, slice + 3),
      Total_Expenses: itenary.Total_Expenses,
      Remaining_Budget: itenary.Remaining_Budget
    }); 
    setLoading(false);
  };

  const fetch = async () => {
    const itenary = {
      Schedule: [
        {
          Time: "08:00 - 09:26",
          Activity: "Ekowisata Mangrove Wonorejo",
          Duration: "86 menit",
          Price: 0,
          Rating: 4.5,
          Category: "Tourism"
        },
        {
          Time: "09:26 - 09:50",
          Activity: "Travel to next destination",
          Duration: "24 menit",
          Price: "-"
        },
        {
          Time: "09:50 - 11:45",
          Activity: "Taman Harmoni Keputih",
          Duration: "115 menit",
          Price: 0,
          Rating: 4.5,
          Category: "Tourism"
        },
        {
          Time: "11:45 - 12:05",
          Activity: "Travel to next destination",
          Duration: "20 menit",
          Price: "-"
        },
        {
          Time: "12:05 - 14:01",
          Activity: "Air Mancur Menari",
          Duration: "116 menit",
          Price: 35000,
          Rating: 4.5,
          Category: "Tourism"
        },
        {
          Time: "12:00 - 13:00",
          Activity: "Meal at The Duck King",
          Duration: "60 menit",
          Price: 150000,
          Rating: 4.5,
          Category: "Food"
        },
        {
          Time: "14:01 - 14:26",
          Activity: "Travel to hotel",
          Duration: "25 menit",
          Price: "-"
        },
        {
          Time: "14:00",
          Activity: "Check-in at Midtown Hotel Surabaya",
          Duration: "Overnight",
          Price: 814527,
          Rating: 4.5,
          Category: "Lodging"
        },
        {
          Time: "14:26 - 14:49",
          Activity: "Travel to next destination",
          Duration: "23 menit",
          Price: "-"
        },
        {
          Time: "14:49 - 17:30",
          Activity: "Taman Prestasi",
          Duration: "161 menit",
          Price: 0,
          Rating: 4.5,
          Category: "Tourism"
        },
        {
          Time: "17:30 - 17:55",
          Activity: "Travel to next destination",
          Duration: "25 menit",
          Price: "-",
        },
        {
          Time: "17:55 - 19:07",
          Activity: "Taman Kunang-Kunang",
          Duration: "72 menit",
          Price: 0,
          Rating: 4.5,
          Category: "Tourism"
        },
        {
          Time: "19:07 - 19:28",
          Activity: "Back to hotel",
          Duration: "21 menit",
          Price: "-"
        }
      ],
      Total_Expenses: 999527,
      Remaining_Budget: 473
    }
    // timeouts for loading
    setTimeout(() => {
      setItinerary({
        Schedule: itenary.Schedule.slice(slice, slice + 3),
        Total_Expenses: itenary.Total_Expenses,
        Remaining_Budget: itenary.Remaining_Budget
      });
      setLoading(false);
    }, 2000);
  }


  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setInputData({ ...inputData, [id]: value });
  };
  
  const handleNext = () => {
    setSlice(slice + 3);
    generateItinerary();
  }

  const handlePrev = () => {
    setSlice(slice - 3);
    generateItinerary();
  }


  return (
    <section className="flex relative -top-[5rem] py-6 px-8">
      <div className="flex w-full gap-32">
        <div
          className="flex flex-col items-center w-[50%] rounded-xl px-8 py-12"
          style={{
            background:
              "url(assets/images/input.jpg) no-repeat center center/cover",
          }}
        >
          <div className="glassed w-full h-full rounded-xl px-5 py-8">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Generate Itinerary
            </h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4 bg-white p-4 rounded-lg">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  value={inputData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  className="w-full mt-1 p-2 border rounded-lg outline-none"
                />
              </div>
              <div className="mb-4 bg-white p-4 rounded-lg">
                <label
                  htmlFor="visit_day"
                  className="block text-sm outline-none"
                >
                  Visit Day
                </label>
                <input
                  type="date"
                  id="visit_day"
                  value={inputData.visit_day}
                  onChange={handleChange}
                  placeholder="Enter visit day"
                  className="w-full mt-1 p-2 border rounded-lg outline-none"
                />
              </div>
              <div className="mb-4 bg-white p-4 rounded-lg">
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-700"
                >
                  Budget
                </label>
                <input
                  type="number"
                  id="budget"
                  value={inputData.budget}
                  onChange={handleChange}
                  placeholder="Enter your budget"
                  className="w-full mt-1 p-2 border rounded-lg outline-none"
                />
              </div>
              <div className="flex gap-4">
                <div className="mb-4 w-full bg-white p-4 rounded-lg">
                  <label
                    htmlFor="min_rating"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Minimum Rating
                  </label>
                  <input
                    type="number"
                    id="min_rating"
                    value={inputData.min_rating}
                    onChange={handleChange}
                    placeholder="Enter minimum rating"
                    className="w-full mt-1 p-2 border rounded-lg outline-none"
                  />
                </div>
                <div className="mb-4 w-full bg-white p-4 rounded-lg">
                  <label
                    htmlFor="start_time"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Start Time
                  </label>
                  <input
                    type="time"
                    id="start_time"
                    value={inputData.start_time}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-lg outline-none"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={fetch}
                className="w-full bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition"
              >
                Generate Itinerary
              </button>
            </form>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Your Itinerary</h2>
          <div className="grid grid-cols-1 gap-6">
            {loading ? (
              <div className="flex justify-center items-center h-96">
                <p className="text-2xl font-bold">Loading...</p>
                </div>
                ) : (
                  itinerary.Schedule?.map((item: any, index: number) => (
                    <CardItenary 
                    key={index} 
                    time = {item.Time}
                    activity={item.Activity}
                    duration = {item.Duration}
                    price = {item.Price}
                    rating = {item.Rating}
                    category = {item.Category}
                     />
                  ))
                )}
            <div className="flex justify-end gap-3">
              <div className="flex gap-5 justify-center items-center font-medium border border-gray-200 rounded-full px-4 py-2 bg-white cursor-pointer" onClick={handlePrev}>
                <ArrowLeftIcon />
                <p>Prev</p>
              </div>
              <div className="flex gap-5 justify-center items-center font-medium border border-gray-200 rounded-full px-4 py-2 bg-white cursor-pointer" onClick={handleNext}> 
                <p>Next</p>
                <ArrowRightIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItenarySection