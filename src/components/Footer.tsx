import React from "react";
import Link from "next/link";

type Props = {};

const Footer: React.FC<Props> = () => {
  return (
    <footer className="bg-[#3A3F63] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
          <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
            <h5 className="mb-2 font-bold">Company</h5>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/" className="hover:underline">
              Services
            </Link>
            <Link href="/" className="hover:underline">
              Teams
            </Link>
            <Link href="/" className="hover:underline">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
            <h5 className="mb-2 font-bold">Resources</h5>
            <Link href="/" className="hover:underline">
              Blog
            </Link>
            <Link href="/" className="hover:underline">
              FAQ
            </Link>
            <Link href="/" className="hover:underline">
              Support
            </Link>
            <Link href="" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
            <h5 className="mb-2 font-bold">Follow Us</h5>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:underline">
                Facebook
              </Link>
              <Link href="https://twitter.com" className="hover:underline">
                Twitter
              </Link>
              <Link href="https://instagram.com" className="hover:underline">
                Instagram
              </Link>
              <Link href="https://linkedin.com" className="hover:underline">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
