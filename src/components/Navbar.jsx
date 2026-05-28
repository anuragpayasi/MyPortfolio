import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP entry animation
  useEffect(() => {
    gsap.fromTo(
      ".nav-anim",
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="nav-anim max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
     <a href="#home">   <h1 className="text-xl md:text-2xl font-bold tracking-wide cursor-pointer">
          <span className="text-white">Anurag</span><span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">.dev</span>
        </h1></a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-sm text-gray-300">

          <a href="#home" className="hover:text-cyan-400 transition hover:scale-110">
            Home
          </a>

          <a href="#about" className="hover:text-cyan-400 transition hover:scale-110">
            About
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition hover:scale-110">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition hover:scale-110">
            Contact
          </a>

        </nav>

        {/* CTA Button */}
       <a href="#contact"> <button className="hidden md:block px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:scale-105 transition shadow-lg shadow-cyan-500/20">
          Hire Me
        </button></a>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pt-8 pb-6 flex flex-col gap-5 text-gray-300 bg-black/80 backdrop-blur-xl border-t border-white/10"
        onClick={() => setMenuOpen(!menuOpen)}>

          <a href="#home" className="hover:text-cyan-400">Home</a>
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>

          <button className="mt-3 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600">
            Hire Me
          </button>

        </div>
      )}
    </header>
  );
}