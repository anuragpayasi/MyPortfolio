import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import AnuragProfile from '../assets/AnuragProfile.jpeg'

export default function Hero() {
  const imageRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);

  const roles = [
    "MERN Stack Developer",
    "Frontend Engineer",
    "React Developer",
    "Creative UI Developer",
  ];

  const [index, setIndex] = useState(0);

  // Role Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  // GSAP Entry Animation
  useEffect(() => {
    gsap.fromTo(
      ".hero-item",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      }
    );
  }, []);

  // Smooth Cursor Movement Effect
  useEffect(() => {
    const moveItems = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;

      // Main Image Movement
      gsap.to(imageRef.current, {
        x: x * 40,
        y: y * 40,
        duration: 1.5,
        ease: "power3.out",
      });

      // Blob Movement
      gsap.to(blob1Ref.current, {
        x: x * 80,
        y: y * 80,
        duration: 2,
        ease: "power3.out",
      });

      gsap.to(blob2Ref.current, {
        x: -x * 80,
        y: -y * 80,
        duration: 2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveItems);

    return () => {
      window.removeEventListener("mousemove", moveItems);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-[#0B1120]"
    >
      {/* ===== MOVING BLOBS ===== */}

      {/* Blob 1 */}
      <div
        ref={blob1Ref}
        className="absolute top-[-10%] left-[-10%] w-[260px] sm:w-[350px] h-[260px] sm:h-[350px] bg-indigo-500/20 blur-[110px] rounded-full"
      ></div>

      {/* Blob 2 */}
      <div
        ref={blob2Ref}
        className="absolute bottom-[-10%] right-[-10%] w-[260px] sm:w-[350px] h-[260px] sm:h-[350px] bg-cyan-500/10 blur-[110px] rounded-full"
      ></div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:45px_45px]"></div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-screen flex items-center px-5 sm:px-8 lg:px-5 py-28 lg:py-20">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-8 items-center w-full">

          {/* ===== LEFT CONTENT ===== */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Badge */}
            <div className="hero-item inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl mb-6">

              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>

              <span className="text-xs sm:text-sm text-slate-300">
                Available for Freelance Work
              </span>
            </div>

            {/* Heading */}
            <h1 className="hero-item text-[2.4rem] leading-[1.05] sm:text-5xl md:text-[3.8rem] lg:text-6xl font-bold tracking-tight text-white">

              Hello, World! 

              <span className="block mt-2 bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent pb-4">
                I am Anurag  Payasi
              </span>


            </h1>

            {/* Role */}
            <div className="hero-item mt-5 text-base sm:text-lg md:text-xl text-slate-300 font-medium">

              I'm a{" "}

              <span className="text-cyan-300">
                {roles[index]}
              </span>
            </div>

            {/* Description */}
            <p className="hero-item mt-6 text-sm sm:text-base text-slate-400 leading-7 max-w-xl mx-auto lg:mx-0">

              A MERN Stack Developer who turns ideas into reality through clean code and creative thinking. I believe great websites are built at the intersection of logic and creativity — and that's exactly where I love to work. Always learning, always building, always growing.
            </p>

            {/* Buttons */}
            <div className="hero-item mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-medium overflow-hidden hover:scale-[1.03] transition duration-300 shadow-lg shadow-cyan-500/10">

                <a href="#projects"><span className="relative z-10">
                  View My Work
                </span></a>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 transition"></div>
              </button>

             <a href="#contact"> <button className="px-6 py-3 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-xl text-white hover:bg-white/[0.06] hover:border-white/20 transition duration-300">

                Contact Me
              </button></a>
            </div>

            {/* Stats */}
            <div className="hero-item mt-10 flex items-center justify-center lg:justify-start gap-6 sm:gap-10 flex-wrap">

              <div>
                <h3 className="text-2xl font-semibold text-white">
                  2+
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white">
                  1+
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  Years Learning
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white">
                  100%
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  Responsive
                </p>
              </div>

            </div>
          </div>

          {/* ===== RIGHT IMAGE ===== */}
          <div className="order-1 lg:order-2 hero-item flex justify-center">

            <div
              ref={imageRef}
              className="relative w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px]"
            >

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 blur-[60px]"></div>

              {/* Rotating Border */}
              <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-spin [animation-duration:14s]"></div>

              {/* Inner Border */}
              <div className="absolute inset-4 rounded-full border border-white/10"></div>

              {/* Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl p-3">

                <img
                  src={AnuragProfile}
                  alt="developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}