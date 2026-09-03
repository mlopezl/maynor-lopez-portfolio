import { useEffect } from 'react'

function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    const elements = document.querySelectorAll('.reveal')
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

export default useRevealOnScroll
