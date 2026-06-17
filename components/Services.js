const services = [
  {
    id: 1,
    icon: '🌐',
    title: 'Websites',
    description: 'Responsive, fast and modern websites that attract and convert your customers.'
  },
  {
    id: 2,
    icon: '📱',
    title: 'Web Apps',
    description: 'Custom web applications that solve real problems and drive business growth.'
  },
  {
    id: 3,
    icon: '💼',
    title: 'Portfolios',
    description: 'Professional portfolios that showcase your best work and represent your brand.'
  },
  {
    id: 4,
    icon: '🔧',
    title: 'Other Solutions',
    description: 'POS Systems, Dashboards, Booking Systems, and more custom solutions.'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I provide comprehensive digital solutions tailored to help small businesses, entrepreneurs, and professionals succeed in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="glow-effect bg-dark p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition group cursor-pointer"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Industries I <span className="gradient-text">Serve</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Restaurants', 'Law Firms', 'Dental Clinics', 'E-Commerce', 'Tech Startups', 'Creative Agencies'].map((industry) => (
              <div key={industry} className="bg-dark p-4 rounded-lg border border-gray-800 text-center hover:border-primary/50 transition">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
