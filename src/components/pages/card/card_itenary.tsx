import StarIcon from "@/components/icons/star";
import React from "react";

const CardItenary:React.FC<DestinationProps> = ({
    time,
    activity,
    duration,
    price,
    rating,
    category,
}) => {
  return (
    <div className={`flex-1 rounded-lg p-4 bg-white border border-gray-200  relative border-l-[10px] ${category === "Tourism" ? "border-l-yellow-300" : category === "Lodging" ? "border-l-blue-300" : category === "Food" ? "border-l-green-400" : "border-l-slate-400"}`}>
        <div className="flex items-center gap-3 text-lg text-gray-500">
          <p>{duration}</p>
          {/* dot circle */}
          <div className="flex items-center justify-center w-1 h-1 bg-slate-500 rounded-full"></div>
          <h3 className="">{time}</h3>
        </div>
        <p className="text-2xl font-semibold mt-1">
          {activity}
        </p>
        <p className=""></p>
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <div className="flex w-28">
             {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon
                  key={index}
                  color={index < rating ? "#fde047" : "gray"}
                />
              ))}
            </div>
            <p className="ml-3">
              4.5 <span className="text-gray-500 underline">by google</span>
            </p>
          </div>
          <div className="text-2xl font-medium">
            <p>Rp {price}</p>
          </div>
          <div className="absolute top-4 right-4 bg-white rounded-full flex justify-center items-center border border-gray-200 px-3 py-1">
            <p className="text-black text-xs">{category}</p>
          </div>
        </div>
      </div>
  );
};

export default CardItenary;
