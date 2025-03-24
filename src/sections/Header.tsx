'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import Logo from "@/assets/logo1.png";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 backdrop-blur-lg z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Welcome To SRI SAI BALAJI JYOTISHYLAYAM</p>
        <div className="inline-flex gap-1 items-center">
          <p>Learn with us</p>
        </div>
      </div>
      <div className="py-5">
        <div className="mx-auto px-5">
          <div className="flex items-center justify-between">
            <Image src={Logo || "Logo"} alt="Logo" height={100} width={100} />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href="#" >Services</Link>
              <Link href="#" >Expertise</Link>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Book Consultation
              </button>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-black focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4">
              <nav className="flex flex-col gap-4 text-black/60">
                <Link 
                  href="#" 
                  className="px-4 py-2 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="#" 
                  className="px-4 py-2 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Expertise
                </Link>
                <button 
                  className="bg-black text-white px-4 py-2 rounded-lg font-medium w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Consultation
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};