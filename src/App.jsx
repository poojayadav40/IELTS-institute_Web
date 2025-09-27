import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        (darkMode ? "dark bg-gray-900 text-gray-100" : "bg-white text-gray-900") +
        " transition-colors duration-500 ease-in-out min-h-screen"
      }
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
