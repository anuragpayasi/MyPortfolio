import { useEffect } from "react";
import gsap from "gsap";

export default function About() {

  useEffect(() => {

    gsap.fromTo(
      ".about-anim",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      }
    );

  }, []);

  const skills = [
    "React JS",
    "JavaScript",
    "Node JS",
    "Express JS",
    "MongoDB",
    "Tailwind CSS",
    "GSAP",
    "Framer Motion",
  ];

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#0B1120] pt-0 pb-24 sm:pb-28 px-5 sm:px-8 lg:px-16"
    >

      {/* ===== SAME HERO BACKGROUND ===== */}

      {/* Glow Left */}
      <div className="absolute top-[-10%] left-[-10%] w-[260px] sm:w-[350px] h-[260px] sm:h-[350px] bg-indigo-500/20 blur-[110px] rounded-full"></div>

      {/* Glow Right */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[260px] sm:w-[350px] h-[260px] sm:h-[350px] bg-cyan-500/10 blur-[110px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:45px_45px]"></div>

      {/* ===== CONTAINER ===== */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ===== HEADING ===== */}
        <div className="text-center mb-16">

          <p className="about-anim text-sm uppercase tracking-[4px] text-cyan-300 mb-3">
            About Me
          </p>

          <h2 className="about-anim text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">

            Passionate About Building

            <span className="block text-slate-400 mt-2">
              Modern Web Experiences
            </span>
          </h2>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">

          {/* ===== LEFT SIDE ===== */}
          <div className="about-anim">

            <div className="relative group max-w-md mx-auto lg:mx-0">

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 blur-3xl rounded-3xl"></div>

              {/* Card */}
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden p-3">

                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                  alt="about"
                  className="w-full h-[320px] sm:h-[420px] object-cover rounded-2xl group-hover:scale-[1.03] transition duration-500"
                />
              </div>
            </div>
          </div>

          {/* ===== RIGHT SIDE ===== */}
          <div>

            {/* Intro */}
            <div className="about-anim">

              <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">

                MERN Stack Developer focused on creating scalable,
                interactive and user-friendly digital products.
              </h3>

              <p className="mt-6 text-slate-400 leading-7 text-sm sm:text-base">

                I specialize in building modern web applications
                using React, Node.js and modern frontend technologies.
                My focus is on creating clean UI, smooth interactions
                and responsive user experiences across all devices.
              </p>

              <p className="mt-4 text-slate-400 leading-7 text-sm sm:text-base">

                I enjoy transforming ideas into real-world applications
                with attention to performance, scalability and modern design systems.
              </p>
            </div>

            {/* ===== SKILLS ===== */}
            <div className="about-anim mt-10">

              <h4 className="text-lg font-semibold text-white mb-5">
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-3">

                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-xl text-sm text-slate-300 hover:border-cyan-400/30 hover:bg-white/[0.06] transition duration-300"
                  >
                    {skill}
                  </div>
                ))}

              </div>
            </div>

            {/* ===== STATS ===== */}
            <div className="about-anim grid grid-cols-2 gap-4 mt-10">

              <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">

                <h4 className="text-2xl font-bold text-white">
                  10+
                </h4>

                <p className="text-slate-400 text-sm mt-2">
                  Completed Projects
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">

                <h4 className="text-2xl font-bold text-white">
                  1+
                </h4>

                <p className="text-slate-400 text-sm mt-2">
                  Years Learning
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}