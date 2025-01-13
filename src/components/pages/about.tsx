import React, { useState } from "react";
import MapsIcon from "../icons/maps";
import MaskIcon from "../icons/mask";
import HotelsIcon from "../icons/hotels";
import GlassIcon from "../icons/glass";

const AboutSection = () => {
    const [activeCategory, setActiveCategory] = useState<number | null>(0);
    const categories = [
        {
            name: "Destinations",
            icon: (
                <MapsIcon size={30} color={activeCategory === 0 ? "#fff" : "#000"} />
            ),
        },
        {
            name: "Experiences",
            icon: (
                <MaskIcon size={30} color={activeCategory === 1 ? "#fff" : "#000"} />
            ),
        },
        {
            name: "Hotels",
            icon: (
                <HotelsIcon size={30} color={activeCategory === 2 ? "#fff" : "#000"} />
            ),
        },
        {
            name: "Dining",
            icon: (
                <GlassIcon size={30} color={activeCategory === 3 ? "#fff" : "#000"} />
            ),
        },
    ];
    const handleCategoryChange = (index: number) => {
        setActiveCategory(index);
    };
    return (
        <section className="flex flex-col items-center justify-center relative -top-[7.85rem] py-6 px-8">
            <div className="flex items-center justify-center border rounded-full px-4 py-3 border-gray-300 font-semibold">
                About Us
            </div>
            <h2 className="text-4xl font-medium mt-5 text-center w-1/2 leading-tight">
                TripMate simplifies travel planning with AI-driven personalized
                itineraries for stays, experiences, and dining.
            </h2>
            <div className="flex gap-10  mt-12">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center w-1/4"
                    >
                        <div
                            className={`p-3 border rounded-full border-gray-300 cursor-pointer ${activeCategory === index ? "bg-black" : "bg-white"
                                } ${activeCategory === index
                                    ? "hover:bg-black"
                                    : "hover:bg-gray-100"
                                }`}
                            onClick={() => handleCategoryChange(index)}
                        >
                            {category.icon}
                        </div>
                        <p className="text-sm font-semibold mt-4">{category.name}</p>
                    </div>
                ))}
            </div>
            {activeCategory === 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img src="assets/images/destinasi/kota-tua.jpg" alt="Destination Image" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-800">Kota Tua</h3>
                            <p className="text-sm text-gray-500">Sunny ☀️ | 24°C | 1,200 km away</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img src="assets/images/destinasi/candi.jpg" alt="Destination Image" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-800">Candi Prambanan</h3>
                            <p className="text-sm text-gray-500">Sunny ☀️ | 24°C | 1,200 km away</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img src="assets/images/destinasi/taman-sari.jpg" alt="Destination Image" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-800">Taman Sari</h3>
                            <p className="text-sm text-gray-500">Sunny ☀️ | 24°C | 1,200 km away</p>
                        </div>
                    </div>
                </div>
            )}

            {activeCategory === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img src="assets/images/experience/tari-kecak.jpg" alt="Experience Image" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-800">Tari Kecak</h3>
                            <p className="text-sm text-gray-500">3 Hours | €45</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img src="assets/images/experience/snorkeling.jpg" alt="Experience Image" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-800">Snorkeling</h3>
                            <p className="text-sm text-gray-500">3 Hours | €45</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img src="assets/images/experience/mendaki.jpg" alt="Experience Image" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-800">Mendaki</h3>
                            <p className="text-sm text-gray-500">3 Hours | €45</p>
                        </div>
                    </div>
                </div>
            )}

            {activeCategory === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img src="assets/images/hotels/tentrem.jpg" alt="Stay Image" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-800">Tentrem Hotel</h3>
                            <p className="text-sm text-gray-500">€120/night</p>
                            <p className="text-sm text-yellow-500">⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img src="assets/images/hotels/bulgari-resort.jpg" alt="Stay Image" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-800">Bulgari Resort</h3>
                            <p className="text-sm text-gray-500">€120/night</p>
                            <p className="text-sm text-yellow-500">⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img src="assets/images/hotels/urban-hotel.jpg" alt="Stay Image" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-800">Urban Hotel</h3>
                            <p className="text-sm text-gray-500">€120/night</p>
                            <p className="text-sm text-yellow-500">⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                </div>
            )}

            {activeCategory === 3 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img src="assets/images/dining/panny-lane.jpg" alt="Dining Image" className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800">Panny Lane</h3>
                                <p className="text-sm text-gray-500">€25/person</p>
                            </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img src="assets/images/dining/pracima.jpg" alt="Dining Image" className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800">Pracima Tuin</h3>
                                <p className="text-sm text-gray-500">€25/person</p>
                            </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img src="assets/images/dining/raffles.jpg" alt="Dining Image" className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800">Raffles</h3>
                                <p className="text-sm text-gray-500">€25/person</p>
                            </div>
                    </div>
                </div>
            )}

            <div className="flex items-start justify-between mt-20 w-full">
                <div className="flex items-center justify-center border border-gray-300 rounded-full px-6 py-3 cursor-pointer font-medium">
                    What's Near You?
                </div>
                <p className="text-3xl font-medium w-[65%] leading-tight">Discover hidden gems, embrace unforgettable experiences, explore vibrant cultures, and make lasting memories with TripMate—your smart travel companion for every journey.</p>
            </div>
        </section>
    );
};

export default AboutSection;
