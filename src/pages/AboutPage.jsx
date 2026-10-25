import { Link, useSearchParams } from 'react-router-dom'
import AppointmentForm from '../components/AppointmentForm'

/**
 * AURELIX Hair Atelier — The Atelier (About Page)
 *
 * Implements Stage 4:
 * - Concise fictional salon introduction
 * - Brand philosophy: precision, creativity, and personal expression
 * - Editorial hair photography using verified local assets
 * - Liquid Chrome aesthetics (Pearl White, Liquid Silver, Icy Periwinkle, Slate Midnight)
 * - Appointment preference enquiry section with #appointment anchor
 * - Transparent portfolio demonstration disclosure (no fake staff, reviews, or awards)
 */
export default function AboutPage() {
  const [searchParams] = useSearchParams()
  const serviceParam = searchParams.get('service') || 'default'

  return (
    <div className="atelier-page">
      {/* ---------------------------------------------------------------- */}
      {/*  HERO: SALON INTRODUCTION                                         */}
      {/* ---------------------------------------------------------------- */}
      <section className="atelier-hero" aria-labelledby="atelier-hero-heading">
        <div className="atelier-hero__orb atelier-hero__orb--1" aria-hidden="true" />
        <div className="atelier-hero__orb atelier-hero__orb--2" aria-hidden="true" />

        <div className="atelier-hero__inner">
          <p className="eyebrow atelier-hero__eyebrow">The Atelier Concept</p>
          <h1 id="atelier-hero-heading" className="atelier-hero__title">
            Where Architectural Form <br />
            <em>Meets Liquid Light</em>
          </h1>
          <p className="atelier-hero__lead">
            AURELIX is envisioned as a quiet, light-drenched studio sanctuary — a deliberate departure
            from hurried salon environments. We explore hair through structural discipline,
            custom chromatic glazes, and deep respect for fiber health.
          </p>

          {/* Prominent Portfolio Demonstration Banner */}
          <div className="atelier-disclaimer chrome-surface" role="note">
            <div className="atelier-disclaimer__icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>
            <div className="atelier-disclaimer__text">
              <strong>Portfolio Demonstration Concept:</strong> AURELIX Hair Atelier is a conceptual design
              and technical showcase created for VYOMASANDHI. All services, schedules, and operations depicted
              are illustrative portfolio demonstrations. No real salon appointments are booked or commercial services rendered.
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  PHILOSOPHY: PRECISION, CREATIVITY, PERSONAL EXPRESSION           */}
      {/* ---------------------------------------------------------------- */}
      <section className="philosophy-section" aria-labelledby="philosophy-heading">
        <div className="philosophy-section__inner">
          <div className="philosophy-section__header">
            <p className="eyebrow philosophy-section__eyebrow">Guiding Philosophy</p>
            <h2 id="philosophy-heading" className="philosophy-section__title">
              Three Pillars of Our Craft
            </h2>
            <p className="philosophy-section__subtitle">
              Every cut, color formula, and treatment ritual is anchored in a cohesive triad of principles.
            </p>
          </div>

          <div className="philosophy-grid">
            {/* Pillar 1: Precision */}
            <article className="philosophy-card chrome-surface">
              <div className="philosophy-card__number" aria-hidden="true">01</div>
              <h3 className="philosophy-card__title">Precision</h3>
              <p className="philosophy-card__summary">
                Architecture in motion. We analyze cranial geometry, natural hair fall, cowlicks,
                and texture density before lifting a pair of shears.
              </p>
              <ul className="philosophy-card__list">
                <li>Bespoke dry-cutting refinement</li>
                <li>Weight redistribution for natural volume</li>
                <li>Shapes that maintain their integrity as they grow</li>
              </ul>
            </article>

            {/* Pillar 2: Creativity */}
            <article className="philosophy-card chrome-surface">
              <div className="philosophy-card__number" aria-hidden="true">02</div>
              <h3 className="philosophy-card__title">Creativity</h3>
              <p className="philosophy-card__summary">
                Luminous color formulation inspired by liquid chrome reflections. We treat color
                as dimensional light rather than a flat coating.
              </p>
              <ul className="philosophy-card__list">
                <li>Hand-painted freehand balayage ribbons</li>
                <li>Translucent acidic gloss toners</li>
                <li>Customized cool silver &amp; dimensional pearl hues</li>
              </ul>
            </article>

            {/* Pillar 3: Personal Expression */}
            <article className="philosophy-card chrome-surface">
              <div className="philosophy-card__number" aria-hidden="true">03</div>
              <h3 className="philosophy-card__title">Personal Expression</h3>
              <p className="philosophy-card__summary">
                We believe true style is an extension of identity, not a transient trend.
                Your hair should complement your daily rituals and express your individuality.
              </p>
              <ul className="philosophy-card__list">
                <li>In-depth unhurried consultation dialogue</li>
                <li>Low-maintenance lifestyle adaptations</li>
                <li>Tailored home regimens for lasting luminosity</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  VISUAL ATMOSPHERE & EDITORIAL GALLERY                           */}
      {/* ---------------------------------------------------------------- */}
      <section className="atmosphere-section" aria-labelledby="atmosphere-heading">
        <div className="atmosphere-section__inner">
          <div className="atmosphere-section__layout">
            <div className="atmosphere-section__content">
              <p className="eyebrow atmosphere-section__eyebrow">The Atelier Environment</p>
              <h2 id="atmosphere-heading" className="atmosphere-section__title">
                Curated for clarity and calm
              </h2>
              <p className="atmosphere-section__text">
                Designed around acoustic softness, abundant northern daylight, and clean sightlines,
                the atelier is calibrated to offer an immersive, restorative experience.
              </p>
              <p className="atmosphere-section__text">
                Every styling station is spaced generously to preserve personal privacy, featuring
                ergonomic seating and directional task lighting that reflects accurate color rendering
                under natural conditions.
              </p>
              <div className="atmosphere-section__tags">
                <span className="atmosphere-tag">Ammonia-Free Formulations</span>
                <span className="atmosphere-tag">Molecular Bond Repair</span>
                <span className="atmosphere-tag">Diffused Daylight Studio</span>
                <span className="atmosphere-tag">Unhurried 1-on-1 Sessions</span>
              </div>
            </div>

            <div className="atmosphere-section__gallery">
              <div className="atmosphere-gallery__item atmosphere-gallery__item--large">
                <img
                  src="/images/haircut-styling.jpg"
                  alt="Contemporary salon interior with minimalist styling stations and natural daylight"
                  className="atmosphere-gallery__image"
                  width="600"
                  height="450"
                  loading="lazy"
                />
                <span className="atmosphere-gallery__caption">The Studio Floor</span>
              </div>

              <div className="atmosphere-gallery__item">
                <img
                  src="/images/hair-colouring.jpg"
                  alt="Precision color formulation and foil application session"
                  className="atmosphere-gallery__image"
                  width="400"
                  height="300"
                  loading="lazy"
                />
                <span className="atmosphere-gallery__caption">Colour Laboratory</span>
              </div>

              <div className="atmosphere-gallery__item">
                <img
                  src="/images/hair-treatment.jpg"
                  alt="High-sheen healthy hair fibers reflecting light after deep conditioning"
                  className="atmosphere-gallery__image"
                  width="400"
                  height="300"
                  loading="lazy"
                />
                <span className="atmosphere-gallery__caption">Restorative Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  APPOINTMENT ENQUIRY SECTION (#appointment)                      */}
      {/* ---------------------------------------------------------------- */}
      <section className="appointment-section" id="appointment" aria-labelledby="appointment-heading">
        <div className="appointment-section__inner">
          <div className="appointment-section__header">
            <p className="eyebrow appointment-section__eyebrow">Consultation &amp; Enquiries</p>
            <h2 id="appointment-heading" className="appointment-section__title">
              Request Your Atelier Appointment
            </h2>
            <p className="appointment-section__subtitle">
              Select your preferred treatment, date, and time window below. We welcome you to experience
              our tailored consultation ritual.
            </p>
          </div>

          <div className="appointment-section__grid">
            {/* Left Column: Context, Disclosures & Guidelines */}
            <aside className="appointment-info chrome-surface" aria-label="Appointment consultation details">
              <div className="appointment-info__block">
                <h3 className="appointment-info__title">Consultation Ritual</h3>
                <p className="appointment-info__text">
                  Every atelier booking begins with a complimentary 15-minute diagnostic hair
                  and scalp assessment to determine density, natural texture, and bond strength.
                </p>
              </div>

              <div className="appointment-info__block">
                <h3 className="appointment-info__title">Demonstration Privacy Guarantee</h3>
                <p className="appointment-info__text">
                  This form is built strictly as a client-side frontend demo. No personal contact details
                  are transmitted over the network, saved to servers, or recorded in local storage.
                </p>
              </div>

              <div className="appointment-info__block">
                <h3 className="appointment-info__title">Appointment Hours (Illustrative)</h3>
                <ul className="appointment-info__hours">
                  <li><span>Tuesday – Friday</span> <strong>09:30 – 19:30</strong></li>
                  <li><span>Saturday</span> <strong>09:00 – 18:00</strong></li>
                  <li><span>Sunday – Monday</span> <em>Closed for Studio Development</em></li>
                </ul>
              </div>

              <div className="appointment-info__block appointment-info__block--catalog-link">
                <p className="appointment-info__help">
                  Unsure which service matches your vision?
                </p>
                <Link to="/services" className="btn btn--secondary appointment-info__link-btn">
                  View Full Services &amp; Pricing
                </Link>
              </div>
            </aside>

            {/* Right Column: Interactive Appointment Form */}
            <div className="appointment-form-wrap">
              <AppointmentForm key={serviceParam} />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  BOTTOM CTA                                                      */}
      {/* ---------------------------------------------------------------- */}
      <section className="atelier-cta" aria-label="Atelier Navigation Links">
        <div className="atelier-cta__inner">
          <h2 className="atelier-cta__title">Experience the AURELIX Vision</h2>
          <p className="atelier-cta__text">
            Discover our complete catalogue of precision haircuts, dimensional colour,
            and molecular bond therapies.
          </p>
          <div className="atelier-cta__actions">
            <Link to="/services" className="btn btn--primary">
              Explore Services Catalog
            </Link>
            <Link to="/" className="btn btn--secondary">
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
