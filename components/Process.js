const processSteps = [
  {
    number: 1,
    title: 'You Share Your Idea',
    description: 'Tell me about your project, goals, and vision. I listen and understand your needs.',
    icon: '💡',
  },
  {
    number: 2,
    title: 'We Plan & Design',
    description: 'I create a roadmap and design mockups to bring your vision to life.',
    icon: '🎨',
  },
  {
    number: 3,
    title: 'I Build & Develop',
    description: 'Using modern technologies, I build your solution with clean, scalable code.',
    icon: '⚙️',
  },
  {
    number: 4,
    title: 'We Test & Deploy',
    description: 'Rigorous testing ensures everything works perfectly before launch.',
    icon: '✅',
  },
  {
    number: 5,
    title: 'You Grow & Scale',
    description: 'I provide ongoing support and maintenance to ensure your success.',
    icon: '📈',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            How I <span className="gradient-text">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A simple, transparent process designed to deliver exceptional results while keeping you involved every step of the way.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index !== processSteps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-primary to-secondary hidden md:block"></div>
                )}

                {/* Step Container */}
                <div className="flex gap-6 md:gap-8">
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-2xl text-white relative z-10">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-2">
                    <div className="bg-dark p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition">
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div className="bg-dark p-6 rounded-xl text-center border border-gray-800">
            <div className="text-4xl mb-3">⏱️</div>
            <h4 className="font-bold mb-2">Quick Turnaround</h4>
            <p className="text-gray-400">Efficient process without compromising quality</p>
          </div>
          <div className="bg-dark p-6 rounded-xl text-center border border-gray-800">
            <div className="text-4xl mb-3">🤝</div>
            <h4 className="font-bold mb-2">Full Communication</h4>
            <p className="text-gray-400">Regular updates and transparent progress tracking</p>
          </div>
          <div className="bg-dark p-6 rounded-xl text-center border border-gray-800">
            <div className="text-4xl mb-3">🚀</div>
            <h4 className="font-bold mb-2">Ready to Launch</h4>
            <p className="text-gray-400">Deploy-ready solution that's fully tested</p>
          </div>
        </div>
      </div>
    </section>
  )
}
