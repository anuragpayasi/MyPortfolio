import { useEffect } from "react";
import gsap from "gsap";

export default function About() {

  useEffect(() => {
    gsap.fromTo(
      ".about-anim",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  const skills = [
    { name: "React.js", level: "90%" },
    { name: "Node.js", level: "85%" },
    { name: "Express.js", level: "80%" },
    { name: "MongoDB", level: "75%" },
    { name: "JavaScript", level: "90%" },
  ];

  return (
    <section className="w-full py-24 px-6 bg-[#050505]" id="about">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="about-anim text-3xl md:text-5xl font-bold text-center mb-12">
          About <span className="text-cyan-400">Me</span>
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE - STORY */}
          <div className="about-anim space-y-5">

            <p className="text-gray-400 leading-relaxed">
              I am a passionate <span className="text-cyan-400">MERN Stack Developer</span> who loves
              building modern, scalable and high-performance web applications with clean UI/UX.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I focus on writing clean code, reusable components and creating smooth user experiences
              that feel like modern SaaS products.
            </p>

            {/* Timeline */}
            <div className="mt-8 space-y-4">

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                🎓 2023 - Started Web Development Journey
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                💻 2024 - Built Multiple React Projects
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                🚀 2025 - MERN Stack Developer (Job Ready)
              </div>

            </div>

          </div>

          {/* RIGHT SIDE - SKILLS */}
          <div className="about-anim space-y-6">

            {skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm text-gray-300 mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>

                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}