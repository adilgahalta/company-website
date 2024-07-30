"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedLink from "@/components/AnimatedLink";
type Props = {};

export default function Navbar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#007f73] text-white">
      <div className="flex justify-between items-center px-4 py-2 sm:px-[80px]">
        <Image
          src="/Logo.svg"
          width={106}
          height={86}
          alt="Logo"
          className="flex-shrink-0"
        />
        <div className="sm:hidden">
          <button
            type="button"
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden sm:flex py-[20px] gap-5">
          <Link href="/" className="py-2 sm:py-0 ">
            <AnimatedLink href="">Home</AnimatedLink>
          </Link>
          <Link href="/about" className="py-2 sm:py-0">
            <AnimatedLink href="">About Us</AnimatedLink>
          </Link>
          <Link href="/products" className="py-2 sm:py-0">
            <AnimatedLink href=""> Product</AnimatedLink>
          </Link>
          <Link href="/team" className="py-2 sm:py-0">
            <AnimatedLink href="">Teams</AnimatedLink>
          </Link>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden flex flex-col items-center py-2 ">
          <Link href="/" className="py-2 ">
            <AnimatedLink href="">Home</AnimatedLink>
          </Link>
          <Link href="/about" className="py-2">
            <AnimatedLink href="">About Us</AnimatedLink>
          </Link>
          <Link href="/products" className="py-2">
            <AnimatedLink href=""> Product</AnimatedLink>
          </Link>
          <Link href="/team" className="py-2">
            <AnimatedLink href="">Teams</AnimatedLink>
          </Link>
        </div>
      )}
    </div>
  );
}
