import React from "react";

import image1 from "../assets/c1.png";
import image2 from "../assets/c2.png";
import image3 from "../assets/c3.png";
import image4 from "../assets/c4.png";
import image5 from "../assets/c5.png";
import image6 from "../assets/c6.png";
import image7 from "../assets/c7.png";
import image8 from "../assets/c8.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];

const Carousel = () => {
  return (
    <div className="w-full overflow-hidden py-8  ">
      <div className="flex gap-6 animate-carousel">
        {[...images, ...images].map((img, index) => (
          <div
            key={index}
            className="min-w-40.5 h-60 rounded-xl overflow-hidden shadow-lg bg-white"
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;