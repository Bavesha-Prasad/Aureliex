import { Link } from 'react-router-dom'

/**
 * Shared Footer Component
 *
 * Polished slate midnight footer with brand mission, categorized links,
 * legal disclaimers, and clear fictional portfolio notice.
 */
export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__brand-col">
          <p className="footer__brand">Aurelix</p>
          <p className="footer__text">
            A contemporary hair atelier specialising in precision cuts,
            expressive colour and restorative treatments in a light Liquid Chrome
            atmosphere.
          </p>
        </div>
        <div>
          <p className="footer__heading">Services</p>
          <Link to="/services#cuts-styling" className="footer__link">
            Cuts &amp; Styling
          </Link>
          <Link to="/services#colour" className="footer__link">
            Luminous Colour
          </Link>
          <Link to="/services#treatments" className="footer__link">
            Restorative Treatments
          </Link>
          <Link to="/services" className="footer__link">
            All Services &amp; Pricing
          </Link>
        </div>
        <div>
          <p className="footer__heading">Atelier</p>
          <Link to="/about" className="footer__link">
            About AURELIX
          </Link>
          <Link to="/#atelier" className="footer__link">
            Our Approach
          </Link>
          <Link to="/services" className="footer__link">
            Treatment Gallery
          </Link>
        </div>
        <div>
          <p className="footer__heading">Connect</p>
          <Link to="/about#appointment" className="footer__link">
            Book Appointment
          </Link>
          <Link to="/about#contact" className="footer__link">
            Location &amp; Hours
          </Link>
        </div>

        <div className="footer__divider" role="separator" aria-hidden="true" />

        <div className="footer__bottom">
          <span>&copy; 2026 AURELIX Hair Atelier</span>
          <span>A VYOMASANDHI Portfolio Concept</span>
        </div>

        <p className="footer__disclaimer">
          AURELIX Hair Atelier is a fictional portfolio project created for
          demonstration purposes. All prices, services, and schedules are illustrative
          portfolio examples. No real salon appointments are booked, and depicted individuals
          do not endorse this brand.
        </p>
      </div>
    </footer>
  )
}
