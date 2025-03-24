"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Smile, Heart, Clock } from "lucide-react";

const stats = [
  { icon: <Smile size={40} />, value: 99, suffix: "%", label: "Happy Clients" },
  { icon: <Heart size={40} />, value: 3500, suffix: "+", label: "Love Problems Consultation" },
  { icon: <Heart size={40} />, value: 10000, suffix: "+", label: "Love Marriage Consultation" },
  { icon: <Clock size={40} />, value: "24×7", label: "Live Support" },
];

export const StatsSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-300 to-purple-500 p-10 text-white rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white/10 rounded-xl shadow-md flex flex-col items-center gap-2"
            whileHover={{ scale: 1.1 }}
          >
            {stat.icon}
            <motion.h2 className="text-3xl font-bold">
              <CountUp end={typeof stat.value === "number" ? stat.value : 0} duration={2} />{stat.suffix}
            </motion.h2>
            <p className="text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
