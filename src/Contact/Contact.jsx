import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { PERSONAL_INFO } from "../constants";

export default function Contact() {
  return (
    <section className="bg-neutral-900 py-24 px-6 overflow-hidden" id="contact">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-4">Get In Touch</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Let's Work Together</h1>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to reach out. 
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-amber-500">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase font-bold">Email Me</p>
                  <p className="text-white font-bold">{PERSONAL_INFO.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-amber-500">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase font-bold">Location</p>
                  <p className="text-white font-bold">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-amber-500">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase font-bold">Call Me</p>
                  <p className="text-white font-bold">{PERSONAL_INFO.phone}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-800/50 p-8 md:p-10 rounded-3xl border border-neutral-700/50 backdrop-blur-sm"
          >
            <form action={`https://formsubmit.co/${PERSONAL_INFO.email}`} method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="New message from Portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm font-medium ml-1">Full Name</label>
                  <input 
                    name="name"
                    type="text" 
                    placeholder="John Doe"
                    required
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-amber-500 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm font-medium ml-1">Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    placeholder="john@example.com"
                    required
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-amber-500 outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-gray-400 text-sm font-medium ml-1">Subject</label>
                <input 
                  name="subject"
                  type="text" 
                  placeholder="How can I help you?"
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-amber-500 outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-400 text-sm font-medium ml-1">Message</label>
                <textarea 
                  name="message"
                  rows="4"
                  placeholder="Your message here..."
                  required
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-amber-500 outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-amber-500 text-neutral-900 font-bold py-4 rounded-xl hover:bg-amber-400 transition-all transform hover:-translate-y-1 shadow-lg shadow-amber-500/20">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
