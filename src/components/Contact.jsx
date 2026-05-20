import { useEffect } from "react";
import gsap from "gsap";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {

  useEffect(() => {

    gsap.fromTo(
      ".contact-anim",
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

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#0B1120] py-24 sm:py-28 px-5 sm:px-8 lg:px-16"
    >

      {/* ===== BACKGROUND ===== */}

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

          <p className="contact-anim text-sm uppercase tracking-[4px] text-cyan-300 mb-3">
            Contact
          </p>

          <h2 className="contact-anim text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">

            Let's Work Together

            <span className="block text-slate-400 mt-2">
              Have Any Project In Mind?
            </span>
          </h2>
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">

          {/* ===== LEFT SIDE ===== */}
          <div className="contact-anim">

            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 sm:p-8 flex flex-col justify-center">

              {/* Top */}
              <div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">
                  Let’s build something modern & impactful together.
                </h3>

                <p className="mt-5 text-slate-400 leading-7 text-sm sm:text-base">

                  I’m available for freelance work, collaborations,
                  startup ideas and frontend development opportunities.
                  Feel free to connect and discuss your next project.
                </p>

              </div>

              {/* Contact Info */}
              <div className="mt-10 space-y-5">

                {/* Email */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-cyan-300 text-lg">
                    ✉
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">
                      Email
                    </p>

                    <h4 className="text-white mt-1 break-all">
                      anuragpayasi124@gmail.com
                    </h4>
                  </div>
                </div>
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-cyan-300 text-lg">
                    ✉
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">
                      Email
                    </p>

                    <h4 className="text-white mt-1 break-all">
                      anuragpayasi124@gmail.com
                    </h4>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-cyan-300 text-lg">
                    ☎
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">
                      Phone
                    </p>

                    <h4 className="text-white mt-1">
                      +91 7987278172
                    </h4>
                  </div>
                </div>

              </div>

              {/* Social Links */}
              <div className="mt-10">

                <p className="text-sm text-slate-400 mb-5">
                  Follow Me
                </p>

                <div className="flex items-center gap-4 flex-wrap">

                  {/* Github */}
                  <a
                    href="https://github.com/anuragpayasi" target="blank"
                    className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-white hover:text-cyan-300 hover:border-cyan-400/30 hover:-translate-y-1 transition duration-300"
                  >
                    <FaGithub size={18} />
                  </a>

                  {/* Linkedin */}
                  <a
                    href="https://www.linkedin.com/in/anurag-payasi?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="blank"
                    className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-white hover:text-cyan-300 hover:border-cyan-400/30 hover:-translate-y-1 transition duration-300"
                  >
                    <FaLinkedinIn size={18} />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/mr.payasi?igsh=MWFiNG1wa3UwbDIzOA==" target="blank"
                    className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-white hover:text-cyan-300 hover:border-cyan-400/30 hover:-translate-y-1 transition duration-300"
                  >
                    <FaInstagram size={18} />
                  </a>

                </div>
              </div>

            </div>
          </div>

          {/* ===== RIGHT SIDE ===== */}
          <div className="contact-anim">

            <form className="h-full rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 sm:p-8 flex flex-col">

              {/* Heading */}
              <div className="mb-8">

                <h3 className="text-2xl font-semibold text-white">
                  Send Message
                </h3>

                <p className="text-slate-400 text-sm mt-2">
                  Fill out the form and I’ll get back to you soon.
                </p>
              </div>

              {/* Name */}
              <div className="mb-5">

                <label className="text-sm text-slate-300 block mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-13 rounded-2xl border border-white/10 bg-[#111827]/70 px-5 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/40 transition"
                />
              </div>

              {/* Email */}
              <div className="mb-5">

                <label className="text-sm text-slate-300 block mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full h-13 rounded-2xl border border-white/10 bg-[#111827]/70 px-5 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/40 transition"
                />
              </div>

              {/* Message */}
              <div className="mb-6 flex-1">

                <label className="text-sm text-slate-300 block mb-2">
                  Message
                </label>

                <textarea
                  rows="7"
                  placeholder="Write your message here..."
                  className="w-full h-full min-h-[180px] rounded-2xl border border-white/10 bg-[#111827]/70 px-5 py-4 text-white placeholder:text-slate-500 outline-none resize-none focus:border-cyan-400/40 transition"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full h-13 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-medium hover:scale-[1.01] transition duration-300 shadow-lg shadow-cyan-500/10 mt-7"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}