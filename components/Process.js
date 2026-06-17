const processSteps = [
  {
    number: 1,
    title: 'Share Your Vision',
    description: 'We start with your idea, goals, and the audience you want to impress.',
    icon: '💡',
  },
  {
    number: 2,
    title: 'Design the experience',
    description: 'I craft polished wireframes and visual systems with clear brand direction.',
    icon: '🎨',
  },
  {
    number: 3,
    title: 'Build with precision',
    description: 'I code the product using modern tools for speed, accessibility, and performance.',
    icon: '⚙️',
  },
  {
    number: 4,
    title: 'Test and refine',
    description: 'Every page, interaction, and flow is checked until the experience feels effortless.',
    icon: '✅',
  },
  {
    number: 5,
    title: 'Launch and support',
    description: 'I launch your project and help keep it updated, supported, and growing.',
    icon: '🚀',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-card/70">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-secondary/70 mb-4">The process</p>
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4">
            A transparent workflow built for clarity and speed.
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">
            From first conversation to launch, every step is designed to keep you informed and deliver polished results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-8 top-16 h-[calc(100%-4rem)] w-0.5 bg-gradient-to-b from-primary to-secondary opacity-40"></div>
            <div className="space-y-10">
              {processSteps.map((step, index) => (
                <div key={step.number} className="relative md:pl-20">
                  <div className="absolute left-0 top-2 md:top-0 flex items-start justify-center w-16">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary text-2xl border border-primary/20 shadow-glow">
                      {step.icon}
                    </div>
                  </div>
                  <div className="section-card rounded-[30px] p-7 border border-white/10 shadow-glow hover:-translate-y-1 transition-transform duration-300">
                    <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-300 leading-7">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div className="section-card p-7 rounded-[30px] border border-white/10 text-center shadow-glow">
            <div className="text-5xl mb-4">⏱️</div>
            <h4 className="font-semibold mb-2">Fast Delivery</h4>
            <p className="text-gray-400">Smooth project flow without unnecessary delays.</p>
          </div>
          <div className="section-card p-7 rounded-[30px] border border-white/10 text-center shadow-glow">
            <div className="text-5xl mb-4">🤝</div>
            <h4 className="font-semibold mb-2">Clear Communication</h4>
            <p className="text-gray-400">You stay in control with regular updates and honest advice.</p>
          </div>
          <div className="section-card p-7 rounded-[30px] border border-white/10 text-center shadow-glow">
            <div className="text-5xl mb-4">🚀</div>
            <h4 className="font-semibold mb-2">Launch Ready</h4>
            <p className="text-gray-400">A polished release that looks great from first visit.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
