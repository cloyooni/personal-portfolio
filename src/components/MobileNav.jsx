import { Menu, X } from "lucide-react"

export function MobileNav({ showMobileMenu, setShowMobileMenu }) {
  return (
    <>
      {/* mobile hamburger */}
      <div className="mobile-nav-toggle">
        <button onClick={() => setShowMobileMenu(!showMobileMenu)} aria-label="Toggle menu">
          {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav className={`nav ${showMobileMenu ? "open" : ""}`}>
        <a href="#about" onClick={() => setShowMobileMenu(false)}>About</a>
        <a href="#experience" onClick={() => setShowMobileMenu(false)}>Experience</a>
        <a href="#projects" onClick={() => setShowMobileMenu(false)}>Projects</a>
        <a href="#contact" onClick={() => setShowMobileMenu(false)}>Contact</a>
      </nav>
    </>
  )
} 