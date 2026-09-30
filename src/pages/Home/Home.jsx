import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionReveal from '../../components/SectionReveal/SectionReveal';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import CircleArrow from '../../components/CircleArrow/CircleArrow';
import SplitText from '../../components/SplitText/SplitText';
import LogoCarousel from '../../components/LogoCarousel/LogoCarousel';
import projects from '../../data/projects';
import heroBg from '../../assets/images/hero-bg.png';
import './Home.css';

export default function Home() {
  const heroBgRef = useRef(null);

  // Parallax on hero background
  useEffect(() => {
    const el = heroBgRef.current;
    if (!el) return;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const offset = window.scrollY * 0.35;
        el.style.transform = `translateY(${offset}px) scale(1.1)`;
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Vertical rail */}
      <div className="home__rail" aria-hidden="true">
        Ishani Wijesooriya · Portfolio · 2026
      </div>

      {/* ===== Hero ===== */}
      <section className="home-hero" id="hero">
        <div className="home-hero__bg">
          <img ref={heroBgRef} src={heroBg} alt="" role="presentation" />
        </div>

        <div className="home-hero__content">
          {/* Character-split animated headline */}
          <h1 className="home-hero__title">
            <div className="home-hero__title-line">
              <SplitText text="Designing intuitive products." tag="span" baseDelay={100} charDelay={25} />
            </div>
            <div className="home-hero__title-line">
              <SplitText text="Building seamless experiences." tag="span" baseDelay={850} charDelay={25} />
            </div>
          </h1>

          <SectionReveal delay={1750}>
            <p className="home-hero__subtitle">
              UI/UX Engineer & Product Manager — crafting data-informed product strategies
              and building polished, accessible web & mobile applications.
            </p>
          </SectionReveal>

          <SectionReveal delay={1950}>
            <div className="home-hero__cta">
              <Link to="/work" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
            </div>
          </SectionReveal>
        </div>

        <div className="home-hero__scroll" aria-hidden="true">
          <span>Scroll</span>
          <div className="home-hero__scroll-line" />
        </div>
      </section>

      {/* ===== Vision Statement ===== */}
      <section className="home-vision section-pad" id="vision">
        <div className="container">
          <SectionReveal direction="none">
            <div className="home-vision__content">
              <span className="eyebrow home-vision__eyebrow">The Philosophy</span>
              <p className="home-vision__statement">
                Great digital products stand at the intersection of empathetic user research,
                strategic product vision, and pixel-perfect frontend execution.
              </p>
              <hr className="gold-rule gold-rule--animated home-vision__rule" />
            </div>
          </SectionReveal>
        </div>
      </section>


      {/* ===== Selected Work ===== */}
      <section className="home-work section-pad" id="selected-work">
        <div className="container">
          <SectionReveal direction="left">
            <div className="home-work__header">
              <div>
                <span className="eyebrow">Selected Work</span>
                <h2 className="section-h2" style={{ marginTop: '16px' }}>
                  Case Studies
                </h2>
              </div>
              <CircleArrow label="View All" to="/work" />
            </div>
          </SectionReveal>

          <div className="project-grid project-grid--asymmetric">
            {projects.map((project, i) => (
              <SectionReveal key={project.id} delay={i * 180} direction="up">
                <ProjectCard project={project} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Tools & Technologies Marquee ===== */}
      <LogoCarousel />
    </>
  );
}
