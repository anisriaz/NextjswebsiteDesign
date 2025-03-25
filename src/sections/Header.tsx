'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import Logo from "@/assets/logo1.png";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const links = [
    { id: "Services", label: "Services" },
    { id: "Expertise", label: "Expertise" },
    { id: "Booking", label: "Book Consultation" },
  ];


  return (
    <header className="sticky top-0 w-full backdrop-blur-lg z-20">
      {/* Top Bar */}
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Welcome To SRI SAI BALAJI JYOTISHYLAYAM</p>
        <div className="inline-flex gap-1 items-center">
          <p>Share with us</p>
        </div>
      </div>

      {/* Navbar */}
      <div className="py-4 px-5">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/">
            <Image src={Logo || "Logo"} alt="Logo" height={60} width={60} className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            {links.map(({ id, label }) => (
              id === "Booking" ? (
                <button
                  key={id}
                  onClick={() => handleScroll(id)}
                  className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight cursor-pointer"
                >
                  {label}
                </button>
              ) : (
                <button
                  key={id}
                  onClick={() => handleScroll(id)}
                  className="cursor-pointer hover:text-black"
                >
                  {label}
                </button>
              )
            ))}
          </nav>

          {/* Mobile Menu Button - Fix Positioning */}
          <button
            className="md:hidden text-black focus:outline-none flex items-center justify-center w-10 h-10 rounded-full border border-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Centered and Adjusted Width */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[100%] left-0 w-full bg-white backdrop-blur-lg shadow-md rounded-lg mt-2 p-4">
            <nav className="flex flex-col gap-4 text-black/60 items-center">
              {links.map(({ id, label }) => (
                id === "Booking" ? (
                  <button
                    key={id}
                    onClick={() => handleScroll(id)}
                    className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight cursor-pointer"
                  >
                    {label}
                  </button>
                ) :
                <button
                  key={id}
                  className="px-4 py-2 hover:bg-gray-100 rounded w-full text-lg"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>

  );
};
