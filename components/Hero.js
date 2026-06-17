export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
      <div className="absolute -left-16 top-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-float"></div>
      <div className="absolute right-0 top-40 w-60 h-60 rounded-full bg-accent/15 blur-3xl animate-float"></div>
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.14),_transparent_55%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-rise">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/5 px-4 py-2 text-sm text-primary shadow-glow">
              <span className="w-2 h-2 rounded-full bg-primary animate-float"></span>
              Creative sites, apps, and digital brands
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              I build <span className="gradient-text">alive digital experiences</span> that drive growth.
            </h1>
            <p className="mt-6 text-gray-300 text-lg sm:text-xl max-w-xl leading-8">
              Transforming ideas into vibrant websites, web apps, and portfolios with motion, clarity, and strong brand energy.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/254711410442?text=Hi%20Ziramzis%2C%20I%20want%20to%20discuss%20my%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button px-8 py-4 rounded-full font-semibold text-white inline-flex items-center justify-center gap-3 shadow-glow"
            >
              <span>Chat on WhatsApp</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.289-3.795 6.233-1.976 9.038 1.819 2.805 5.063 3.289 7.68 2.2l.5.291c.39.113.645.6.211 1.127-.434.527-.923.852-1.346.852-.423 0-.923-.325-1.346-.852l-.5-.291c-2.617 1.089-5.861.605-7.68-2.2-1.819-2.805-1.079-6.749 1.976-9.038a9.87 9.87 0 015.031-1.378z" />
              </svg>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-black transition inline-flex items-center justify-center text-center"
            >
              Send a Message
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
            <div>
              <p className="text-3xl font-semibold gradient-text">50+</p>
              <p className="text-gray-400 text-sm mt-2">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-semibold gradient-text">30+</p>
              <p className="text-gray-400 text-sm mt-2">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-semibold gradient-text">3+</p>
              <p className="text-gray-400 text-sm mt-2">Years Experience</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative animate-rise">
          <div className="relative overflow-hidden rounded-[40px] border border-primary/20 bg-gradient-to-b from-white/5 to-white/10 shadow-glow">
            <div className="absolute -right-10 -top-10 w-36 h-36 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute left-8 top-10 w-24 h-24 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_40%)]" />
              <div className="relative z-10 grid gap-6">
                <div className="rounded-3xl bg-dark-card/95 border border-white/5 p-8 shadow-xl shadow-primary/10">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-primary uppercase tracking-[0.25em]">Featured</p>
                      <h3 className="text-xl font-semibold mt-3">Mombasa Restaurant UI</h3>
                    </div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/15 text-primary text-xl">🍽️</div>
                  </div>
                  <p className="mt-4 text-gray-400 text-sm leading-6">A polished food ordering experience with fluid animations, bright brand energy, and easy navigation.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-3xl bg-white/5 border border-white/5 p-5 text-center">
                    <p className="text-3xl font-bold text-white">+12%</p>
                    <p className="text-xs text-gray-400 mt-2 uppercase tracking-[0.2em]">Conversion</p>
                  </div>
                  <div className="rounded-3xl bg-white/5 border border-white/5 p-5 text-center">
                    <p className="text-3xl font-bold text-white">Fast</p>
                    <p className="text-xs text-gray-400 mt-2 uppercase tracking-[0.2em]">Loading</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
