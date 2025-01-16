import React, { useState } from 'react'
import CardItenary from './card/card_itenary'
import ArrowLeftIcon from '../icons/arrow_left'
import ArrowRightIcons from '../icons/arrow_right'

const ItenarySection = () => {
  const [inputData, setInputData] = useState({
    current_weather: "Sunny",
    city: "",
    budget: 0,
    visit_day: "",
    min_rating: 0,
    start_time: "",
  });
  const [itinerary, setItinerary] = useState<ItenaryProps | any>({});
  const [loading, setLoading] = useState(false);
  const [slice, setSlice] = useState(0);

  const fetchData = async () => {
    if (!inputData.city) {
      alert("City cannot be empty");
      return;
    }
    if (!inputData.visit_day) {
      alert("Visit day cannot be empty");
      return;
    }
    if (!inputData.budget) {
      alert("Budget cannot be empty");
      return;
    }
    if (!inputData.min_rating) {
      alert("Minimum rating cannot be empty");
      return;
    }
    if (!inputData.start_time) {
      alert("Start time cannot be empty");
      return
    }
    if (inputData.budget < 0) {
      alert("Budget must be greater than 0");
      return;
    }
    if (inputData.min_rating < 0) {
      alert("Minimum rating must be greater than 0");
      return;
    }
    
    try{
      
    setLoading(true);
      const urlApi = "/api/recommend";
      const response = await fetch(urlApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });
      const data = await response.json();
      if(data){
        const slicedData = data.destination.slice(0, 3);
        setSlice(0);
        setItinerary({ ...itinerary, destination: slicedData });
      }
      console.log(data);  
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const generateItinerary = () => {
    const data = itinerary.destination;
    if (data) {
      const slicedData = data.slice(slice, slice + 3);
      setItinerary({ ...itinerary, destination: slicedData });
    }
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
                  required
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
                  required
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
                  required
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
                    required
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
                    required
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={fetchData}
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
                  itinerary.destination?.map((item: DestinationProps, index: number) => (
                    <CardItenary 
                    key={index} 
                    time = {item.time}
                    activity={item.activity}
                    duration = {item.duration}
                    price = {item.price}
                    rating = {item.rating}
                    category = {item.category}
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