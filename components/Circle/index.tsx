
import React from "react";

const Circle = () => {
  const items = [
    { number: 1, label: "Facebook", color: "bg-main" },
    { number: 2, label: "YouTube", color: "bg-main" },
    { number: 3, label: "Twitter", color: "bg-main" },
    { number: 4, label: "Instagram", color: "bg-main" },
    { number: 5, label: "Apply", color: "bg-main" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full text-white flex justify-center items-center ${item.color}`}
          >
            {item.number}
          </div>
          {index < items.length - 1 && (
            <div className="hidden sm:block w-8 h-1 bg-gray-400 mx-2"></div>
          )}
          <span className="ml-2 text-sm sm:text-base">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Circle;






