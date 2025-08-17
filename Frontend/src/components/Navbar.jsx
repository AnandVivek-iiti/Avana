import Avana from "../assets/Avana.png";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const getInitialTheme = () => {
    if (typeof window === "undefined") return true;
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  };
  const items = ["About", "Events", "Gallery", "Team", "Contact"];

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
    <div className="container sticky top-0 z-50">
      <nav
        className="
          flex justify-between items-center px-6 md:px-12 py-4
          bg-black/10 dark:bg-white/5 backdrop-blur-md sticky top-0 z-50
        "
      >
        <div className="flex items-center gap-3">
          <img src={Avana} alt="Avana Logo" className="h-14 w-14" />
          <span className="text-2xl font-extrabold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            AVANA
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-lg">
          {items.map((item, i) => (
            <li key={i}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode((d) => !d)}
            className="p-2 rounded-full hover:bg-yellow-300 hover:text-black transition"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          {/* CTA */}
        
          <button className="hidden md:block bg-yellow-400 text-black px-5 py-2 rounded-xl font-semibold hover:bg-white hover:text-green-800 transition duration-300">

            <a href="https://drive.google.com/file/d/1LBg4s-kI_vxR-h-yCmoDjpSVXkP-COrJ/view?fbclid=PAZXh0bgNhZW0CMTEAAafPD0kyAXXODttsS6AwONhcCT5nivwpeR0adk4F9ch6BAg9KXTOruKPs7rNuw_aem_Le_6H_Cvo3DviKR1xBHcRA">
              View Yearbook →
            </a>
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.ul
          className="flex flex-col items-center gap-4 py-4 bg-black/20 dark:bg-white/10 md:hidden"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {items.map((item, i) => (
            <li key={i}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}
