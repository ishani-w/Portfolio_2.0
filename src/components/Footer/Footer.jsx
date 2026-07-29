import CircleArrow from '../CircleArrow/CircleArrow';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <span className="footer__watermark">Contact</span>

      <div className="container">
        <div className="footer__inner">
          <div className="footer__contact">
            <div className="footer__contact-item">
              <span className="footer__contact-label">Email</span>
              <span className="footer__contact-value" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <a href="mailto:hello@ishani.dev">hello@ishani.dev</a>
                <a href="mailto:ishani.iarts@gmail.com" style={{ fontSize: '13px', color: 'var(--grey-dim)' }}>ishani.iarts@gmail.com</a>
              </span>
            </div>

            <div className="footer__contact-item">
              <span className="footer__contact-label">Phone</span>
              <span className="footer__contact-value">
                <a href="tel:+94779097770">+94 77 909 7770</a>
              </span>
            </div>

            <div className="footer__contact-item">
              <span className="footer__contact-label">Location</span>
              <span className="footer__contact-value" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                Rahathungoda,<br />Hewahata, Sri Lanka
              </span>
            </div>
          </div>

          <div className="footer__social">
            <div className="footer__social-links">
              <CircleArrow label="LinkedIn" to="https://www.linkedin.com/in/ishani-wijesooriya-55000a182/" />
              <CircleArrow label="Behance" to="https://www.behance.net/ishaniwijesooriya" />
              <CircleArrow label="Fiverr" to="https://www.fiverr.com/inwijesuriya" />
              <CircleArrow label="Instagram" to="https://www.instagram.com/iartsdoodle/" />
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__wordmark">Ishani Wijesooriya</span>
          <span className="footer__copy">
            © {new Date().getFullYear()} Ishani Wijesooriya. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
