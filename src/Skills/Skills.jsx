import "./Skills.css";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "../constants";

export default function Skills() {
  return (
    <section id="skills" className="flex items-center justify-center bg-neutral-900 py-24 px-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container max-w-6xl mx-auto"
      >
        <div className="text-center mb-20">
          <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-4">My Expertise</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white">Technical Skills</h1>
        </div>

        <div className="space-y-24">
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-2xl font-bold text-white mb-10 border-l-4 border-amber-500 pl-4">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -10,
                      boxShadow: `0 20px 40px -15px ${skill.color}44`,
                    }}
                    className="relative flex flex-col items-center justify-center p-8 bg-neutral-800/40 rounded-3xl border border-neutral-700/50 backdrop-blur-sm transition-all group overflow-hidden"
                  >
                    {/* Background Glow Effect */}
                    <div 
                      className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                      style={{ backgroundColor: skill.color }}
                    ></div>

                    <div 
                      className="text-6xl mb-6 transition-transform group-hover:scale-110 duration-300"
                      style={{ color: skill.color }}
                    >
                      <skill.icon />
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors mb-2">
                        {skill.name}
                      </h3>
                      <p className="text-gray-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {skill.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
