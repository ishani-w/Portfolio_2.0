import { useState } from 'react';
import SectionReveal from '../../components/SectionReveal/SectionReveal';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <>
      {/* ===== Hero Title ===== */}
      <section className="contact-hero section-pad" id="contact-hero">
        <div className="container">
          <SectionReveal direction="none">
            <h1 className="contact-hero__title">
              Let's build intuitive products
              <span className="accent"> & experiences.</span>
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* ===== Contact Body ===== */}
      <section className="contact-body section-pad" id="contact-form-section">
        <div className="container">
          <div className="contact-body__grid">
            {/* Form */}
            <SectionReveal direction="left">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success__icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3>Message Sent</h3>
                  <p>
                    Thank you for reaching out. I'll get back to you within
                    24 hours.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <span className="eyebrow" style={{ marginBottom: '16px' }}>
                    Send a Message
                  </span>

                  <div className="contact-form__row">
                    <input
                      type="text"
                      className="form-field"
                      placeholder="Your Name"
                      required
                      id="contact-name"
                    />
                    <input
                      type="email"
                      className="form-field"
                      placeholder="Your Email"
                      required
                      id="contact-email"
                    />
                  </div>

                  <input
                    type="text"
                    className="form-field"
                    placeholder="Subject"
                    required
                    id="contact-subject"
                  />

                  <textarea
                    className="form-field"
                    placeholder="Your Message"
                    required
                    id="contact-message"
                  />

                  <button
                    type="submit"
                    className="btn btn-primary contact-form__submit"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </SectionReveal>

            {/* Direct Links */}
            <SectionReveal direction="right" delay={200}>
              <div className="contact-links">
                <div className="contact-links__item">
                  <span className="contact-links__label">Email (Professional)</span>
                  <span className="contact-links__value">
                    <a href="mailto:hello@ishani.dev">hello@ishani.dev</a>
                  </span>
                </div>

                <div className="contact-links__item">
                  <span className="contact-links__label">Email (Creative/Art)</span>
                  <span className="contact-links__value">
                    <a href="mailto:ishani.iarts@gmail.com">ishani.iarts@gmail.com</a>
                  </span>
                </div>

                <div className="contact-links__item">
                  <span className="contact-links__label">Phone / WhatsApp</span>
                  <span className="contact-links__value">
                    <a href="tel:+94779097770">+94 77 909 7770</a>
                  </span>
                </div>

                <div className="contact-links__item">
                  <span className="contact-links__label">LinkedIn</span>
                  <span className="contact-links__value">
                    <a
                      href="https://www.linkedin.com/in/ishani-wijesooriya-55000a182/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ishani-wijesooriya-55000a182
                    </a>
                  </span>
                </div>

                <div className="contact-links__item">
                  <span className="contact-links__label">Creative Platforms</span>
                  <span className="contact-links__value" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <a
                      href="https://www.fiverr.com/inwijesuriya"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fiverr (inwijesuriya)
                    </a>
                    <a
                      href="https://www.behance.net/ishaniwijesooriya"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Behance (ishaniwijesooriya)
                    </a>
                    <a
                      href="https://dribbble.com/Ishani_"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dribbble (Ishani_)
                    </a>
                  </span>
                </div>

                <div className="contact-links__item">
                  <span className="contact-links__label">Location</span>
                  <span className="contact-links__value" style={{ color: 'var(--grey-body)' }}>
                    Rahathungoda, Hewahata, Sri Lanka
                  </span>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
}
