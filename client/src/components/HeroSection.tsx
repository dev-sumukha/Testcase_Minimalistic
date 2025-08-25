import { Button } from "@/components/ui/button"

function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Subtle Animated Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700/30 via-transparent to-transparent animate-pulse" />

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <span className="text-sm sm:text-base tracking-wide uppercase text-gray-400">
            Your Tech Knowledge Hub
          </span>

          {/* Heading */}
          <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-gray-200">Welcome to </span>
            <span className="bg-gradient-to-r from-white via-gray-200 to-cyan-400 bg-clip-text text-transparent">
              Testcase
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Exploring{" "}
            <span className="font-semibold text-white">Web Development</span>,{" "}
            <span className="font-semibold text-white">Cybersecurity</span>,{" "}
            <span className="font-semibold text-white">Machine Learning</span>,{" "}
            <span className="font-semibold text-white">Generative AI</span>,{" "}
            <span className="font-semibold text-white">DSA</span>, and{" "}
            <span className="font-semibold text-white">Blogging</span>.
          </p>

          {/* CTA Button */}
          <div className="mt-10 flex justify-center">
            <Button
              size="lg"
              className="relative w-full max-w-xs px-8 py-4 text-lg font-semibold rounded-full 
                         bg-white/10 backdrop-blur-md text-white border border-white/20 
                         shadow-xl transition-all duration-300 
                         hover:scale-105 hover:bg-white hover:text-black hover:shadow-2xl cursor-pointer"
            >
              Start Reading
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
