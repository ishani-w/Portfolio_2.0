import './LogoCarousel.css';

const LOGO_ITEMS = [
  {
    name: 'Figma',
    svg: (
      <svg viewBox="0 0 38 57" width="36" height="36" fill="none">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    name: 'Adobe XD',
    svg: (
      <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
        <rect width="48" height="48" rx="10" fill="#2E001F" />
        <rect x="1" y="1" width="46" height="46" rx="9" stroke="#FF61F6" strokeWidth="2" />
        <text x="9" y="32" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif" fontWeight="900" fontSize="22" fill="#FF61F6" letterSpacing="-1">Xd</text>
      </svg>
    ),
  },
  {
    name: 'Sketch',
    svg: (
      <svg viewBox="0 0 512 512" width="38" height="38">
        <path fill="#FDB300" d="M124.6 30.6L2.3 175.7 256 507.4 509.7 175.7 387.4 30.6z" />
        <path fill="#EA6C00" d="M2.3 175.7L256 507.4V30.6L124.6 30.6z" />
        <path fill="#FFAE00" d="M509.7 175.7L256 507.4V30.6l131.4 0z" />
        <path fill="#FFD400" d="M124.6 30.6L256 175.7 2.3 175.7z" />
        <path fill="#FF9000" d="M387.4 30.6L256 175.7l253.7 0z" />
        <path fill="#FDD231" d="M124.6 30.6L256 30.6 256 175.7z" />
        <path fill="#FD8C00" d="M387.4 30.6L256 30.6 256 175.7z" />
      </svg>
    ),
  },
  {
    name: 'Adobe Illustrator',
    svg: (
      <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
        <rect width="48" height="48" rx="10" fill="#261300" />
        <rect x="1" y="1" width="46" height="46" rx="9" stroke="#FF9A00" strokeWidth="2" />
        <text x="10" y="32" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif" fontWeight="900" fontSize="22" fill="#FF9A00" letterSpacing="-1">Ai</text>
      </svg>
    ),
  },
  {
    name: 'Adobe Photoshop',
    svg: (
      <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
        <rect width="48" height="48" rx="10" fill="#001E36" />
        <rect x="1" y="1" width="46" height="46" rx="9" stroke="#31A8FF" strokeWidth="2" />
        <text x="10" y="32" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif" fontWeight="900" fontSize="22" fill="#31A8FF" letterSpacing="-1">Ps</text>
      </svg>
    ),
  },
  {
    name: 'WordPress',
    svg: (
      <svg viewBox="0 0 512 512" width="40" height="40">
        <circle cx="256" cy="256" r="256" fill="#21759B" />
        <path
          fill="#FFFFFF"
          d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8.9 0 1.8.1 2.8.2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7.3 13.7.3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z"
        />
      </svg>
    ),
  },
  {
    name: 'Android Studio',
    svg: (
      <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
        <rect width="48" height="48" rx="10" fill="#242A2E" />
        <circle cx="24" cy="24" r="14" fill="#3DDC84" />
        <path d="M19 19a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4zm10 0a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" fill="#242A2E" />
        <path d="M24 13.5c-4.4 0-8 3.5-8 7.8h16c0-4.3-3.6-7.8-8-7.8zm-5-3.3l-1.5-2.5a.6.6 0 1 0-1 .6l1.5 2.5c.6-.3 1.2-.5 1-.6zm11.8.6l1.5-2.5a.6.6 0 1 0-1-.6l-1.5 2.5c.7.2 1.2.5 1 .6z" fill="#242A2E" />
        <path d="M16 23.5h16v5.8a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2v-5.8z" fill="#242A2E" />
      </svg>
    ),
  },
  {
    name: 'Flutter',
    svg: (
      <svg viewBox="0 0 48 48" width="38" height="38" fill="none">
        <path d="M28.4 4L10 22.4l5.7 5.7L39.8 4H28.4z" fill="#42A5F5" />
        <path d="M28.4 22.4L18.6 32.2l5.7 5.7L39.8 22.4H28.4z" fill="#42A5F5" />
        <path d="M24.3 37.9L18.6 32.2l5.7-5.7 5.7 5.7-5.7 5.7z" fill="#0D47A1" />
        <path d="M24.3 37.9l5.7-5.7 9.8 9.8H28.4l-4.1-4.1z" fill="#01579B" />
        <path d="M30 32.2l-5.7-5.7 5.7-5.7 5.7 5.7-5.7 5.7z" fill="#29B6F6" />
      </svg>
    ),
  },
  {
    name: 'React',
    svg: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" width="42" height="42">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Adobe InDesign',
    svg: (
      <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
        <rect width="48" height="48" rx="10" fill="#2D001E" />
        <rect x="1" y="1" width="46" height="46" rx="9" stroke="#FF3366" strokeWidth="2" />
        <text x="12" y="32" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif" fontWeight="900" fontSize="22" fill="#FF3366" letterSpacing="-1">Id</text>
      </svg>
    ),
  },
];

export default function LogoCarousel() {
  // Duplicate array so marquee loops seamlessly without gap
  const displayItems = [...LOGO_ITEMS, ...LOGO_ITEMS];

  return (
    <section className="logo-carousel-section" aria-label="Tools and technologies">
      <div className="logo-carousel">
        <div className="logo-carousel__track" aria-hidden="true">
          {displayItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="logo-card"
              title={item.name}
            >
              <div className="logo-card__icon">{item.svg}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
