import { Link } from 'react-router-dom'

/**
 * AURELIX Hair Atelier — Homepage Component
 *
 * Polished, responsive homepage with Liquid Chrome art direction.
 * Sections: Hero, IntroSection, ServicesSection, EditorialSection, CtaSection.
 */

const HOME_SERVICES_PREVIEW = [
  {
    title: 'Precision Cuts',
    description:
      'Tailored haircuts shaped to your face, texture and lifestyle — from clean crops to sculptural layers.',
    image: '/images/haircut-styling.jpg',
    imageAlt: 'Professional haircut in progress at a salon',
    priceFrom: '£55',
    duration: '45 min',
  },
  {
    title: 'Styling',
    description:
      'Blowouts, editorial updos and event styling that move with you. Finished with heat protection.',
    image: '/images/haircut-styling.jpg',
    imageAlt: 'Hair being styled professionally in a salon setting',
    priceFrom: '£40',
    duration: '30 min',
  },
  {
    title: 'Colouring',
    description:
      'Balayage, full-coverage colour and tonal correction using ammonia-free formulations.',
    image: '/images/hair-colouring.jpg',
    imageAlt: 'Hair colouring application with foils',
    priceFrom: '£85',
    duration: '90 min',
  },
  {
    title: 'Treatments',
    description:
      'Deep-conditioning masks, bond repair and scalp therapy for visibly healthier, glossier hair.',
    image: '/images/hair-treatment.jpg',
    imageAlt: 'Close-up of glossy, healthy hair after treatment',
    priceFrom: '£45',
    duration: '40 min',
  },
]

function Hero() {
  return (
    <section className="hero" id="top" aria-label="Hero">
      {/* Ambient orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      <div className="hero__container">
        {/* Text content */}
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">Hair Atelier</p>
          <h1 className="hero__title">
            Your hair.<br /><em>Reimagined.</em>
          </h1>
          <p className="hero__description">
            Precision cuts, expressive colour and restorative treatments —
            crafted by stylists who see hair as a medium for self-expression.
          </p>
          <div className="hero__actions">
            <Link to="/services" className="btn btn--primary">
              Explore Services
            </Link>
            <Link to="/about#appointment" className="btn btn--secondary">
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Visual composition */}
        <div className="hero__visual">
          <div className="hero__image-frame">
            <img
              className="hero__image"
              src="/images/hero-portrait.jpg"
              alt="Portrait of a person with beautifully styled hair in an editorial setting"
              width="480"
              height="640"
              loading="eager"
            />
          </div>
          {/* Chrome sculpture accent */}
          <div className="hero__chrome" aria-hidden="true">
            <img
              src="/images/chrome-sculpture.jpg"
              alt=""
              width="200"
              height="200"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function IntroSection() {
  return (
    <section className="intro" id="atelier" aria-label="About the Atelier">
      <div className="intro__inner">
        <div className="intro__image-wrap">
          <img
            className="intro__image"
            src="/images/haircut-styling.jpg"
            alt="Interior of a contemporary hair salon with clean, modern design"
            width="600"
            height="450"
            loading="lazy"
          />
        </div>
        <div className="intro__content">
          <p className="eyebrow intro__eyebrow">The Atelier</p>
          <h2 className="intro__title">Where craft meets creativity</h2>
          <p className="intro__text">
            AURELIX is a space designed around you — clean sightlines,
            natural light and a focused atmosphere where expert stylists
            give your hair their undivided attention.
          </p>
          <p className="intro__text">
            Every appointment begins with a thorough consultation.
            We listen first, then craft a result that complements your
            features, fits your routine and moves the way you want it to.
          </p>
        </div>
      </div>
    </section>
  )
}

function HomeServiceCard({ title, description, image, imageAlt, priceFrom, duration }) {
  return (
    <article className="service-card chrome-surface" style={{ borderRadius: 'var(--radius-lg)' }}>
      <div className="service-card__image-wrap">
        <img
          className="service-card__image"
          src={image}
          alt={imageAlt}
          width="400"
          height="300"
          loading="lazy"
        />
      </div>
      <div className="service-card__body">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__description">{description}</p>
        <div className="service-card__meta">
          <span>From {priceFrom}</span>
          <span className="service-card__meta-dot" aria-hidden="true" />
          <span>{duration}</span>
        </div>
      </div>
    </article>
  )
}

function ServicesSection() {
  return (
    <section className="services" id="services" aria-label="Our Services">
      <div className="services__inner">
        <div className="services__header">
          <p className="eyebrow services__eyebrow">Our Services</p>
          <h2 className="services__title">Crafted for you</h2>
          <p className="services__subtitle">
            From precise cuts to vibrant colour — every service is tailored,
            every detail intentional.
          </p>
        </div>
        <div className="services__grid">
          {HOME_SERVICES_PREVIEW.map((service) => (
            <HomeServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
          <Link to="/services" className="btn btn--primary">
            View All Services &amp; Full Pricing Guide
          </Link>
        </div>
      </div>
    </section>
  )
}

function EditorialSection() {
  return (
    <section className="editorial" aria-label="Hair care philosophy">
      <div className="editorial__inner">
        <div className="editorial__layout">
          <div className="editorial__image-main">
            <img
              src="/images/hair-treatment.jpg"
              alt="Close-up of healthy, glossy hair with visible shine and texture"
              width="600"
              height="800"
              loading="lazy"
            />
          </div>
          <div className="editorial__content">
            <p className="eyebrow editorial__eyebrow">The AURELIX Approach</p>
            <h2 className="editorial__title">Hair health, elevated</h2>
            <p className="editorial__text">
              Great style begins with great condition. Our treatments
              are formulated to repair, protect and amplify — leaving
              your hair noticeably stronger and more luminous.
            </p>
            <div className="editorial__features">
              <div className="editorial__feature">
                <span className="editorial__feature-icon" aria-hidden="true">✦</span>
                <div className="editorial__feature-text">
                  <strong>Bond Repair</strong>
                  Reconstructive treatments that mend internal hair bonds
                  weakened by heat or chemical processing.
                </div>
              </div>
              <div className="editorial__feature">
                <span className="editorial__feature-icon" aria-hidden="true">✦</span>
                <div className="editorial__feature-text">
                  <strong>Scalp Therapy</strong>
                  Targeted scalp care to balance hydration, stimulate
                  follicles and create the ideal foundation for growth.
                </div>
              </div>
              <div className="editorial__feature">
                <span className="editorial__feature-icon" aria-hidden="true">✦</span>
                <div className="editorial__feature-text">
                  <strong>Gloss Finish</strong>
                  A translucent toning glaze that seals the cuticle and
                  delivers mirror-like shine without altering colour.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="cta-section" id="contact" aria-label="Book an appointment">
      <div className="cta-section__bg" aria-hidden="true" />
      <div className="cta-section__inner">
        <p className="eyebrow cta-section__eyebrow">Ready?</p>
        <h2 className="cta-section__title">Let&apos;s create something beautiful</h2>
        <p className="cta-section__text">
          Book a consultation and discover what&apos;s possible. Every great
          style starts with a conversation.
        </p>
        <div className="cta-section__actions">
          <Link to="/about#appointment" className="btn btn--primary">
            Book Appointment
          </Link>
          <Link to="/services" className="btn btn--secondary">
            View Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="divider" aria-hidden="true">
        <div className="divider__line" />
      </div>
      <IntroSection />
      <ServicesSection />
      <EditorialSection />
      <CtaSection />
    </>
  )
}
