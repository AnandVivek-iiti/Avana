import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const contacts = [
  {
    title: "Club Head",
    name: "Anurag Singh",
    email: "me240003006@iiti.ac.in",
    phone: "+91 9675109428",
    linkedin: "https://www.linkedin.com/in/anurag-singh",
    instagram: "https://instagram.com/anurag_singh",
    emoji: "🎯",
  },
  {
    title: "Margdarshan Head",
    name: "Ayush Sharma",
    email: "me240003006@iiti.ac.in",
    phone: "+91 9675109428",
    linkedin: "https://www.linkedin.com/in/ayush-sharma",
    instagram: "https://instagram.com/ayush_sharma",
    emoji: "🧭",
  },
  {
    title: "Our Developers",
    name: "Anand Vivek",
    email: "me240003006@iiti.ac.in",
    phone: "+91 9675109428",
    linkedin: "https://www.linkedin.com/in/anand-vivek",
    instagram: "https://instagram.com/anand_vivek",
    emoji: "💻",
  },
];

const ContactSection = () => {
  return (
    <div className="relative py-20 px-6 overflow-hidden text-white">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-gray-500 to-gray-600 animate-gradient-x opacity-30 -z-10"></div>

      {/* Typewriter Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-gray-700 to-purple-400 animate-glow"
      >
        <Typewriter
          words={["Get in Touch", "We're Here to Help", "Contact Us Anytime"]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={2000}
        />
      </motion.h2>

      {/* Contact Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-10 backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl"
      >
        {/* Contact Info */}
        <div className="space-y-6 text-sm md:text-base">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4 animate-glow">
            📍 Contact Info
          </h3>
          <p className="flex items-center gap-3 hover:text-cyan-300 transition">
            <FaPhoneAlt className="text-cyan-300" /> +91 9675109428
          </p>
          <p className="flex items-center gap-3 hover:text-pink-400 transition">
            <FaEnvelope className="text-pink-400" />
            <a href="mailto:avana@iiti.ac.in" className="underline">
              avana@iiti.ac.in
            </a>
          </p>
          <p className="flex items-center gap-3 hover:text-yellow-300 transition">
            <FaMapMarkerAlt className="text-yellow-300" />
            <span>
              Indian Institute of Technology Indore, Khandwa Road, Simrol,
              Indore 453552, INDIA
            </span>
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {contacts.map((person, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#1e1e2e] rounded-2xl p-6 flex flex-col items-center gap-4 shadow-xl hover:shadow-2xl border border-white/10 animate-glow-hover"
            >
              <h2 className="text-xl md:text-2xl font-bold text-cyan-400 text-center">
                {person.emoji} {person.title}
              </h2>
              <p className="text-white font-semibold text-center">{person.name}</p>

              <div className=" gap-4 mt-2">
                <a
                  href={`mailto:${person.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 text-2xl p-3 rounded-full hover:bg-pink-400/20 transition"
                >
                  <FaEnvelope />
                </a>
                <a
                  href={`tel:${person.phone}`}
                  className="text-cyan-300 text-2xl p-3 rounded-full hover:bg-cyan-300/20 transition"
                >
                  <FaPhoneAlt />
                </a>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-2xl p-3 rounded-full hover:bg-blue-500/20 transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={person.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 text-2xl p-3 rounded-full hover:bg-pink-500/20 transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg h-[300px] md:h-auto">
          <iframe
            title="IITI Location"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.4544370613653!2d75.92056217515605!3d22.524643434726464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIndian%20Institute%20of%20Technology%20Indore!5e0!3m2!1sen!2sus!4v1755412711281!5m2!1sen!2sus"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </motion.div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a
          href="https://whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 animate-glow-hover"
        >
          <FaWhatsapp size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/avana-iiti/?originalSubdomain=in"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 animate-glow-hover"
        >
          <FaLinkedin size={24} />
        </a>

        <a
          href="https://instagram.com/avana_iit_indore"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 animate-glow-hover"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
