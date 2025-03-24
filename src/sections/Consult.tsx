"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const CircularHero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 animate-gradient">
      {/* Outer Circle with Glass Morphism */}
      <motion.div 
        className="relative w-96 h-96 flex flex-col items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl text-center p-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Inner Content */}
        <h1 className="text-4xl font-bold text-white">100% Solutions on Your Problems</h1>
        <p className="text-gray-200 mt-4 max-w-xs">
          Sri Sai Balaji Jyotishyalayam Guarantees You Divine Solutions
        </p>
        
        {/* CTA Button */}
        <motion.button 
          className="mt-8 flex items-center gap-2 bg-white text-purple-900 px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone size={20} />
          Consult Now
        </motion.button>

        {/* Neon Glow Effect */}
        <div className="absolute inset-0 w-full h-full bg-purple-500 blur-3xl opacity-20 -z-10 rounded-full"></div>
      </motion.div>

      {/* Floating Animation */}
      {isClient && (
        <motion.div 
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{ y: -50, x: Math.random() * window.innerWidth, opacity: 0 }}
              animate={{ y: window.innerHeight, opacity: [0, 1, 0] }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Animated Gradient Background */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 10s ease infinite;
        }
      `}</style>
    </div>
  );
};
