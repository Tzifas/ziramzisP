const workSamples = [
  {
    id: 1,
    title: 'Restaurant Website',
    description: 'Modern restaurant website with online ordering and reservation system',
    category: 'Web Design',
    icon: '🍽️',
  },
  {
    id: 2,
    title: 'Dental Clinic Portal',
    description: 'Patient management system for dental clinics with appointment booking',
    category: 'Web App',
    icon: '🦷',
  },
  {
    id: 3,
    title: 'Law Firm Site',
    description: 'Professional website for law firm with case management integration',
    category: 'Web Design',
    icon: '⚖️',
  },
  {
    id: 4,
    title: 'POS Dashboard',
    description: 'Real-time sales dashboard for retail business operations',
    category: 'Dashboard',
    icon: '📊',
  },
  {
    id: 5,
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with payment integration and inventory',
    category: 'Web App',
    icon: '🛒',
  },
  {
    id: 6,
    title: 'Portfolio Showcase',
    description: 'Creative portfolio website for designer and artist showcase',
    category: 'Portfolio',
    icon: '🎨',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've built that made a real impact for my clients.
          </p>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workSamples.map((work) => (
            <div
              key={work.id}
              className="glow-effect bg-dark-card rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition transform">
                <div className="text-6xl opacity-20 group-hover:opacity-30 transition">
                  {work.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {work.category}
                  </span>
                  <span className="text-2xl">{work.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{work.description}</p>
                <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <a
            href="https://wa.me/254711410442?text=Hi%20Ziramzis%2C%20I%20want%20to%20see%20more%20of%20your%20work"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-lg font-semibold text-white inline-block"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
