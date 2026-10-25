import { Link } from 'react-router-dom'

/**
 * ServiceCard Component
 * 
 * Reusable card representing an individual atelier service.
 * Displays title, subtitle, description, highlights, starting price,
 * duration, and an enquiry button navigating to the future appointment
 * section on the About page.
 */
export default function ServiceCard({ service }) {
  const { id, title, subtitle, description, priceFrom, duration, highlights } = service

  // Navigation target to future appointment section on About page with service pre-selected
  const appointmentTarget = `/about?service=${encodeURIComponent(title)}#appointment`

  return (
    <article className="service-card chrome-surface" id={`service-${id}`}>
      <div className="service-card__header">
        <div className="service-card__title-group">
          <span className="service-card__demo-badge" title="Portfolio demonstration only">
            Demo Offering
          </span>
          <h3 className="service-card__title">{title}</h3>
          {subtitle && <p className="service-card__subtitle">{subtitle}</p>}
        </div>

        <div className="service-card__pricing-pill" aria-label={`Starting price ${priceFrom}, duration approximately ${duration}`}>
          <div className="service-card__price">
            <span className="service-card__price-prefix">From</span>
            <span className="service-card__price-amount">{priceFrom}</span>
          </div>
          <span className="service-card__pricing-separator" aria-hidden="true" />
          <div className="service-card__duration">
            <svg
              className="service-card__icon"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{duration}</span>
          </div>
        </div>
      </div>

      <p className="service-card__description">{description}</p>

      {highlights && highlights.length > 0 && (
        <ul className="service-card__highlights" aria-label={`Key features included in ${title}`}>
          {highlights.map((item, index) => (
            <li key={index} className="service-card__highlight-item">
              <span className="service-card__highlight-bullet" aria-hidden="true">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="service-card__footer">
        <span className="service-card__disclaimer-note">
          * Illustrative demo price &amp; timing
        </span>

        <Link
          to={appointmentTarget}
          className="btn btn--secondary service-card__enquire-btn"
          aria-label={`Enquire about ${title} service appointment`}
        >
          <span>Enquire About Service</span>
          <svg
            className="service-card__btn-arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
