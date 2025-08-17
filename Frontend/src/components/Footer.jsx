import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-8 px-4 flex flex-col items-center">
      {/* Social Icons */}
      <div className="flex gap-4 mb-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-6 h-6 hover:text-gray-200 transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-6 h-6 hover:text-gray-200 transition" />
        </a>
      </div>
      

      {/* Footer Text */}
      <p className="text-center text-gray-200">
        Copyright 2024 <span className="font-semibold">AVANA IIT</span>. All Rights Reserved.
      </p>
      <p className="text-center text-gray-200 mt-1">
        Made with <span className="text-red-500">❤</span> by <span className="font-semibold">AVANA IITI</span>
      </p>
      <p className="text-center text-gray-200 mt-1">
          Striving for Change | IIT Indore
      </p>

    </footer>
  );
}
