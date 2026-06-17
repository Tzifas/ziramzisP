const workSamples = [
  {
    id: 1,
    title: 'Restaurant Website',
    description: 'Modern restaurant website with online ordering and premium brand storytelling.',
    category: 'Web Design',
    icon: '🍽️',
  },
  {
    id: 2,
    title: 'Dental Clinic Portal',
    description: 'Patient management system with appointments and clear workflows.',
    category: 'Web App',
    icon: '🦷',
  },
  {
    id: 3,
    title: 'Law Firm Site',
    description: 'Trustworthy website for legal services with strong conversion clarity.',
    category: 'Web Design',
    icon: '⚖️',
  },
  {
    id: 4,
    title: 'POS Dashboard',
    description: 'Sales dashboard with live metrics and polished analytics components.',
    category: 'Dashboard',
    icon: '📊',
  },
  {
    id: 5,
    title: 'E-Commerce Platform',
    description: 'Fast online store with clean product flows and checkout simplicity.',
    category: 'Web App',
    icon: '🛒',
  },
  {
    id: 6,
    title: 'Portfolio Showcase',
    description: 'Bold portfolio site for creatives seeking an immersive presentation.',
    category: 'Portfolio',
    icon: '🎨',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-accent/70 mb-4">Featured work</p>
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4">
            Projects built for real businesses and real results.
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">
            A selection of websites, apps, and portfolio systems designed to feel polished, modern, and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workSamples.map((work) => (
            <div
              key={work.id}
              className="section-card overflow-hidden rounded-[32px] border border-white/10 transition hover:-translate-y-2 hover:border-primary/40 shadow-glow"
            >
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-primary/15 via-transparent to-secondary/15 flex items-center justify-center">
                <div className="text-7xl opacity-15">{work.icon}</div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.12),_transparent_45%)]" />
              </div>

              <div className="p-7">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-primary/90">{work.category}</span>
                  <span className="text-3xl">{work.icon}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{work.title}</h3>
                <p className="text-gray-300 leading-7 mb-6">{work.description}</p>
                <button className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition">
                  View Project <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Want to see more of my work or discuss a project?</p>
          <a
            href="https://wa.me/254711410442?text=Hi%20Ziramzis%2C%20I%20want%20to%20see%20more%20of%20your%20work"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full font-semibold text-black inline-block shadow-glow"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
