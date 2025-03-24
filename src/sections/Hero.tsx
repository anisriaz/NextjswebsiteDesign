'use client'
import { motion } from "framer-motion"

import congImage from "@/assets/hero.png";
import { useRef } from "react";

import { ContactSection } from "@/sections/_compnenet/Contact";

export const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section ref={heroRef} className="pt-8 pb-32 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="ml-12">
        <div className="md:flex items-center justify-between">
          <div className="md:w-[450px]">
            <div className="text-md inline-flex border-[#222]/10 px-4 py-1 rounded-lg tracking-tight">South India Premier Astrologer
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6"> Discover Your Divine Path Through Ancient Wisdom</h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">Expert guidance in Vedic Astrology, Numerology & Vastu Shastra with over 30 years of experience</p>
            <ContactSection />
          </div>
          
          <div className="mt-20 ml-72 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img src={congImage.src} alt="cong" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 3,
                ease: 'easeInOut',
              }}
            />
          </div>
           
        </div>
      </div>
    </section>
  );
};
