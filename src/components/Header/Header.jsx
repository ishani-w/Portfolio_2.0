import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/work', label: 'Work' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll state for header styling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMenuOpen(false);
  }

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isWorkPage = (path) => {
    if (path === '/work') {
      return location.pathname.startsWith('/work');
    }
    return false;
  };

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`} id="site-header">
      <div className="header__inner">
        <Link to="/" className="header__wordmark">
          Ishani Wijesooriya
        </Link>

        <div className="header__actions">
          <nav className="header__nav" aria-label="Main navigation">
            {NAV_LINKS.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/' || path === '/work'}
                className={({ isActive }) =>
                  `header__nav-link${isActive || isWorkPage(path) ? ' active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <ThemeToggle className="header__theme-toggle" />

          <button
            className={`header__hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`header__overlay${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile slide panel */}
      <nav
        className={`header__mobile-nav${menuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/' || path === '/work'}
            className={({ isActive }) =>
              `header__nav-link${isActive || isWorkPage(path) ? ' active' : ''}`
            }
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}

        <ThemeToggle showLabel className="header__mobile-theme-toggle" />
      </nav>
    </header>
  );
}
