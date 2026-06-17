const services = [
  {
    id: 1,
    icon: '🌐',
    title: 'Websites',
    description: 'Responsive, fast and memorable websites built to grow your brand online.'
  },
  {
    id: 2,
    icon: '📱',
    title: 'Web Apps',
    description: 'Custom web applications with polished interfaces and real user value.'
  },
  {
    id: 3,
    icon: '💼',
    title: 'Portfolios',
    description: 'Showcase your work with premium portfolio experiences that feel sharp and curated.'
  },
  {
    id: 4,
    icon: '🔧',
    title: 'Solutions',
    description: 'Business tools, dashboards, and systems designed to accelerate everyday workflows.'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-primary/80 mb-4">What I do</p>
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4">
            Crafting digital products that feel <span className="gradient-text">modern</span> and alive.
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">
            I collaborate with founders and teams to build sleek websites, interactive apps, and audience-focused portfolios with clear brand energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="section-card p-7 rounded-3xl hover:border-accent/40 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 text-3xl text-primary mb-5 shadow-glow">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300 leading-7">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-3xl sm:text-4xl font-semibold text-center mb-12">
            Industries I <span className="gradient-text">power</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Restaurants', 'Law Firms', 'Dental Clinics', 'E-Commerce', 'Tech Startups', 'Creative Agencies'].map((industry) => (
              <div key={industry} className="section-card p-5 rounded-3xl text-center border-white/10 hover:border-primary/40 transition">
                <p className="font-semibold text-white mb-2">{industry}</p>
                <p className="text-sm text-gray-400">Design, UX, and systems for businesses that want to stand out.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
