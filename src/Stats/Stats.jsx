import { motion } from "framer-motion";
import CountUp from "react-countup";
import { STATS } from "../constants";
import { FaBriefcase, FaClock, FaUsers, FaAward } from 'react-icons/fa';

export default function Stats() {
  const statIcons = [
    <FaBriefcase className="text-amber-500 mb-4" size={28} />,
    <FaClock className="text-amber-500 mb-4" size={28} />,
    <FaUsers className="text-amber-500 mb-4" size={28} />,
    <FaAward className="text-amber-500 mb-4" size={28} />,
  ];

  return (
    <section className="bg-neutral-900 py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm">My Impact</h2>
          <h1 className="text-3xl md:text-5xl font-bold text-white">Milestones & Achievements</h1>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, backgroundColor: "rgba(38, 38, 38, 0.8)" }}
              className="flex flex-col items-center justify-center p-8 bg-neutral-800/40 rounded-3xl border border-neutral-700/50 backdrop-blur-sm transition-all"
            >
              {statIcons[index]}
              <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                <CountUp end={stat.value} duration={3} />+
              </div>
              <p className="text-gray-500 font-bold text-sm uppercase tracking-widest text-center">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
