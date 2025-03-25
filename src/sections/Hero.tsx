'use client'
import { motion } from "framer-motion"

import congImage from "@/assets/hero.png";
import { useRef } from "react";

import { ContactSection } from "@/sections/_compnenet/Contact";

export const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container mx-auto px-4 md:px-6 lg:ml-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="md:w-[450px] order-1 md:order-none text-center md:text-left">
            <div className="text-sm md:text-md inline-flex border border-[#222]/10 px-4 py-1 rounded-lg tracking-tight bg-white/20">
              South India Premier Astrologer
            </div>
            <h1 id="Booking" className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Discover Your Divine Path Through Ancient Wisdom
            </h1>
            <p className="text-lg md:text-xl text-[#010D3E] tracking-tight mt-6">
              Expert guidance in Vedic Astrology, Numerology & Vastu Shastra with over 30 years of experience
            </p>
            <div>
              <ContactSection />
            </div>
          </div>

          {/* Image */}
          <div className="mt-10 md:ml-52 md:mt-0 md:h-[648px] md:flex-1 relative order-0 md:order-none">
            <motion.img
              src={congImage.src}
              alt="Astrology illustration"
              className="w-full max-w-md mx-auto md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-15, 15],
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