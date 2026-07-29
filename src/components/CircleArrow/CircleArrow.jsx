import { Link } from 'react-router-dom';
import './CircleArrow.css';

export default function CircleArrow({ label, to, onClick }) {
  const content = (
    <>
      {label && <span className="circle-arrow__label">{label}</span>}
      <span className="circle-arrow__icon">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className="circle-arrow">
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className="circle-arrow" onClick={onClick}>
      {content}
    </button>
  );
}
