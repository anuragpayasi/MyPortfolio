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
      className="relative w-full overflow-hidden bg-[#0B1120] pt-30 pb-24 sm:pb-28 px-5 sm:px-8 lg:px-16"
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
         {/* ===== LEFT SIDE ===== */}
<div className="about-anim">

  <div className="relative max-w-xl mx-auto lg:mx-0">

    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-indigo-500/10 blur-3xl rounded-3xl"></div>

    {/* Main Card */}
    <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8 overflow-hidden">

      {/* Heading */}
      <div className="mb-10">

        <p className="text-cyan-300 text-sm tracking-[3px] uppercase mb-3">
          Journey
        </p>

        <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">

          My Development
          <span className="block text-slate-400 mt-1">
            Journey Timeline
          </span>
        </h3>
      </div>

      {/* ===== TIMELINE ===== */}
      <div className="relative">

        {/* Line */}
        <div className="absolute left-[14px] top-2 w-[2px] h-full bg-gradient-to-b from-cyan-400/50 to-indigo-500/20"></div>

        {/* ===== ITEM 1 ===== */}
        <div className="relative pl-12 pb-10">

          {/* Dot */}
          <div className="absolute left-0 top-1 w-7 h-7 rounded-full border border-cyan-400/40 bg-[#0B1120] flex items-center justify-center">

            <div className="w-2.5 h-2.5 rounded-full bg-cyan-300"></div>
          </div>

          <span className="text-xs text-cyan-300 tracking-[2px] uppercase">
            2024
          </span>

          <h4 className="text-lg font-semibold text-white mt-2">
            Started Web Development
          </h4>

          <p className="text-sm text-slate-400 leading-7 mt-3">
            Started learning HTML, CSS and JavaScript while building
            responsive UI projects and frontend clones.
          </p>
        </div>

        {/* ===== ITEM 2 ===== */}
        <div className="relative pl-12 pb-10">

          {/* Dot */}
          <div className="absolute left-0 top-1 w-7 h-7 rounded-full border border-cyan-400/40 bg-[#0B1120] flex items-center justify-center">

            <div className="w-2.5 h-2.5 rounded-full bg-cyan-300"></div>
          </div>

          <span className="text-xs text-cyan-300 tracking-[2px] uppercase">
            2025
          </span>

          <h4 className="text-lg font-semibold text-white mt-2">
            MERN Stack Learning
          </h4>

          <p className="text-sm text-slate-400 leading-7 mt-3">
            Built full stack projects using React, Node.js,
            Express and MongoDB with authentication systems.
          </p>
        </div>

        {/* ===== ITEM 3 ===== */}
        <div className="relative pl-12">

          {/* Dot */}
          <div className="absolute left-0 top-1 w-7 h-7 rounded-full border border-cyan-400/40 bg-[#0B1120] flex items-center justify-center">

            <div className="w-2.5 h-2.5 rounded-full bg-cyan-300"></div>
          </div>

          <span className="text-xs text-cyan-300 tracking-[2px] uppercase">
            2026
          </span>

          <h4 className="text-lg font-semibold text-white mt-2">
            Building Professional Products
          </h4>

          <p className="text-sm text-slate-400 leading-7 mt-3">
            Focused on scalable architecture, premium UI systems,
            animations and production-ready web applications.
          </p>
        </div>

      </div>
    </div>
  </div>
</div>

          {/* ===== RIGHT SIDE ===== */}
          <div>

            {/* Intro */}
            <div className="about-anim">

              <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">

             Hey! I'm Anurag Payasi, a MERN Stack Developer and coding is not just what I do, it's what I live for.
              </h3>

              <p className="mt-6 text-slate-400 leading-7 text-sm sm:text-base">

             I didn't just stumble into development — I chose it because I genuinely love the process of building something from absolutely nothing. The moment an idea transforms into a fully functional, beautiful web experience — that feeling never gets old.
              </p>

              <p className="mt-4 text-slate-400 leading-7 text-sm sm:text-base">

              Right now I'm building strong — sharpening my frontend expertise while leveling up my backend skills every single day. I'm not here to be average. I'm here to be exceptional.
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
                  2+
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