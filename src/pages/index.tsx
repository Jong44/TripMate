import ArrowLeftIcon from "@/components/icons/arrow_left";
import ArrowRightIcons from "@/components/icons/arrow_right";
import GlassIcon from "@/components/icons/glass";
import HotelsIcon from "@/components/icons/hotels";
import MapsIcon from "@/components/icons/maps";
import MaskIcon from "@/components/icons/mask";
import AboutSection from "@/components/pages/about";
import Hero from "@/components/pages/hero";
import Navbar from "@/components/pages/navbar";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [inputData, setInputData] = useState({
    current_weather: "",
    city: "",
    budget: 0,
    visit_day: "",
    min_rating: 0,
    start_time: "",
  });
  const [itinerary, setItinerary] = useState([]);

  const handleChange = (e:any) => {
    const { id, value } = e.target;
    setInputData({ ...inputData, [id]: value });
  };
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <Navbar />
        <Hero />
        <AboutSection />
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
                    onClick={() => setItinerary([])}
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
                <div className="w-full text-black p-4 rounded-lg flex gap-6">
                  <div className="h-36 w-2 bg-slate-500 rounded-xl"></div>
                  <div className="flex-1 rounded-lg p-4 bg-white border border-gray-200  relative">
                    <div className="flex items-center gap-3 text-lg text-gray-500">
                      <p>86 menit</p>
                      {/* dot circle */}
                      <div className="flex items-center justify-center w-1 h-1 bg-slate-500 rounded-full">
                        </div>
                    <h3 className="">08:00 - 09:26</h3>
                    </div>
                    <p className="text-2xl font-semibold mt-1">Ekowisata Mangrove Wonorejo</p>
                    <p className=""></p>
                    <div className="mt-4 text-xl font-medium">
                      <p>Rp 100.000.000</p>
                    </div>
                  </div>
                </div>
                <div className="w-full text-white p-4 rounded-lg flex gap-6">
                  <div className="h-36 w-2 bg-slate-500 rounded-xl"></div>
                  <div className="flex-1 rounded-lg p-4 bg-white border border-gray-200">
                    <h3 className="text-lg font-bold">Total Expenses</h3>
                    <p className="text-2xl font-bold">Rp 999.527</p>
                  </div>
                </div>
                <div className="w-full text-white p-4 rounded-lg flex gap-6">
                  <div className="h-36 w-2 bg-slate-500 rounded-xl"></div>
                  <div className="flex-1 rounded-lg p-4 bg-white border border-gray-200">
                    <h3 className="text-lg font-bold">Total Expenses</h3>
                    <p className="text-2xl font-bold">Rp 999.527</p>
                  </div>
                </div>
                <div className="flex justify-end gap-3">
                  <div className="flex gap-5 justify-center items-center font-medium border border-gray-200 rounded-full px-4 py-2 bg-white cursor-pointer">
                    <ArrowLeftIcon />
                    <p>Back</p>
                  </div>
                  <div className="flex gap-5 justify-center items-center font-medium border border-gray-200 rounded-full px-4 py-2 bg-white cursor-pointer">
                    <p>Next</p>
                    <ArrowRightIcons />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
