import { useState, useEffect, useCallback } from 'react'
import { Link, NavLink } from 'react-router-dom'

/**
 * Shared Header Component
 *
 * Sticky frosted-glass liquid chrome header with desktop navigation,
 * responsive mobile drawer, keyboard accessibility, and route integration.
 */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Lock body scroll when mobile nav is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const closeMobile = useCallback(() => setMobileOpen(false), [])


  /* Close on Escape */
  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeMobile()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen, closeMobile])

  return (
    <header
      className={`header${scrolled ? ' header--scrolled' : ''}`}
      role="banner"
    >
      <div className="header__inner">
        <Link
          to="/"
          className="header__brand"
          aria-label="AURELIX Hair Atelier — Home"
        >
          Aurelix
        </Link>

        {/* Desktop nav */}
        <nav className="header__nav" aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `header__link${isActive ? ' header__link--active' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `header__link${isActive ? ' header__link--active' : ''}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `header__link${isActive ? ' header__link--active' : ''}`
            }
          >
            The Atelier
          </NavLink>
          <Link
            to="/about#appointment"
            className="header__cta btn btn--primary"
            aria-label="Book an appointment"
          >
            Book Appointment
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`header__menu-toggle${mobileOpen ? ' header__menu-toggle--open' : ''}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      {/* Mobile drawer */}
      <nav
        id="mobile-nav"
        className={`header__mobile-nav${mobileOpen ? ' header__mobile-nav--open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `header__mobile-link${isActive ? ' header__link--active' : ''}`
          }
          onClick={closeMobile}
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `header__mobile-link${isActive ? ' header__link--active' : ''}`
          }
          onClick={closeMobile}
        >
          Services
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `header__mobile-link${isActive ? ' header__link--active' : ''}`
          }
          onClick={closeMobile}
        >
          The Atelier
        </NavLink>
        <Link
          to="/about#appointment"
          className="btn btn--primary"
          onClick={closeMobile}
          style={{ marginTop: 'var(--space-4)' }}
        >
          Book Appointment
        </Link>
      </nav>
    </header>
  )
}
