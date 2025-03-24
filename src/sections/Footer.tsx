import React from "react";
import { Phone, Globe, MapPin, Clock, Calendar, Facebook, Instagram, Twitter, Heart, Briefcase, Home, BookOpen, MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";

import Logo from "@/assets/logo1.png";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-purple-800 via-gray-500 to-blue-950 text-gray-200 py-16 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section (Enhanced with Image/Logo) */}
          <div className="flex flex-col items-start">
            <Image src={Logo} alt="Logo" height={100} width={100} />
            <h2 className="text-3xl font-bold mb-4 text-white">Sri Sai Balaji</h2>
            <p className="text-sm leading-relaxed">
              South Indias Best Astrology & Vastu consultant in Kakinada, providing divine solutions.
            </p>
          </div>

          {/* Services Section (Styled with Icons) */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Our Services</h2>
            <ul className="space-y-3">
              {["Love Marriage Specialist", "Business Solutions", "Vastu Consultation", "Horoscope Reading"].map((service, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span className="flex items-center gap-1">
                    {/* Add relevant icons for each service */}
                    {index === 0 && <Heart size={16} className="text-purple-400" />}
                    {index === 1 && <Briefcase size={16} className="text-purple-400" />}
                    {index === 2 && <Home size={16} className="text-purple-400" />}
                    {index === 3 && <BookOpen size={16} className="text-purple-400" />}
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section (Detailed with Map Preview) */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Contact Us</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-purple-400" />
                <a href="tel:+917601034812" className="hover:text-purple-300">+91 76010 34812</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={18} className="text-purple-400" />
                <a href="https://www.saibalajijyotish.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">saibalajijyotish.com</a>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-purple-400" />
                  <span>Nagamalli Thota Junction, Apex Residency, First Floor, Kakinada - 533001</span>
                </div>
                
                {/* Map Preview (Replace with your actual map embed) */}
                <div className="mt-2">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!..." 
                    width="100%" 
                    height="150" 
                    style={{ border: 0 }} 
                    loading="lazy" 
                    title="Sri Sai Balaji Location"
                    className="rounded-md"
                  ></iframe>
                </div>
              </li>
            </ul>
          </div>

          {/* Working Hours & Quick Links Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Quick Links</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Calendar size={18} className="text-purple-400" />
                Monday - Saturday: 9:00 AM - 6:00 PM
              </li>
              <li className="flex items-center gap-2">
                <Clock size={18} className="text-purple-400" />
                Sunday: By Appointment
              </li>

              {/* Add more quick links */}
              <li><a href="/about" className="hover:text-purple-300">About Us</a></li>
              <li><a href="/services" className="hover:text-purple-300">Services</a></li>
              <li><a href="/contact" className="hover:text-purple-300">Contact Us</a></li>
              <li><a href="/privacy-policy" className="hover:text-purple-300">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-purple-300">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright (Enhanced with Animation) */}
        <div className="mt-12 flex flex-col lg:flex-row justify-between items-center border-t border-white/20 pt-6">
          <div className="flex space-x-6">
            <a href="#" className="hover:text-purple-300 transition-colors transform hover:scale-110">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors transform hover:scale-110">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors transform hover:scale-110">
              <Twitter size={22} />
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4 lg:mt-0">© 2025 Sri Sai Balaji Jyotishyalayam. All rights reserved.</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden">
        
        {/* WhatsApp Icon - Continuous Marquee */}
        <div className="absolute bottom-8 left-full animate-marquee-right-to-left whitespace-nowrap">
          <a
            href="https://wa.me/917601034812"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg inline-flex items-center justify-center w-14 h-14 mx-4"
          >
            <MessageCircle size={28} />
          </a>
        </div>

        {/* Phone Icon - Moves from Left to Right */}
        <div className="absolute bottom-8 right-full animate-marquee-left-to-right whitespace-nowrap">
          <a
            href="tel:+917601034812"
            className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg inline-flex items-center justify-center w-14 h-14 mx-4"
          >
            <PhoneCall size={28} />
          </a>
        </div>
      </div>

    </footer>
  );
};