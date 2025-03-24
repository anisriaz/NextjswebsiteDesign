"use client";
import React from "react";
import { Star, Clock, Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import cardImage from "@/assets/Images.jpeg";

const services = [
  {
    title: "Love Marriage Specialist",
    description: "Get predictions from renowned Astrologer PANDIT SRI P. R. SHASTRI.",
    duration: "4-5 hours",
    image: cardImage,
  },
  {
    title: "Family Dispute Resolution",
    description: "Save your family from problems with astrological guidance.",
    duration: "3-4 hours",
    image: cardImage,
  },
  {
    title: "Business Problem Solution",
    description: "Strengthen your business with astrology solutions.",
    duration: "2-3 hours",
    image: cardImage,
  },
];

export const Vedic = () => {
  return (
    <div className="relative bg-gradient-to-b from-white via-gray-100 to-gray-200 pb-20">
      {/* Star Icon Animation */}
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 -top-6 p-4 bg-purple-600 text-white rounded-full shadow-xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Star size={24} />
      </motion.div>

      {/* Heading Section */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide">Sacred Vedic Rituals</h1>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          Experience authentic ceremonial rituals performed with utmost devotion and ancient Vedic traditions.
        </p>
        <motion.div 
          className="mt-3 w-16 h-1 bg-purple-500 mx-auto rounded"
          animate={{ width: ["0%", "100%", "0%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Cards Section */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="relative bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-200 hover:shadow-purple-300"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(150, 50, 250, 0.3)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
            <Image 
                src={service.image.src}
                alt={service.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4">
                <h2 className="text-white text-xl font-semibold">{service.title}</h2>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center text-purple-600 text-sm font-semibold">
                <Clock size={16} className="mr-2" /> {service.duration}
              </div>
              <p className="text-gray-700 mt-3 leading-relaxed">{service.description}</p>
              
              <div className="mt-6 flex items-center justify-between text-purple-600 font-semibold">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }} className="flex items-center cursor-pointer">
                  <Phone size={18} className="mr-2" />
                  <span>Contact for Details</span>
                </motion.div>
                <span className="text-purple-500">+91 7601034812</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gradient Section Below */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-purple-500 to-transparent" />
    </div>
  );
};

