import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SERVICE_CATEGORIES, SERVICES_DATA } from '../data/servicesData'
import ServiceCard from '../components/ServiceCard'

/**
 * AURELIX Hair Atelier — Services Page
 *
 * Full treatment menu organized across three core categories:
 * - Cuts & Styling
 * - Colour
 * - Treatments
 *
 * Adheres strictly to the light-themed Liquid Chrome aesthetic:
 * Pearl White, Liquid Silver, Icy Periwinkle, and Slate Midnight.
 */
export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredCategories =
    activeCategory === 'all'
      ? SERVICE_CATEGORIES
      : SERVICE_CATEGORIES.filter((cat) => cat.id === activeCategory)

  return (
    <div className="services-page">
      {/* ---------------------------------------------------------------- */}
      {/*  HERO / HEADER SECTION                                           */}
      {/* ---------------------------------------------------------------- */}
      <section className="services-hero" aria-labelledby="services-heading">
        {/* Ambient atmospheric orbs */}
        <div className="services-hero__orb services-hero__orb--1" aria-hidden="true" />
        <div className="services-hero__orb services-hero__orb--2" aria-hidden="true" />

        <div className="services-hero__inner">
          <p className="eyebrow services-hero__eyebrow">The Atelier Menu</p>
          <h1 id="services-heading" className="services-hero__title">
            Artisan Services &amp; <br />
            <em>Bespoke Styling</em>
          </h1>
          <p className="services-hero__lead">
            Every appointment is crafted with deliberate care, architectural technique,
            and clean, restorative formulations designed to celebrate your hair&apos;s natural movement.
          </p>

          {/* Prominent Portfolio Demonstration Label */}
          <div className="demo-disclaimer-banner chrome-surface" role="note" aria-label="Portfolio demonstration disclaimer">
            <div className="demo-disclaimer-banner__icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>
            <div className="demo-disclaimer-banner__text">
              <strong>Fictional Portfolio Concept:</strong> All service descriptions, starting prices
              (&pound;), and estimated durations shown across this page are illustrative demonstration examples
              created for VYOMASANDHI, not commercial salon offers.
            </div>
          </div>

          {/* Category Filter Controls */}
          <nav className="services-filter" aria-label="Filter service categories">
            <button
              type="button"
              className={`services-filter__btn${activeCategory === 'all' ? ' services-filter__btn--active' : ''}`}
              onClick={() => setActiveCategory('all')}
              aria-pressed={activeCategory === 'all'}
            >
              All Services (9)
            </button>
            {SERVICE_CATEGORIES.map((cat) => {
              const count = SERVICES_DATA.filter((s) => s.categoryId === cat.id).length
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`services-filter__btn${activeCategory === cat.id ? ' services-filter__btn--active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={activeCategory === cat.id}
                >
                  {cat.name} ({count})
                </button>
              )
            })}
          </nav>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  CATEGORY SECTIONS & SERVICE CARDS                                */}
      {/* ---------------------------------------------------------------- */}
      <div className="services-content" id="services-catalog">
        <div className="services-content__inner">
          {filteredCategories.map((category) => {
            const categoryServices = SERVICES_DATA.filter(
              (s) => s.categoryId === category.id
            )

            return (
              <section
                key={category.id}
                id={category.id}
                className="category-section"
                aria-labelledby={`category-title-${category.id}`}
              >
                {/* Category Editorial Header Card */}
                <header className="category-header chrome-surface">
                  <div className="category-header__image-wrap">
                    <img
                      src={category.image}
                      alt={category.imageAlt}
                      className="category-header__image"
                      width="540"
                      height="360"
                      loading="lazy"
                    />
                    <div className="category-header__image-overlay" aria-hidden="true" />
                  </div>
                  <div className="category-header__content">
                    <p className="eyebrow category-header__eyebrow">{category.eyebrow}</p>
                    <h2 id={`category-title-${category.id}`} className="category-header__title">
                      {category.name}
                    </h2>
                    <p className="category-header__tagline">{category.tagline}</p>
                    <div className="category-header__count-pill">
                      <span>{categoryServices.length} Dedicated Services</span>
                    </div>
                  </div>
                </header>

                {/* Service Cards Grid */}
                <div
                  className="category-grid"
                  role="region"
                  aria-label={`${category.name} treatments list`}
                >
                  {categoryServices.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/*  CONSULTATION EXPERIENCE CALLOUT                                  */}
      {/* ---------------------------------------------------------------- */}
      <section className="consultation-section" aria-labelledby="consultation-heading">
        <div className="consultation-section__inner">
          <div className="consultation-section__grid">
            <div className="consultation-section__content">
              <p className="eyebrow consultation-section__eyebrow">The Atelier Standard</p>
              <h2 id="consultation-heading" className="consultation-section__title">
                Every service begins with a listening consultation
              </h2>
              <p className="consultation-section__text">
                We believe true artistry starts before scissors or colour touch hair.
                Our stylists invest time to understand your lifestyle, daily routines,
                scalp biology, and aesthetic preferences.
              </p>
              <div className="consultation-section__steps">
                <div className="consultation-step">
                  <div className="consultation-step__num">01</div>
                  <div>
                    <h3 className="consultation-step__title">Diagnostic Hair &amp; Scalp Assessment</h3>
                    <p className="consultation-step__desc">
                      Micro-analysis of elasticity, porosity, previous chemical services, and growth direction.
                    </p>
                  </div>
                </div>
                <div className="consultation-step">
                  <div className="consultation-step__num">02</div>
                  <div>
                    <h3 className="consultation-step__title">Bespoke Formulation</h3>
                    <p className="consultation-step__desc">
                      Custom tonal matching and restorative bond-protecting infusions mixed on demand.
                    </p>
                  </div>
                </div>
                <div className="consultation-step">
                  <div className="consultation-step__num">03</div>
                  <div>
                    <h3 className="consultation-step__title">At-Home Regimen Mapping</h3>
                    <p className="consultation-step__desc">
                      Tailored care guidance so your salon finish continues to shine between visits.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="consultation-section__visual">
              <div className="consultation-section__image-frame chrome-surface">
                <img
                  src="/images/hero-portrait.jpg"
                  alt="Editorial portrait showing radiant, healthy styled hair"
                  className="consultation-section__image"
                  width="480"
                  height="640"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  BOTTOM CTA                                                      */}
      {/* ---------------------------------------------------------------- */}
      <section className="services-cta" aria-labelledby="services-cta-heading">
        <div className="services-cta__inner">
          <p className="eyebrow services-cta__eyebrow">Ready for Your Transformation?</p>
          <h2 id="services-cta-heading" className="services-cta__title">
            Reserve your consultation session
          </h2>
          <p className="services-cta__text">
            Select a service above or enquire directly with our team to find the ideal
            treatment plan for your hair goals.
          </p>
          <div className="services-cta__actions">
            <Link to="/about#appointment" className="btn btn--primary">
              Enquire About an Appointment
            </Link>
            <Link to="/" className="btn btn--secondary">
              Back to Homepage
            </Link>
          </div>
          <p className="services-cta__note">
            * Portfolio showcase notice: Appointment booking will be fully interactive on the About page in Stage 4.
          </p>
        </div>
      </section>
    </div>
  )
}
