import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-dark/95 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 gradient-text font-bold text-2xl flex items-center justify-center">
            Z
          </div>
          <span className="font-bold text-lg hidden sm:block">ZIRAMZIS</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('services')} className="hover:text-primary transition">
            Services
          </button>
          <button onClick={() => scrollToSection('work')} className="hover:text-primary transition">
            Work
          </button>
          <button onClick={() => scrollToSection('process')} className="hover:text-primary transition">
            Process
          </button>
          <button onClick={() => scrollToSection('contact')} className="gradient-button px-6 py-2 rounded-lg font-semibold text-white">
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-dark border-b border-gray-800 md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-primary transition py-2">
                Services
              </button>
              <button onClick={() => scrollToSection('work')} className="text-left hover:text-primary transition py-2">
                Work
              </button>
              <button onClick={() => scrollToSection('process')} className="text-left hover:text-primary transition py-2">
                Process
              </button>
              <button onClick={() => scrollToSection('contact')} className="gradient-button px-6 py-2 rounded-lg font-semibold text-white w-full">
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
