export default function CTA() {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.16),transparent_28%)] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto section-card border border-primary/20 rounded-[36px] p-12 text-center shadow-glow">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.4em] text-secondary/70 mb-4">Start your project</p>
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4">
            Let's <span className="gradient-text">build your idea</span>
          </h2>
          <p className="text-gray-300 text-lg leading-8 max-w-3xl mx-auto">
            Have a project in mind? I’m ready to help you launch a polished, memorable digital experience.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/254711410442?text=Hi%20Ziramzis%2C%20I%20have%20a%20project%20idea%20I%27d%20like%20to%20discuss"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-4 rounded-full font-semibold text-black inline-flex items-center justify-center gap-3 shadow-glow"
          >
            <span>Chat on WhatsApp</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.289-3.795 6.233-1.976 9.038 1.819 2.805 5.063 3.289 7.68 2.2l.5.291c.39.113.645.6.211 1.127-.434.527-.923.852-1.346.852-.423 0-.923-.325-1.346-.852l-.5-.291c-2.617 1.089-5.861.605-7.68-2.2-1.819-2.805-1.079-6.749 1.976-9.038a9.87 9.87 0 015.031-1.378z" />
            </svg>
          </a>

          <button
            onClick={() => {
              const email = 'hello@ziramzis.vercel.app'
              window.location.href = `mailto:${email}`
            }}
            className="px-8 py-4 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-black transition inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Email
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-dark p-6 border border-white/10">
            <p className="text-gray-400 mb-2">WhatsApp</p>
            <a href="https://wa.me/254711410442" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
              +254 711 410 442
            </a>
          </div>
          <div className="rounded-3xl bg-dark p-6 border border-white/10">
            <p className="text-gray-400 mb-2">Location</p>
            <p className="text-white font-semibold">Mombasa, Kenya</p>
          </div>
        </div>
      </div>
    </section>
  )
}
