import React from "react";
import Image from "next/image";
import cardImage from "@/assets/images.jpeg";

const services = [
  {
    title: "Love Marriage Specialist",
    description: "Want to marry your dream girl? Get love marriage specialist prediction from renowned PANDIT SRI P. R. SHASTRI.",
    image: cardImage,
  },
  {
    title: "Family Dispute Resolution",
    description: "Family is the most precious thing in life. Protect it with expert guidance from our astrologer.",
    image: cardImage,
  },
  {
    title: "Business Problem Solution",
    description: "Strengthen your business growth by taking astrology solutions from Astrologer PANDIT SRI P. R. SHASTRIJI.",
    image: cardImage,
  },
  {
    title: "Career & Job Issues",
    description: "Facing struggles in career or job? Get accurate predictions and remedies.",
    image: cardImage,
  },
  {
    title: "Health & Well-being",
    description: "Find out how astrology can improve your health and well-being with precise guidance.",
    image: cardImage,
  },
  {
    title: "Wealth & Property Issues",
    description: "Struggling with financial stability? Get expert astrology solutions today.",
    image: cardImage,
  },
];

export const Astrologer = () => {
  return (
    <div>
      {/* Heading Section with Half White/Silver Gradient */}
      <div className="bg-indigo-100 py-16 px-6 text-center">
        <h1 className="font-bold text-4xl lg:text-5xl text-gray-900">
          Astrologer Nearby Me - Online Astrology Consultation
        </h1>
        <h2 className="font-semibold text-2xl mt-3 text-gray-700">
          Welcome To SRI SAI BALAJI JYOTISHYLAYAM
        </h2>
        <p className="mt-5 text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed">
          South India&apos;s famous astrology consultant for 20+ years. PANDITH SRI P. R. SHASTRI from Mantralayam, Andhra Pradesh, is known for 99% accurate predictions, helping people with their daily life hurdles.
        </p>
      </div>

      {/* Services Section with Colorful Gradient Background */}
      <div className="bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-300 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-6">
          {services.map((service, index) => (
            <div
              key={index}
                className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div>
                <Image
                  src={service.image.src}
                  alt={service.title}
                  width={500}
                  height={192}
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900">{service.title}</h2>
                  <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
