import React from "react";
import Image from "next/image";
type Props = {};

export default function About({}: Props) {
  return (
    <div className="bg-[#FFC001] h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex justify-start items-start p-4 md:p-0 ">
        <Image
          src="/petshop11.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className="max-w-full h-auto"
        />
      </div>
      <div className="flex flex-1 justify-center md:justify-end items-center text-center md:text-end px-8 md:px-16 mb-16 md:mb-0">
        <div>
          <div className="text-3xl py-5">About Us</div>
          <div className="text-white text-[16px]">
            At Paws & Claws Petshop, pets are at the heart of everything we do.
            Since our founding in 2020, we've been committed to providing
            exceptional products and services for dogs, cats, birds, and fish.
            Our team of dedicated pet enthusiasts is passionate about ensuring
            the well-being of your beloved companions. We strive to create a
            welcoming community where pet lovers can find high-quality items and
            expert advice, all while fostering a culture of care, love, and
            respect for animals.
          </div>
        </div>
      </div>
    </div>
  );
}
