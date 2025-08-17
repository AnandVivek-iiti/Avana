// import Avana from "../assets/Avana.png";
// import { Typewriter } from "react-simple-typewriter";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// export default function App() {
//  const event = [
//   { name: "Cloth Donation", color: "bg-green-300", emoji: "🌱" },
//   { name: "Teaching", color: "bg-blue-300", emoji: "📚" },
//   { name: "Guidance", color: "bg-yellow-300", emoji: "💡" },
//   { name: "Social Service", color: "bg-purple-300", emoji: "📝" },
//   { name: "Volunteering", color: "bg-orange-300", emoji: "👥" },
//   { name: "Blood Donation", color: "bg-red-400", emoji: "🩸" },
//   { name: "Old Age Home", color: "bg-pink-300", emoji: "🏠" },
//   { name: "Diwali Celebration", color: "bg-indigo-300", emoji: "✨" },
// ];

//   const events = [
//     "🌱 Cloth donation",
//     "📚 Teaching",
//     "💡 Guidance",
//     "🏥 Social Service",
//     "🧑‍🤝‍🧑 Volunteering",
//     "🩸 Blood donation",
//     "🏡 Old Age Home Support",
//     "✨ Diwali celebration",
//   ];
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Navbar */}
//       <nav className="flex justify-between items-center px-8 py-4 bg-black/30 backdrop-blur-md">
//         <div className="flex items-center gap-3">
//           <img src={Avana} alt="Avana Logo" className="h-20 w-20" />
//           <span className="text-xl font-bold">AVANA</span>
//         </div>
//         <ul className="hidden md:flex gap-8 font-medium">
//           <li>
//             <a href="#" className="hover:text-yellow-400">
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-yellow-400">
//               Events
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-yellow-400">
//               Members
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-yellow-400">
//               Contact
//             </a>
//           </li>
//         </ul>
//         <button className="bg-white text-green-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black">
//           Get Started →
//         </button>
//       </nav>

//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row justify-between items-center flex-grow px-10 py-16">
//         <div className="max-w-xl mb-10 md:mb-0">
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             Welcome to{" "}
//             <span className="text-yellow-300">
//               <Typewriter
//                 words={[" AVANA Club "]}
//                 loop={1}
//                 cursor
//                 cursorStyle=""
//                 typeSpeed={100}
//                 deleteSpeed={50}
//                 delaySpeed={1000}
//               />
//             </span>
//           </h1>

//           <p className="mt-4 text-xl text-gray-200">
//             Avana is a student-driven social welfare club at IIT Indore,
//             dedicated to uplifting underprivileged communities. Rooted in
//             empathy, inclusivity, and service, we work through initiatives
//             like education support, health drives, donations, and volunteering.
//             Our mission is simple — to inspire collective action and create a
//             compassionate, equitable, and sustainable society.
//           </p>
//           <button className="mt-6 bg-white text-orange-600 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 hover:text-black">
//             Get Started →
//           </button>
//         </div>

//         {/* Card Grid */}
//         <motion.div
//           className="grid grid-cols-2 gap-4 text-xl bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl"
//           initial={{ y: -100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           {events.map((item, idx) => (
//             <motion.div
//               key={idx}
//               className="bg-white/20 p-6 rounded-xl text-center font-semibold hover:bg-yellow-400 hover:text-black transition"
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: idx * 0.1, duration: 0.5 }}
//             >
//               {item}
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-4 bg-black/40">
//         © 2025 AVANA Club | Striving for Change | IIT Indore
//       </footer>
//     </div>
//   );
// }

import Avana from "../assets/Avana.png";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react"; // icons

export default function App() {
  const event = [
    { name: "Cloth Donation", color: "bg-green-300", emoji: "🌱" },
    { name: "Teaching", color: "bg-blue-300", emoji: "📚" },
    { name: "Guidance", color: "bg-yellow-300", emoji: "💡" },
    { name: "Social Service", color: "bg-purple-300", emoji: "📝" },
    { name: "Volunteering", color: "bg-orange-300", emoji: "👥" },
    { name: "Blood Donation", color: "bg-red-400", emoji: "🩸" },
    { name: "Old Age Home", color: "bg-pink-300", emoji: "🏠" },
    { name: "Diwali Celebration", color: "bg-indigo-300", emoji: "✨" },
  ];

  // ---------- Theme handling ----------
  const getInitialTheme = () => {
    if (typeof window === "undefined") return true; // default dark on SSR
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    // fallback to system preference
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(getInitialTheme());

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white  w-full h-screen">
      {/* <div
      className="
        min-h-screen flex flex-col
        bg-gradient-to-br from-green-100 via-emerald-200 to-lime-100 text-gray-900
        dark:bg-gradient-to-br dark:from-gray-950 dark:via-black dark:to-stone-900 dark:text-white
        transition-colors duration-500
      "
    > */}

      {/* Hero */}
      <section className="flex flex-col md:flex-row justify-between items-center flex-grow px-8 md:px-16 py-16">
        {/* Left */}
        <div className="max-w-xl mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              <Typewriter
                words={["AVANA Club"]}
                loop={1}
                cursor
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
            Avana is a student-driven social welfare club at IIT Indore,
            dedicated to uplifting underprivileged communities. Rooted in
            empathy, inclusivity, and service, we work through initiatives like
            education support, health drives, donations, and volunteering.
            <br />
            <span className="font-semibold text-yellow-300">
              Together we inspire change and build compassion.
            </span>
          </p>

          <button className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 hover:bg-white hover:text-green-800 transition duration-300">
            Get Started →
          </button>
        </div>

        {/* Right - Event Cards */}
        <motion.div
          className="grid grid-cols-2 gap-5 text-lg bg-white/40 dark:bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {event.map((item, idx) => (
            <motion.div
              key={idx}
              className={`${item.color} bg-opacity-90 p-6 rounded-xl text-center font-semibold flex flex-col items-center justify-center hover:scale-105 transition duration-300 shadow-md`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
            >
              <span className="text-3xl mb-2">{item.emoji}</span>
              {item.name}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-black/10 dark:bg-white/5 text-gray-800 dark:text-gray-300 mt-8">
        <p className="text-sm md:text-base">
          © 2025{" "}
          <span className="text-yellow-300 font-semibold">AVANA Club</span> |
          Striving for Change | IIT Indore
        </p>
      </footer>
      {/* </div> */}
    </div>
  );
}
