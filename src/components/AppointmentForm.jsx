import { useState, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SERVICES_DATA, SERVICE_CATEGORIES } from '../data/servicesData'

/**
 * AppointmentForm Component
 *
 * A reusable, accessible appointment preference enquiry form for AURELIX Hair Atelier.
 *
 * DEMO & PRIVACY SPECIFICATION:
 * - Strictly a client-side portfolio demonstration for VYOMASANDHI.
 * - Prevents default browser submission; NO network requests are dispatched.
 * - NO persistence (no backend, database, localStorage, sessionStorage, or cookies).
 * - NO logging of personal user information to the console.
 * - Displays a simulated confirmation explaining that no live booking occurred
 *   and no data was transmitted or stored.
 * - Includes a reset/start-again action.
 */
export default function AppointmentForm() {
  const [searchParams] = useSearchParams()
  const queryServiceParam = searchParams.get('service')

  // Calculate today's date in YYYY-MM-DD for the HTML min attribute
  const today = new Date()
  const yyyy = today.getFullYear()
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const dd = String(today.getDate()).padStart(2, '0')
  const minDateString = `${yyyy}-${mm}-${dd}`

  // Helper to match service from query string safely
  const findMatchingService = (query) => {
    if (!query) return ''
    const cleanQuery = query.trim().toLowerCase()
    const matched = SERVICES_DATA.find(
      (s) =>
        s.title.toLowerCase() === cleanQuery ||
        s.id.toLowerCase() === cleanQuery
    )
    return matched ? matched.title : ''
  }

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: findMatchingService(queryServiceParam),
    preferredDate: '',
    preferredTime: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedSnapshot, setSubmittedSnapshot] = useState(null)

  // Reference to focus first error
  const fullNameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const serviceRef = useRef(null)
  const dateRef = useRef(null)
  const timeRef = useRef(null)

  // Field validator
  const validateField = (name, value) => {
    switch (name) {
      case 'fullName': {
        const trimmed = value.trim()
        if (!trimmed) return 'Please enter your full name.'
        if (trimmed.length < 2) return 'Full name must be at least 2 characters.'
        return ''
      }
      case 'email': {
        const trimmed = value.trim()
        if (!trimmed) return 'Please enter your email address.'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(trimmed)) return 'Please enter a valid email address (e.g. name@example.com).'
        return ''
      }
      case 'phone': {
        const trimmed = value.trim()
        if (!trimmed) return 'Please enter your contact phone number.'
        const digits = trimmed.replace(/\D/g, '')
        if (digits.length < 7) return 'Please enter a valid phone number (at least 7 digits).'
        if (!/^[\d\s+\-()]{7,20}$/.test(trimmed)) return 'Phone number contains unsupported characters.'
        return ''
      }
      case 'service': {
        if (!value || value.trim() === '') return 'Please select a requested service.'
        return ''
      }
      case 'preferredDate': {
        if (!value) return 'Please select a preferred appointment date.'
        if (value < minDateString) return 'Preferred date cannot be in the past.'
        return ''
      }
      case 'preferredTime': {
        if (!value || value.trim() === '') return 'Please select a preferred time of day.'
        return ''
      }
      default:
        return ''
    }
  }

  // Validate entire form
  const validateForm = () => {
    const newErrors = {}
    const fieldsToValidate = ['fullName', 'email', 'phone', 'service', 'preferredDate', 'preferredTime']

    fieldsToValidate.forEach((field) => {
      const error = validateField(field, formData[field])
      if (error) {
        newErrors[field] = error
      }
    })

    return newErrors
  }

  // Handle inputs
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error dynamically if field was previously touched
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  // Handle blur
  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  // Form submission handler
  const handleSubmit = (e) => {
    // 1. Prevent browser default submission
    e.preventDefault()

    // Mark all required fields as touched
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      service: true,
      preferredDate: true,
      preferredTime: true,
      message: true,
    })

    const validationErrors = validateForm()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      // Focus the first invalid field for keyboard accessibility
      if (validationErrors.fullName && fullNameRef.current) fullNameRef.current.focus()
      else if (validationErrors.email && emailRef.current) emailRef.current.focus()
      else if (validationErrors.phone && phoneRef.current) phoneRef.current.focus()
      else if (validationErrors.service && serviceRef.current) serviceRef.current.focus()
      else if (validationErrors.preferredDate && dateRef.current) dateRef.current.focus()
      else if (validationErrors.preferredTime && timeRef.current) timeRef.current.focus()
      return
    }

    // 2. Demonstration only: No network requests, no database, no storage, no console logging of personal data.
    // Store snapshot in memory solely to display the simulated confirmation screen.
    setSubmittedSnapshot({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      message: formData.message,
    })
    setIsSubmitted(true)
  }

  // Reset form to start again
  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: findMatchingService(queryServiceParam),
      preferredDate: '',
      preferredTime: '',
      message: '',
    })
    setErrors({})
    setTouched({})
    setSubmittedSnapshot(null)
    setIsSubmitted(false)
  }

  // Render confirmation state if submitted successfully
  if (isSubmitted && submittedSnapshot) {
    return (
      <div
        className="appointment-confirmation chrome-surface"
        role="region"
        aria-live="polite"
        aria-labelledby="confirmation-heading"
      >
        <div className="appointment-confirmation__badge-wrap">
          <span className="appointment-confirmation__badge">
            Demonstration Simulation Only
          </span>
        </div>

        <div className="appointment-confirmation__icon-wrap" aria-hidden="true">
          <span className="appointment-confirmation__icon">✦</span>
        </div>

        <h3 id="confirmation-heading" className="appointment-confirmation__title">
          Enquiry Simulation Complete
        </h3>

        <p className="appointment-confirmation__lead">
          Thank you, <strong>{submittedSnapshot.fullName}</strong>. Your appointment preference
          has been tested within this frontend demonstration environment.
        </p>

        {/* Clear disclosure of demo-only behaviour */}
        <div className="appointment-confirmation__notice" role="note">
          <p className="appointment-confirmation__notice-title">
            Zero-Transmission &amp; Privacy Notice:
          </p>
          <p className="appointment-confirmation__notice-body">
            Because AURELIX Hair Atelier is a fictional portfolio project, <strong>no live appointment has been booked</strong>,
            no salon staff will contact you, and the information entered above was <strong>neither transmitted across the network
            nor saved</strong> to any database or local storage.
          </p>
        </div>

        {/* Read-only review of what user simulated */}
        <div className="appointment-confirmation__summary">
          <h4 className="appointment-confirmation__summary-heading">
            Simulated Preferences Summary:
          </h4>
          <dl className="appointment-confirmation__dl">
            <div className="appointment-confirmation__dl-row">
              <dt>Requested Service:</dt>
              <dd><strong>{submittedSnapshot.service}</strong></dd>
            </div>
            <div className="appointment-confirmation__dl-row">
              <dt>Preferred Date:</dt>
              <dd>{submittedSnapshot.preferredDate}</dd>
            </div>
            <div className="appointment-confirmation__dl-row">
              <dt>Preferred Window:</dt>
              <dd>{submittedSnapshot.preferredTime}</dd>
            </div>
            <div className="appointment-confirmation__dl-row">
              <dt>Contact Email:</dt>
              <dd>{submittedSnapshot.email}</dd>
            </div>
            <div className="appointment-confirmation__dl-row">
              <dt>Contact Phone:</dt>
              <dd>{submittedSnapshot.phone}</dd>
            </div>
            {submittedSnapshot.message && (
              <div className="appointment-confirmation__dl-row appointment-confirmation__dl-row--full">
                <dt>Styling Notes:</dt>
                <dd className="appointment-confirmation__message-preview">{submittedSnapshot.message}</dd>
              </div>
            )}
          </dl>
        </div>

        <div className="appointment-confirmation__actions">
          <button
            type="button"
            onClick={handleReset}
            className="btn btn--primary appointment-confirmation__btn"
          >
            Start Another Demonstration Enquiry
          </button>
        </div>
      </div>
    )
  }

  // Active form view
  return (
    <form
      className="appointment-form chrome-surface"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Atelier Appointment Preference Enquiry Form"
    >
      <div className="appointment-form__header">
        <h3 className="appointment-form__title">Appointment Preference Form</h3>
        <p className="appointment-form__desc">
          Fields marked with <span className="form-required" aria-hidden="true">*</span> are required.
          All times and dates represent booking preferences, not live guaranteed slots.
        </p>
      </div>

      <div className="appointment-form__grid">
        {/* Full Name */}
        <div className={`form-group${errors.fullName ? ' form-group--error' : ''}`}>
          <label htmlFor="form-fullName" className="form-label">
            Full Name <span className="form-required" aria-hidden="true">*</span>
          </label>
          <input
            ref={fullNameRef}
            id="form-fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g. Jordan Vane"
            className="form-input"
            aria-required="true"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            autoComplete="name"
          />
          {errors.fullName && (
            <p id="fullName-error" className="form-error" role="alert">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Email Address */}
        <div className={`form-group${errors.email ? ' form-group--error' : ''}`}>
          <label htmlFor="form-email" className="form-label">
            Email Address <span className="form-required" aria-hidden="true">*</span>
          </label>
          <input
            ref={emailRef}
            id="form-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g. jordan@example.com"
            className="form-input"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            autoComplete="email"
          />
          {errors.email && (
            <p id="email-error" className="form-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className={`form-group${errors.phone ? ' form-group--error' : ''}`}>
          <label htmlFor="form-phone" className="form-label">
            Phone Number <span className="form-required" aria-hidden="true">*</span>
          </label>
          <input
            ref={phoneRef}
            id="form-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g. +44 20 7946 0912"
            className="form-input"
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            autoComplete="tel"
          />
          {errors.phone && (
            <p id="phone-error" className="form-error" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Requested Service */}
        <div className={`form-group${errors.service ? ' form-group--error' : ''}`}>
          <label htmlFor="form-service" className="form-label">
            Requested Service <span className="form-required" aria-hidden="true">*</span>
          </label>
          <select
            ref={serviceRef}
            id="form-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-select"
            aria-required="true"
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? 'service-error' : undefined}
          >
            <option value="">Select a service from the catalogue...</option>
            {SERVICE_CATEGORIES.map((category) => (
              <optgroup key={category.id} label={category.name}>
                {SERVICES_DATA.filter((s) => s.categoryId === category.id).map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title} ({service.priceFrom} • {service.duration})
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" className="form-error" role="alert">
              {errors.service}
            </p>
          )}
        </div>

        {/* Preferred Date */}
        <div className={`form-group${errors.preferredDate ? ' form-group--error' : ''}`}>
          <label htmlFor="form-preferredDate" className="form-label">
            Preferred Date <span className="form-required" aria-hidden="true">*</span>
          </label>
          <input
            ref={dateRef}
            id="form-preferredDate"
            type="date"
            name="preferredDate"
            min={minDateString}
            value={formData.preferredDate}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-input"
            aria-required="true"
            aria-invalid={!!errors.preferredDate}
            aria-describedby={errors.preferredDate ? 'preferredDate-error' : undefined}
          />
          {errors.preferredDate && (
            <p id="preferredDate-error" className="form-error" role="alert">
              {errors.preferredDate}
            </p>
          )}
        </div>

        {/* Preferred Time Window */}
        <div className={`form-group${errors.preferredTime ? ' form-group--error' : ''}`}>
          <label htmlFor="form-preferredTime" className="form-label">
            Preferred Time Window <span className="form-required" aria-hidden="true">*</span>
          </label>
          <select
            ref={timeRef}
            id="form-preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-select"
            aria-required="true"
            aria-invalid={!!errors.preferredTime}
            aria-describedby={errors.preferredTime ? 'preferredTime-error' : undefined}
          >
            <option value="">Select a preferred time window...</option>
            <option value="Morning (09:30 - 12:00)">Morning (09:30 – 12:00)</option>
            <option value="Midday (12:00 - 14:30)">Midday (12:00 – 14:30)</option>
            <option value="Afternoon (14:30 - 17:00)">Afternoon (14:30 – 17:00)</option>
            <option value="Evening (17:00 - 19:30)">Evening (17:00 – 19:30)</option>
          </select>
          {errors.preferredTime && (
            <p id="preferredTime-error" className="form-error" role="alert">
              {errors.preferredTime}
            </p>
          )}
        </div>

        {/* Optional Message / Styling Preferences */}
        <div className="form-group form-group--full">
          <label htmlFor="form-message" className="form-label">
            Styling Preferences &amp; Hair Notes <span className="form-optional">(Optional)</span>
          </label>
          <textarea
            id="form-message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Share any details regarding your hair length, texture, colour history, or inspirational styling goals..."
            className="form-textarea"
          />
        </div>
      </div>

      <div className="appointment-form__footer">
        <p className="appointment-form__disclaimer">
          * This preference enquiry is processed entirely in the browser for portfolio evaluation.
          No live calendar slots are reserved.
        </p>

        <button
          type="submit"
          className="btn btn--primary appointment-form__submit-btn"
          aria-label="Submit appointment enquiry preference"
        >
          <span>Submit Preference Enquiry</span>
          <svg
            className="appointment-form__btn-arrow"
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
        </button>
      </div>
    </form>
  )
}
