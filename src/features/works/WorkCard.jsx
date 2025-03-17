import React from "react";

const WorkCard = ({
  companyName,
  position,
  duration,
  location,
  details,
  tags,
  color,
}) => {
  return (
    <div className="flex flex-wrap gap-y-2">
      <div>
        <div className="flex items-center mb-2">
          <div
            className={`w-3 h-3 rounded-full ${color} absolute -left-9`}
          ></div>
          <span className="text-sm text-gray-500 font-medium">{duration}</span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-sm text-gray-500">{location}</span>
        </div>
        <h3 className="text-xl font-bold">{position}</h3>
        <p className="font-semibold text-gray-600">{companyName}</p>
      </div>
      {details && (
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          {details.map((x) => (
            <li>{x}</li>
          ))}
        </ul>
      )}
      {tags && (
        <div className="flex flex-wrap gap-1 text-xs text-gray-600">
          {tags.map((x) => (
            <span className="rounded-lg py-1 px-2 bg-gray-100">{x}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkCard;
