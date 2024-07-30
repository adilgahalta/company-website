// components/TestimonialCarousel.tsx
"use client";
import React, { useState } from "react";
import "@/app/globals.css";
type Testimonial = {
  id: number;
  text: string;
  author: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "I can't recommend this enough. It exceeded all my expectations and then some!",
    author: "Jane Doe",
  },
  {
    id: 2,
    text: "I can't recommend this enough. It exceeded all my expectations and then some!",
    author: "John Smith",
  },
  {
    id: 3,
    text: "I can't recommend this enough. It exceeded all my expectations and then some!",
    author: "Emily Johnson",
  },
  {
    id: 4,
    text: "I can't recommend this enough. It exceeded all my expectations and then some!",
    author: "Jane Doe",
  },
  {
    id: 5,
    text: "I can't recommend this enough. It exceeded all my expectations and then some!",
    author: "Jane Doe",
  },
  {
    id: 6,
    text: "I can't recommend this enough. It exceeded all my expectations and then some!",
    author: "Jane Doe",
  },
  {
    id: 7,
    text: "I can't recommend this enough. It exceeded all my expectations and then some!",
    author: "Jane Doe",
  },
  {
    id: 8,
    text: "I can't recommend this enough. It exceeded all my expectations and then some!",
    author: "John Smith",
  },
  {
    id: 9,
    text: "I can't recommend this enough. It exceeded all my expectations and then some!",
    author: "Emily Johnson",
  },
  {
    id: 10,
    text: "I can't recommend this enough. It exceeded all my expectations and then some!",
    author: "Jane Doe",
  },
  {
    id: 11,
    text: "I can't recommend this enough. It exceeded all my expectations and then some!",
    author: "Jane Doe",
  },
  {
    id: 12,
    text: "I can't recommend this enough. It exceeded all my expectations and then some!",
    author: "Jane Doe",
  },
  // Add more testimonials as needed
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="py-[230px] bg-[#FFF455] text-gray-900 ">
      <div className="text-3xl font-bold mb-4 flex justify-center ">
        Our Testimonial{" "}
      </div>
      <div className="relative max-w-3xl mx-auto px-4 py-8 ">
        <div className="relative overflow-hidden ">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full px-4 lg:w-1/2 xl:w-1/3"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-700 mb-4">{testimonial.text}</p>
                  <p className="font-semibold text-gray-900">
                    - {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md"
          >
            {`<`}
            <div className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className=" absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md"
          >
            {`>`}
            <div className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
