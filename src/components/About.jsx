import { useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import AnuragProfile from "../assets/AnuragProfile.jpeg";

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
      className="relative w-full overflow-hidden bg-[#0B1120] pt-28 pb-24 px-5 sm:px-8 lg:px-16"
    >

      <div className="absolute top-[-10%] left-[-10%] w-[260px] sm:w-[350px] h-[260px] sm:h-[350px] bg-indigo-500/20 blur-[110px] rounded-full"></div>

      <div className="absolute bottom-[-10%] right-[-10%] w-[260px] sm:w-[350px] h-[260px] sm:h-[350px] bg-cyan-500/10 blur-[110px] rounded-full"></div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:45px_45px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

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

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">

          <div className="about-anim relative">

            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-indigo-500/10 blur-3xl rounded-[32px]"></div>

            <div className="relative rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl overflow-hidden p-6 sm:p-8">

              <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-cyan-500/[0.03] to-transparent"></div>

              <div className="relative z-10 text-center mb-12">

                <p className="text-cyan-300 text-sm tracking-[4px] uppercase mb-3">
                  Skills Universe
                </p>

                <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">
                  My Tech Space
                </h3>

              </div>

              <div className="relative flex items-center justify-center h-[520px] sm:h-[580px] overflow-hidden">

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, 0, -2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-30"
                >

                  <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full scale-125"></div>

                  <div className="relative w-72 h-74 sm:w-60 sm:h-72 lg:w-52 lg:h-64 rounded-[28px] overflow-hidden border border-white/10 bg-[#0F172A]/80 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.08)] -top-15 sm:top-0">

                    <img
                      src={AnuragProfile}
                      alt="developer"
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent"></div>

                    <div className="absolute bottom-0 left-0 w-full p-4">

                      <h4 className="text-white text-lg font-semibold">
                        Anurag
                      </h4>

                      <p className="text-slate-300 text-xs mt-1">
                        MERN Stack Developer
                      </p>

                    </div>

                  </div>

                </motion.div>

                <div className="hidden md:block">

                  {[
                    {
                      title: "React JS",
                      position: "top-[18%] left-[6%]",
                    },

                    {
                      title: "JavaScript",
                      position: "top-[45%] right-[1%]",
                    },

                    {
                      title: "Node JS",
                      position: "top-[48%] left-[2%]",
                    },

                    {
                      title: "MongoDB",
                      position: "top-[75%] right-[8%]",
                    },

                    {
                      title: "Express JS",
                      position: "bottom-[15%] left-[8%]",
                    },

                    {
                      title: "Tailwind CSS",
                      position: "bottom-[2%] right-[35%]",
                    },

                    {
                      title: "C++",
                      position: "top-[5%] left-[43%]",
                    },

                    {
                      title: "Java",
                      position: "top-[15%] right-[10%]",
                    },

                  ].map((item, index) => (

                    <motion.div
                      key={index}
                      className={`absolute ${item.position} z-20`}
                      animate={{
                        y: [0, -8, 0],
                        x: [0, 4, 0],
                      }}
                      transition={{
                        duration: 4 + index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >

                      <div className="group relative">

                        <div className="absolute inset-0 bg-cyan-400/10 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

                        <div className="relative px-4 py-3 lg:px-4 lg:py-3 md:px-5 md:py-3 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-cyan-400/20 transition duration-300">

                          <div className="flex items-center gap-3">

                            <div className="w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>

                            <h4 className="text-sm md:text-base lg:text-sm text-white font-medium whitespace-nowrap">
                              {item.title}
                            </h4>

                          </div>

                        </div>

                      </div>

                    </motion.div>

                  ))}

                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full px-5 md:hidden z-40">

                  <div className="flex flex-wrap justify-center gap-3">

                    {[
                      "React",
                      "JavaScript",
                      "Node",
                      "MongoDB",
                      "Express",
                      "Tailwind",
                      "C++",
                      "Java",
                    ].map((item, index) => (

                      <motion.div
                        key={index}
                        animate={{
                          y: [0, -4, 0],
                        }}
                        transition={{
                          duration: 3 + index * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl"
                      >

                        <div className="flex items-center gap-2">

                          <div className="w-2 h-2 rounded-full bg-cyan-300"></div>

                          <span className="text-xs sm:text-sm text-slate-200 font-medium">
                            {item}
                          </span>

                        </div>

                      </motion.div>

                    ))}

                  </div>

                </div>

                <div className="absolute w-[420px] h-[420px] rounded-full border border-white/5"></div>

                <div className="absolute w-[300px] h-[300px] rounded-full border border-white/[0.03]"></div>

              </div>

              <div className="mt-8 flex justify-center">

                <div className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl text-sm text-slate-300 text-center">

                  Building Modern & Scalable Applications

                </div>

              </div>

            </div>

          </div>

          <div>

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