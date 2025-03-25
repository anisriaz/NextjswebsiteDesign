"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import type { StaticImageData } from "next/image";

import cardImage from "@/assets/images.jpeg";



const services = [
  {
    title: "Love Marriage Specialist",
    description: "Want to marry your dream girl? Get love marriage specialist prediction from renowned PANDIT SRI P. R. SHASTRI.",
    image: cardImage,
  },
  {
    title: "Family Dispute Resolution",
    description: "Family is precious thing anyone could have in his/her life. Save it from any problem.",
    image: cardImage,
  },
  {
    title: "Business Problem Solution",
    description: "Strengthen growth of your business by taking astrology solution from Astrologer PANDIT SRI P. R. SHASTRIJI.",
    image: cardImage,
  },
  {
    title: "Family Dispute Resolution",
    description: "Family is precious thing anyone could have in his/her life. Save it from any problem.",
    image: cardImage,
  },
  {
    title: "Business Problem Solution",
    description: "Strengthen growth of your business by taking astrology solution from Astrologer PANDIT SRI P. R. SHASTRIJI.",
    image: cardImage,
  },
  {
    title: "Business Problem Solution",
    description: "Strengthen growth of your business by taking astrology solution from Astrologer PANDIT SRI P. R. SHASTRIJI.",
    image: cardImage,
  },
  {
    title: "Family Dispute Resolution",
    description: "Family is precious thing anyone could have in his/her life. Save it from any problem.",
    image: cardImage,
  },
  {
    title: "Business Problem Solution",
    description: "Strengthen growth of your business by taking astrology solution from Astrologer PANDIT SRI P. R. SHASTRIJI.",
    image: cardImage,
  },
];


export default function Services() {
  return (
    <>
    <div id="Services" className="text-center"> 
    <h1 className="font-bold text-4xl text-violet-400 items-center justify-center mt-12 bg-[#EAEEFE_100%]">Personal Problems Solutions</h1>
    <h1 className="text-gray-500 mt-4 mb-12">Unlock the mysteries of your life path with our comprehensive astrological services</h1>
    </div>
    <motion.div
      className="min-h-screen flex flex-wrap gap-8 items-center justify-center bg-gradient-to-t from-[#EAEEFE_100%] to-[#183EC2] p-10"
      animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
    >
      {services.map((service, index) => (
        <InteractiveCard key={index} service={service} />
      ))}
    </motion.div>
    </>
  );
};

const InteractiveCard = ({
  service,
}: {
  service: { title: string; description: string; image: StaticImageData };
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [hover, setHover] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left - width / 2) / width) * 20; // Tilt effect
    const y = ((e.clientY - top - height / 2) / height) * -20;

    setRotateX(y);
    setRotateY(x);
  };

  return (
    <>
    <motion.div
      className="relative w-80 h-96 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
      style={{
        transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${hover ? 1.05 : 1})`,
        transition: "transform 0.3s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setRotateX(0);
        setRotateY(0);
        setHover(false);
      }}
      onClick={() => setFlipped(!flipped)}
    >
      {/* Glass Morphism Background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md"></div>

      {/* Card Flip Effect */}
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden">
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>

          {/* Image Section */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="rounded-t-2xl object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-black">{service.title}</h3>
            <p className="text-gray-800 text-sm mt-2">{service.description}</p>
          </div>

          {/* Animated Light Reflection */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-to-br from-white/20 to-transparent"
            animate={{ opacity: hover ? 0.3 : 0.1 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-lg font-semibold p-6 rounded-2xl"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <p>Additional details or actions can go here!</p>
        </div>
      </motion.div>

      {/* Glowing Border Effect */}
      {hover && (
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-white/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
      )}
    </motion.div>
    </>
  );
};




