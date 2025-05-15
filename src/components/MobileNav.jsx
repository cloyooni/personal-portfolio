import { Menu, X, Home, User, Clipboard, Mail } from "lucide-react"

export function MobileNav({ showMobileMenu, setShowMobileMenu, mobileSection, setMobileSection }) {
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

      {/* mobile bottom tabs */}
      <div className="mobile-tabbar">
        <button onClick={() => setMobileSection("about")} className={mobileSection === "about" ? "active" : ""}>
          <User size={20} /> About
        </button>
        <button onClick={() => setMobileSection("experience")} className={mobileSection === "experience" ? "active" : ""}>
          <Clipboard size={20} /> Exp.
        </button>
        <button onClick={() => setMobileSection("projects")} className={mobileSection === "projects" ? "active" : ""}>
          <Home size={20} /> Proj.
        </button>
        <button onClick={() => setMobileSection("contact")} className={mobileSection === "contact" ? "active" : ""}>
          <Mail size={20} /> Contact
        </button>
      </div>
    </>
  )
} 