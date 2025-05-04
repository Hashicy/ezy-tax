"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-[#F8F9FA] fixed w-full z-50 transition-all duration-300 shadow-md font-['Poppins'] ${
        scrolled ? "h-16" : "h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="flex justify-between items-center w-full">

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1E2761] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="#1E2761" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="#1E2761" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>


          <div className="hidden lg:flex gap-4 text-[#1E2761] text-sm items-center pr-4">
            <a href="#" className="hover:text-[#7A2048] font-medium">Home</a>
            <a href="#" className="hover:text-[#7A2048] font-medium">Blog</a>
          </div>


          <div className="flex-1 text-center px-2">
            <h1 className="text-3xl text-[#1E2761] font-['Meddon'] transition-all duration-300">
              Ezy-tax
            </h1>
          </div>


          <div className="hidden lg:flex gap-4 text-[#1E2761] text-sm items-center pl-4">
            <a href="#" className="hover:text-[#7A2048] font-medium">About Us</a>
            <a href="#" className="hover:text-[#7A2048] font-medium">Products</a>
            <button className="ml-2 bg-[#7A2048] text-white px-3 py-1.5 rounded-xl font-semibold text-sm hover:bg-[#5a1534] transition">
              Log Out
            </button>
          </div>
        </div>
      </div>


      {isOpen && (
        <div className="lg:hidden mt-2 space-y-2 text-[#1E2761] bg-[#E7E8D1] rounded-md py-3 px-4 shadow-md">
          <a href="#" className="block hover:text-[#7A2048]">Home</a>
          <a href="#" className="block hover:text-[#7A2048]">Blog</a>
          <a href="#" className="block hover:text-[#7A2048]">About Us</a>
          <a href="#" className="block hover:text-[#7A2048]">Products</a>
          <button className="w-full bg-[#7A2048] text-white px-3 py-1.5 rounded-xl mt-2 font-semibold text-sm hover:bg-[#5a1534]">
            Log Out
          </button>
        </div>
      )}
    </header>
  );
}
