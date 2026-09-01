import "./Projects.css";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="projects" className="bg-neutral-900 py-24 px-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-4">Portfolio</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white">Featured Projects</h1>
          </div>
          <p className="text-gray-400 max-w-sm">
            A selection of my recent works, ranging from small components to full-scale web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-neutral-800 rounded-3xl overflow-hidden border border-neutral-700/50"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={project.image} 
                  alt={project.title} 
                />
                <div className="absolute inset-0 bg-neutral-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-amber-500 text-neutral-900 rounded-full hover:scale-110 transition-transform"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-neutral-900 rounded-full hover:scale-110 transition-transform"
                  >
                    <FaCode size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-amber-500 text-sm font-bold uppercase tracking-wider">
                  {project.tech}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-4 group-hover:text-amber-500 transition-colors">
                  {project.title}
                </h3>
                <div className="flex justify-between items-center">
                  <a 
                    href={project.liveLink}
                    className="text-white font-semibold flex items-center gap-2 group/link"
                  >
                    View Project 
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
