import { useEffect, useRef } from "react"
import gsap from "gsap"



const Hero = () => {
    const titleRef = useRef()
    useEffect(() => {

        gsap.from(titleRef.current, {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out"
        })

    }, [])
    return (
        <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
            {/* Background Glow */}

            <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />

            <div className="absolute w-[400px] h-[400px] bg-violet-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

                {/* LEFT SIDE */}
                <div >

                    <span className="px-4 py-2 border border-cyan-400 rounded-full text-cyan-300 text-sm"
                        ref={titleRef}>
                        Available For Work
                    </span>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mt-6 leading-tight">
                        Hi, I'm <br />

                        <span className="text-cyan-400">
                            Anurag Payasi
                        </span>
                    </h1>

                    <p className="text-slate-300 mt-6 text-lg leading-relaxed max-w-xl">
                        MERN Stack Developer focused on building modern,
                        scalable and immersive web experiences.
                    </p>

                    <div className="flex gap-5 mt-8">

                        <button className="bg-red-500 p-20 rounded-xl text-white inline-block">
                            View Projects
                        </button>
                        <button className="px-7 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
                            Hire Me
                        </button>

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="flex justify-center">

                    <div className="w-[320px] h-[420px] rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden">

                        <img
                            src="https://i.imgur.com/8Km9tLL.png"
                            alt="developer"
                            className="w-full h-full object-cover"
                        />

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Hero 