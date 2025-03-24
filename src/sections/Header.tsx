'use client'

import Link from "next/link";
import Image from "next/image";

import Logo from "@/assets/logo1.png";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
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
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href="#" >Services</Link>
              <Link href="#" >Expertise</Link>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Book Consultaion</button>
              </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
