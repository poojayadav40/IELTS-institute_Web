import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed top-0 w-full z-10 transition-colors duration-500 ease-in-out">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          IELTS Institute
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
          <li><a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400">Features</a></li>
          <li><a href="#testimonials" className="hover:text-blue-600 dark:hover:text-blue-400">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 
                     transition-all duration-500 ease-in-out hover:scale-110"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-3 focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-800 shadow-md px-6 py-4 space-y-4 font-medium transition-colors duration-500 ease-in-out">
          <li><a href="#" className="block hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
          <li><a href="#features" className="block hover:text-blue-600 dark:hover:text-blue-400">Features</a></li>
          <li><a href="#testimonials" className="block hover:text-blue-600 dark:hover:text-blue-400">Testimonials</a></li>
          <li><a href="#contact" className="block hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
