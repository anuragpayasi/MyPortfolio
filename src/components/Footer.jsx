import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#0B1120] px-5 sm:px-8 lg:px-16 pt-24 pb-10 border-t border-white/5">

      {/* ===== PREMIUM BACKGROUND ===== */}

      {/* Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:45px_45px]"></div>

      {/* Gradient Top Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>

      {/* ===== CONTAINER ===== */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ===== MAIN CARD ===== */}
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl overflow-hidden">

          {/* ===== TOP SECTION ===== */}
          <div className="grid lg:grid-cols-2 gap-12 px-6 sm:px-10 lg:px-14 py-14 border-b border-white/5">

            {/* ===== LEFT ===== */}
            <div>

              {/* Logo */}
              <div className="inline-flex items-center gap-3 mb-7">

                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/20">
                  A
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    Anurag Payasi
                  </h2>

                  <p className="text-sm text-slate-400 mt-1">
                    MERN Stack Developer
                  </p>
                </div>

              </div>

              {/* Text */}
              <p className="text-slate-400 leading-8 max-w-lg text-sm sm:text-base">

                Building modern, scalable and visually engaging web
                experiences with clean UI, smooth animations and
                production-ready frontend architecture.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="#projects"
                  className="px-6 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white flex items-center justify-center font-medium hover:scale-[1.03] transition duration-300 shadow-lg shadow-cyan-500/10"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="px-6 h-12 rounded-2xl border border-white/10 bg-white/[0.04] text-white flex items-center justify-center hover:border-cyan-400/30 hover:text-cyan-300 transition duration-300"
                >
                  Hire Me
                </a>

              </div>

            </div>

            {/* ===== RIGHT ===== */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">

              {/* Navigation */}
              <div>

                <h3 className="text-white font-semibold mb-5">
                  Navigation
                </h3>

                <div className="space-y-4">

                  {[
                    "Home",
                    "About",
                    "Projects",
                    "Contact",
                  ].map((item, index) => (

                    <a
                      key={index}
                      href={`#${item.toLowerCase()}`}
                      className="block text-slate-400 hover:text-cyan-300 transition text-sm"
                    >
                      {item}
                    </a>

                  ))}

                </div>
              </div>

              {/* Services */}
              <div>

                <h3 className="text-white font-semibold mb-5">
                  Services
                </h3>

                <div className="space-y-4">

                  {[
                    "Frontend Dev",
                    "React Apps",
                    "UI/UX Design",
                    "Responsive UI",
                  ].map((item, index) => (

                    <p
                      key={index}
                      className="text-slate-400 text-sm"
                    >
                      {item}
                    </p>

                  ))}

                </div>
              </div>

              {/* Social */}
              <div>

                <h3 className="text-white font-semibold mb-5">
                  Connect
                </h3>

                <div className="flex flex-wrap gap-3">

                  {/* Github */}
                  <a
                    href="https://github.com/anuragpayasi" target="blank"
                    className="w-11 h-11 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-white hover:text-cyan-300 hover:border-cyan-400/30 hover:-translate-y-1 transition duration-300"
                  >
                    <FaGithub size={17} />
                  </a>

                  {/* Linkedin */}
                  <a
                    href="https://www.linkedin.com/in/anurag-payasi?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="blank"
                    className="w-11 h-11 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-white hover:text-cyan-300 hover:border-cyan-400/30 hover:-translate-y-1 transition duration-300"
                  >
                    <FaLinkedinIn size={17} />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/mr.payasi?igsh=MWFiNG1wa3UwbDIzOA==" target="blank"
                    className="w-11 h-11 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-white hover:text-cyan-300 hover:border-cyan-400/30 hover:-translate-y-1 transition duration-300"
                  >
                    <FaInstagram size={17} />
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* ===== BOTTOM ===== */}
          <div className="px-6 sm:px-10 lg:px-14 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">

            {/* Copyright */}
            <p className="text-sm text-slate-500 text-center sm:text-left">

              © 2026 Anurag Payasi — Crafted with React & Tailwind CSS.
            </p>

            {/* Scroll Top */}
            <button
              onClick={scrollToTop}
              className="group w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white hover:border-cyan-400/30 hover:bg-cyan-500/10 transition duration-300"
            >
              <FaArrowUp
                size={15}
                className="group-hover:-translate-y-1 transition duration-300"
              />
            </button>

          </div>

        </div>
      </div>
    </footer>
  );
}