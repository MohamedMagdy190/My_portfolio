import { useRef } from "react";
import "./Hero.css";
import profileImage from "./profile.png";
import TextType from "./TextType";
import { GiHand } from "react-icons/gi";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { SOCIAL_LINKS, PERSONAL_INFO } from "../constants";
import { FaDownload } from 'react-icons/fa';

export default function Hero() {
  const cardRef = useRef(null);
  
  // Motion values for Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mouse move handler
  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Calculate rotation (-20 to 20 degrees)
    const xPct = (mouseX / width - 0.5) * 40;
    const yPct = (mouseY / height - 0.5) * -40;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Spring animations for smoothness
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, (val) => val);
  const rotateY = useTransform(springX, (val) => val);

  return (
    <section id="home" className="flex items-center justify-center min-h-screen w-full bg-neutral-900 px-6 py-20 overflow-hidden">
      <div className="container mx-auto flex flex-col items-center justify-center gap-16">
        
        {/* Profile Card with 3D Tilt & Floating Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full max-w-6xl">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto perspective-1000"
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative group cursor-pointer"
            >
              {/* Glowing Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-300 rounded-[2rem] blur opacity-25 group-hover:opacity-60 transition duration-500"></div>
              
              <div 
                style={{ transform: "translateZ(50px)" }}
                className="relative bg-neutral-800 p-6 rounded-[2rem] shadow-2xl border border-neutral-700/50 max-w-[320px]"
              >
                {/* Image Container with Floating Animation */}
                <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ 
                     duration: 4, 
                     repeat: Infinity, 
                     ease: "easeInOut" 
                   }}
                   style={{ transform: "translateZ(80px)" }}
                   className="overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-700 to-neutral-900 mb-6 border border-neutral-600/30 shadow-inner"
                >
                  <img
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    src={profileImage}
                    alt={PERSONAL_INFO.name}
                  />
                </motion.div>
                
                <div 
                  style={{ transform: "translateZ(50px)" }}
                  className="text-center space-y-4"
                >
                  <div>
                    <h1 className="text-2xl font-bold text-white mb-1 tracking-tight">{PERSONAL_INFO.name}</h1>
                    <p className="text-amber-500 text-sm font-medium flex items-center justify-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Available for work
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3 pt-2">
                    {SOCIAL_LINKS.map((link) => (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-neutral-900/50 text-gray-400 hover:text-white hover:bg-amber-500 transition-all duration-300 transform hover:-translate-y-1 border border-neutral-700/50"
                      >
                        <link.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Intro Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800 border border-neutral-700 text-amber-500 font-medium">
              <span>Welcome to my Digital Space</span>
              <GiHand className="animate-bounce" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
                I'm <span className="text-amber-500">{PERSONAL_INFO.name}</span>
              </h1>
              <div className="h-12">
                <TextType
                  text={[
                    "Front-End Developer",
                    "UI/UX Enthusiast",
                    "IT Support Specialist",
                    "Creative Coder",
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  textColors={["#facc15", "#22d3ee", "#f87171", "#B6C9CF"]}
                  className="text-2xl md:text-4xl font-bold opacity-80"
                />
              </div>
            </div>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
              I specialize in creating clean, user-friendly digital experiences
              by blending creativity with functionality. I focus on crafting designs that
              not only look great but also provide smooth and engaging user
              interactions.
            </p>

            <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#contact">
                <button className="bg-amber-500 text-neutral-900 font-bold px-10 py-4 rounded-full hover:bg-amber-400 transition-all transform hover:-translate-y-1 shadow-xl shadow-amber-500/20">
                  Contact Me
                </button>
              </a>
              <a href="/resume.pdf" download="Mohamed-Magdy-CV.pdf">
                <button className="flex items-center gap-2 bg-transparent border-2 border-neutral-700 text-white font-bold px-10 py-4 rounded-full hover:border-amber-500 hover:text-amber-500 transition-all transform hover:-translate-y-1">
                  <FaDownload size={18} /> Download CV
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
