import { useEffect, useRef } from 'react';

/**
 * SectionReveal — Intersection Observer with configurable direction and delay.
 *
 * @param {string} direction - 'up' (default) | 'left' | 'right' | 'none'
 * @param {number} delay - milliseconds before animation fires after entering viewport
 * @param {string} className - additional CSS classes on the wrapper
 */
export default function SectionReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('visible');
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal reveal--${direction} ${className}`}>
      {children}
    </div>
  );
}
