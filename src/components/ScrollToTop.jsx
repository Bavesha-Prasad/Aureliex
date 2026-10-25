import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop helper for React Router
 * Resets window scroll on page navigation or handles hash targets smoothly.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Small timeout to allow target element to mount if coming from another route
      const timer = setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
      return () => clearTimeout(timer)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
