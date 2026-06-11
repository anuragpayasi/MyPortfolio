import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Projects() {

  const [active, setActive] = useState("All");

  useEffect(() => {

    gsap.fromTo(
      ".project-anim",
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

  const projects = [
    {
      title: "Expense Spliter",
      category: "Frontend",
      image:
        "https://res.cloudinary.com/dbkmgrjup/image/upload/v1781090812/expense_spliter_thumbnail_trpjhx.png",
      desc: "Modern animated portfolio website with smooth UI interactions.",
      tech: ["React", "Tailwind", "GSAP"],
      link : "https://splitourexpense.vercel.app/"
    },

    {
      title: "Anchor's Portfolio",
      category: "Full Stack",
      image:
        "https://res.cloudinary.com/dbkmgrjup/image/upload/q_auto/f_auto/v1781091859/anchors_portfolio_thumbnail_csq6dg.png",
      desc: "Full stack ecommerce application with secure authentication.",
      tech: ["MERN", "JWT", "MongoDB"],
      link : "https://anchoranamika.vercel.app/"
    },

    {
      title: "Task Management App",
      category: "Frontend",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
      desc: "Responsive productivity dashboard with modern UI system.",
      tech: ["React", "Framer", "Firebase"],
    },
  ];

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((item) => item.category === active);

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-[#0B1120] py-24 sm:py-28 px-5 sm:px-8 lg:px-16"
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
        <div className="text-center mb-14">

          <p className="project-anim text-sm uppercase tracking-[4px] text-cyan-300 mb-3">
            Projects
          </p>

          <h2 className="project-anim text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">

            Featured

            <span className="block text-slate-400 mt-2">
              Development Work
            </span>
          </h2>
        </div>

        {/* ===== FILTER BUTTONS ===== */}
        <div className="project-anim flex items-center justify-center gap-3 flex-wrap mb-14">

          {["All", "Frontend", "Full Stack"].map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(item)}
              className={`px-5 py-2 rounded-xl text-sm border transition duration-300
              
              ${
                active === item
                  ? "bg-cyan-500 text-white border-cyan-400"
                  : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-400/30"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

        {/* ===== PROJECT GRID ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredProjects.map((project, index) => (

            <div
              key={index}
              className="project-anim group relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-cyan-400/20 transition duration-500"
            >

          
              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

     
              <div className="p-6">

            
                <span className="text-xs text-cyan-300 tracking-[3px] uppercase">
                  {project.category}
                </span>

           
                <h3 className="text-xl font-semibold text-white mt-3">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-7 mt-4">
                  {project.desc}
                </p>

               
                <div className="flex flex-wrap gap-2 mt-5">

                  {project.tech.map((tech, i) => (
                    <div
                      key={i}
                      className="px-3 py-1 rounded-lg border border-white/10 bg-white/[0.04] text-xs text-slate-300"
                    >
                      {tech}
                    </div>
                  ))}

                </div>

          
                <div className="flex items-center gap-3 mt-6">

                  <a href={project.link} target="blank">
                    <button className="px-4 py-2 rounded-lg bg-cyan-500 text-white text-sm hover:bg-cyan-400 transition cursor-pointer">

                    Live Demo
                  </button>
                  </a>

                  <button className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.04] text-white text-sm hover:border-cyan-400/30 transition">

                    How it Works
                  </button>

                </div>

              </div>

            </div>

          ))}

         

        </div>
         {/* <h1 className="text-center text-4xl text-zinc-500 ">Working on this section</h1> */}
      </div>
    </section>
  );
}