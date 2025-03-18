import { useState, useEffect } from "react";
import Profile1 from "/img/profile1.jpeg";
import Profile2 from "/img/profile1.jpeg";
import Profile3 from "/img/profile1.jpeg";
import Profile4 from "/img/profile1.jpeg";
import Profile5 from "/img/profile1.jpeg";

const useAbout = () => {
  const [decorationText, setDecorationText] = useState("");
  const [color, setColor] = useState("");

  const me = [Profile1, Profile2, Profile3, Profile4, Profile5];
  const randomMe = me[Math.floor(Math.random() * me.length)];

  const deco = ["🔥", "Professional", "🚀", "Detail-Oriented", "Your fellow"];

  const colors = [
    "bg-gradient-to-r from-blue-400 to-purple-500",
    "bg-gradient-to-br from-pink-500 to-orange-400",
    "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600",
    "bg-gradient-to-r from-red-500 via-yellow-500 to-green-500",
    "bg-gradient-to-r from-purple-300 via-pink-300 to-blue-200",
    "bg-gradient-to-r from-purple-600 via-teal-400 to-blue-500",
    "bg-gradient-to-r from-blue-500 to-pink-500",
    "bg-gradient-to-r from-orange-400 to-red-500",
    "bg-gradient-to-r from-yellow-400 to-pink-500",
    "bg-gradient-to-r from-gray-500 to-blue-400",
    "bg-gradient-to-r from-yellow-600 to-lime-400",
  ];

  useEffect(() => {
    // const interval = setInterval(() => {
    const randomText = deco[Math.floor(Math.random() * deco.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    setColor(randomColor);
    setDecorationText(randomText);
    // }, 2000);

    // return () => clearInterval(interval);
  }, []);

  return { randomMe, decorationText, color };
};

export default useAbout;
