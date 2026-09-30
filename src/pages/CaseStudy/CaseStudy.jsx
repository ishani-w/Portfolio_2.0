import { useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SectionReveal from '../../components/SectionReveal/SectionReveal';
import ServiceBlock from '../../components/ServiceBlock/ServiceBlock';
import CircleArrow from '../../components/CircleArrow/CircleArrow';
import projects from '../../data/projects';
import './CaseStudy.css';

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const heroBgRef = useRef(null);

  // Parallax on case study hero image
  useEffect(() => {
    const el = heroBgRef.current;
    if (!el) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const offset = window.scrollY * 0.28;
        el.style.transform = `translateY(${offset}px) scale(1.08)`;
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!project) {
    return (
      <section className="section-pad" style={{ textAlign: 'center' }}>
        <div className="container">
          <h1 className="page-title">Project Not Found</h1>
          <p style={{ marginTop: '24px' }}>
            <Link to="/" className="link-gold">Return Home</Link>
          </p>
        </div>
      </section>
    );
  }

  // Find next project
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      {/* ===== Project Hero ===== */}
      <section className="case-hero" id="case-hero">
        <div className="case-hero__bg">
          <img
            ref={heroBgRef}
            src={project.heroImage}
            alt={project.title}
            style={{ transform: 'scale(1.08)', willChange: 'transform' }}
          />
        </div>
        <div className="case-hero__content container">
          <div>
            <SectionReveal direction="up" delay={200}>
              <h1 className="case-hero__title">{project.title}</h1>
            </SectionReveal>
            {project.behanceUrl && (
              <SectionReveal direction="up" delay={300}>
                <div className="case-hero__behance-link">
                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-behance-badge"
                  >
                    <span>View Project on Behance</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </SectionReveal>
            )}
          </div>
          <nav className="case-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {' › '}
            <Link to="/work">Work</Link>
            {' › '}
            <span className="current">{project.title}</span>
          </nav>
        </div>
      </section>

      {/* ===== Overview & Meta ===== */}
      <section className="case-meta section-pad" id="case-meta">
        <div className="container">
          <SectionReveal direction="up">
            <span className="eyebrow">Project Overview</span>
            <p className="text-block" style={{ marginTop: '24px', fontSize: '18px', lineHeight: '1.7', color: 'var(--white)' }}>
              {project.overview}
            </p>
          </SectionReveal>

          {/* Meta items stagger from left */}
          <div className="case-meta__grid" style={{ marginTop: '64px' }}>
            {Object.entries(project.meta).map(([key, value], i) => (
              <SectionReveal key={key} direction="up" delay={100 + i * 80}>
                <div className="case-meta__item">
                  <span className="case-meta__label">{key}</span>
                  <span className="case-meta__value">{value}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Problem Space ===== */}
      <section className="case-problem section-pad" id="case-problem">
        <div className="container">
          <SectionReveal direction="left">
            <div className="case-problem__content">
              <div className="case-problem__text">
                <span className="eyebrow">The Challenge</span>
                <h2 className="section-h2" style={{ marginTop: '16px' }}>
                  Understanding the Problem
                </h2>
                <p>{project.problem}</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== Process & Iteration ===== */}
      <section className="case-process section-pad" id="case-process">
        <div className="container">
          <SectionReveal direction="up">
            <span className="eyebrow">Process & Iteration</span>
            <h2 className="section-h2" style={{ marginTop: '16px', marginBottom: '48px' }}>
              The Design Journey
            </h2>
          </SectionReveal>

          <div className="case-process__grid">
            {project.processCaptions.map((caption, i) => (
              <SectionReveal key={i} direction="up" delay={i * 120}>
                <div className="case-process__item">
                  <span className="case-process__number">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="case-process__caption">{caption}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Solution ===== */}
      <section className="case-solution section-pad" id="case-solution">
        <div className="container">
          <SectionReveal direction="up">
            <span className="eyebrow">The Solution</span>
            <h2 className="section-h2" style={{ marginTop: '16px' }}>
              Final Design
            </h2>
            <p className="case-solution__text">{project.solution}</p>
          </SectionReveal>

          <SectionReveal direction="none" delay={200}>
            <div className="case-solution__image">
              <img src={project.heroImage} alt={`${project.title} — final design`} />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== Impact & Learnings ===== */}
      <section className="case-impact section-pad" id="case-impact">
        <div className="container">
          <SectionReveal direction="none">
            <div className="case-impact__quote">
              <span className="case-impact__quote-mark" aria-hidden="true">"</span>
              <p className="case-impact__quote-text">{project.impactQuote}</p>
            </div>
          </SectionReveal>

          <SectionReveal direction="up" delay={200}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '32px' }}>
              Key Outcomes
            </span>
            <div className="service-grid">
              {project.impacts.map((impact, i) => (
                <SectionReveal key={impact.number} direction="up" delay={i * 140}>
                  <ServiceBlock
                    number={impact.number}
                    title={impact.title}
                    description={impact.description}
                  />
                </SectionReveal>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== Behance External Showcase Banner ===== */}
      {project.behanceUrl && (
        <section className="case-behance-section section-pad" id="case-behance">
          <div className="container">
            <SectionReveal direction="up">
              <div className="case-behance-banner">
                <div className="case-behance-banner__content">
                  <span className="eyebrow">Original Portfolio Feature</span>
                  <h2 className="case-behance-banner__title">
                    View Complete Presentation on Behance
                  </h2>
                  <p className="case-behance-banner__desc">
                    Explore the full case study presentation on Behance, featuring high-resolution mockups, typographic systems, stationery suites, and detailed brand identity guidelines.
                  </p>
                </div>
                <div className="case-behance-banner__cta">
                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <span>Open on Behance ↗</span>
                  </a>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>
      )}

      {/* ===== Next Project ===== */}
      <section className="case-next section-pad" id="case-next">
        <div className="container">
          <SectionReveal direction="up">
            <Link to={`/work/${nextProject.slug}`} className="case-next__link">
              <span className="eyebrow case-next__label">Next Project</span>
              <h2 className="case-next__title">{nextProject.title}</h2>
              <CircleArrow label="View Case Study" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
