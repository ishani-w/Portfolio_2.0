import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

/**
 * PageTransition — wraps children in a fade+rise animation on route change.
 * Also renders a subtle cursor glow that follows the mouse.
 */
export default function PageTransition({ children }) {
  const location = useLocation();
  const cursorRef = useRef(null);

  // Cursor glow follow
  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    let raf;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      currentX = lerp(currentX, mouseX, 0.08);
      currentY = lerp(currentY, mouseY, 0.08);
      el.style.left = `${currentX}px`;
      el.style.top = `${currentY}px`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Cursor glow effect */}
      <div ref={cursorRef} className="cursor-glow" aria-hidden="true" />

      {/* Page content with transition */}
      <div key={location.pathname} className="page-transition">
        {children}
      </div>
    </>
  );
}
