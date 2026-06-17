import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-dark/95 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-glow flex items-center justify-center text-lg font-black">
            Z
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase tracking-[0.25em]">Digital Creator</p>
            <p className="font-semibold text-white">Ziramzis</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <button onClick={() => scrollToSection('services')} className="hover:text-primary transition">
            Services
          </button>
          <button onClick={() => scrollToSection('work')} className="hover:text-primary transition">
            Work
          </button>
          <button onClick={() => scrollToSection('process')} className="hover:text-primary transition">
            Process
          </button>
          <button onClick={() => scrollToSection('contact')} className="gradient-button px-6 py-2 rounded-full font-semibold text-white shadow-glow">
            Let's Talk
          </button>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-dark border-b border-white/10 md:hidden">
            <div className="flex flex-col gap-3 p-5">
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-primary transition py-2 text-gray-300">
                Services
              </button>
              <button onClick={() => scrollToSection('work')} className="text-left hover:text-primary transition py-2 text-gray-300">
                Work
              </button>
              <button onClick={() => scrollToSection('process')} className="text-left hover:text-primary transition py-2 text-gray-300">
                Process
              </button>
              <button onClick={() => scrollToSection('contact')} className="gradient-button px-6 py-3 rounded-full font-semibold text-white w-full shadow-glow">
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
