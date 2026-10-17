
import { useState } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'

import ComingSoon from './pages/ComingSoon'
import Home from './pages/Home'
import About from './pages/About'
import Doctors from './pages/Doctors'
import Facilities from './pages/Facilities'
import Contact from './pages/Contact'

const labels = {
  en: {
    home: 'Home',
    about: 'About',
    doctors: 'Doctors',
    facilities: 'Facilities',
    contact: 'Contact',
    emergency: '24/7 Emergency',
  },
  ml: {
    home: 'ഹോം',
    about: 'ഞങ്ങളെക്കുറിച്ച്',
    doctors: 'ഡോക്ടർമാർ',
    facilities: 'സൗകര്യങ്ങൾ',
    contact: 'ബന്ധപ്പെടുക',
    emergency: '24 മണിക്കൂർ അടിയന്തര സേവനം',
  },
}

function HospitalLayout() {
  const [language, setLanguage] = useState<'en' | 'ml'>('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = labels[language]

  const links = [
    { to: '/home', label: t.home },
    { to: '/about', label: t.about },
    { to: '/doctors', label: t.doctors },
    { to: '/facilities', label: t.facilities },
    { to: '/contact', label: t.contact },
  ]

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" to="/home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">L</span>
          <span>
            <strong>Lokarakshaka</strong>
            <small>HOSPITAL</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <button
          className="language-switch"
          type="button"
          aria-label="Switch language"
          onClick={() => setLanguage(language === 'en' ? 'ml' : 'en')}
        >
          മ
        </button>

        <nav className={`navigation ${menuOpen ? 'navigation-open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {link.label}
            </NavLink>
          ))}
          <a className="emergency-link" href="tel:+918547555334">
            {t.emergency}
          </a>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <Link className="footer-brand" to="/home">
          Lokarakshaka Hospital
        </Link>
        <p>Padappanal, Kollam, Kerala</p>
        <p>OPD: 9 AM–1 PM · Emergency care: 24 hours</p>
        <a href="tel:+918547555334">+91 85475 55334</a>
        <p className="copyright">
          © {new Date().getFullYear()} Lokarakshaka Hospital
        </p>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ComingSoon />} />
      <Route path="/*" element={<HospitalLayout />} />
    </Routes>
  )
}
