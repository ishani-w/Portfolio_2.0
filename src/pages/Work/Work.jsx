import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionReveal from '../../components/SectionReveal/SectionReveal';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects, { corporateProjects } from '../../data/projects';
import digitalArts from '../../data/digitalArts';
import './Work.css';

export default function Work() {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'case-studies', 'corporate', 'digital-art'
  const [artSubFilter, setArtSubFilter] = useState('all'); // 'all', '3d', 'illustration'

  const filteredArts = activeTab === 'digital-art' && artSubFilter !== 'all'
    ? digitalArts.filter((art) => art.type === artSubFilter)
    : digitalArts;

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="work-hero" id="work-hero">
        <div className="container">
          <SectionReveal>
            <div className="work-hero__content">
              <div>
                <span className="eyebrow" style={{ display: 'block', marginBottom: '16px' }}>
                  Portfolio & Creative Works
                </span>
                <h1 className="page-title">Selected Work & Digital Arts</h1>
              </div>
              <nav className="work-hero__breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                {' › '}
                <span className="current">Work</span>
              </nav>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== Filter Tabs ===== */}
      <section className="work-filter-section">
        <div className="container">
          <div className="work-tabs-container">
            <div className="work-tabs">
              <button
                className={`work-tab ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All Works ({projects.length + corporateProjects.length + digitalArts.length})
              </button>
              <button
                className={`work-tab ${activeTab === 'case-studies' ? 'active' : ''}`}
                onClick={() => setActiveTab('case-studies')}
              >
                Case Studies ({projects.length})
              </button>
              <button
                className={`work-tab ${activeTab === 'corporate' ? 'active' : ''}`}
                onClick={() => setActiveTab('corporate')}
              >
                Client Projects ({corporateProjects.length})
              </button>
              <button
                className={`work-tab ${activeTab === 'digital-art' ? 'active' : ''}`}
                onClick={() => setActiveTab('digital-art')}
              >
                Digital Arts & Visuals ({digitalArts.length})
              </button>
            </div>

            {/* Sub-filters for Digital Arts */}
            {activeTab === 'digital-art' && (
              <div className="art-sub-filters">
                <button
                  className={`sub-filter ${artSubFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setArtSubFilter('all')}
                >
                  All Visuals
                </button>
                <button
                  className={`sub-filter ${artSubFilter === '3d' ? 'active' : ''}`}
                  onClick={() => setArtSubFilter('3d')}
                >
                  3D Concepts
                </button>
                <button
                  className={`sub-filter ${artSubFilter === 'illustration' ? 'active' : ''}`}
                  onClick={() => setArtSubFilter('illustration')}
                >
                  Illustrations & Vectors
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== Project Grid (Case Studies) ===== */}
      {(activeTab === 'all' || activeTab === 'case-studies') && (
        <section className="work-grid-section section-pad" id="work-grid">
          <div className="container">
            {activeTab === 'all' && (
              <h2 className="work-section-heading">UX & Product Case Studies</h2>
            )}
            <div className="project-grid">
              {projects.map((project, i) => (
                <SectionReveal key={project.id} delay={i * 150}>
                  <ProjectCard project={project} />
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== Corporate & Client Projects ===== */}
      {(activeTab === 'all' || activeTab === 'corporate') && (
        <section className="corp-projects-section section-pad" id="corporate-projects">
          <div className="container">
            <SectionReveal direction="up">
              <div className="corp-projects__header">
                {activeTab === 'all' ? (
                  <h2 className="work-section-heading">Corporate & Client Projects</h2>
                ) : (
                  <div>
                    <span className="eyebrow">Enterprise & Freelance</span>
                    <h2 className="section-h2" style={{ marginTop: '12px', marginBottom: '24px' }}>
                      Corporate Websites & Portal Systems
                    </h2>
                  </div>
                )}
              </div>
            </SectionReveal>

            <div className="corp-grid">
              {corporateProjects.map((project, i) => (
                <SectionReveal key={project.id} delay={i * 80} direction="up">
                  <article className="corp-card">
                    <div className="corp-card__header">
                      <span className="corp-card__year">{project.year}</span>
                      <span className="corp-card__type">{project.type}</span>
                    </div>
                    <h3 className="corp-card__title">{project.title}</h3>
                    <p className="corp-card__details">{project.details}</p>
                  </article>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== Digital Arts Gallery ===== */}
      {(activeTab === 'all' || activeTab === 'digital-art') && (
        <section className="digital-arts-section section-pad" id="digital-arts">
          <div className="container">
            <SectionReveal direction="up">
              <div className="digital-arts__header">
                <div>
                  <span className="eyebrow">Visual Explorations</span>
                  <h2 className="section-h2" style={{ marginTop: '12px' }}>
                    Digital Arts & 3D Concepts
                  </h2>
                </div>
                <p className="digital-arts__subtext">
                  A curated collection of standalone digital artwork, 3D lighting studies, and vector illustrations.
                </p>
              </div>
            </SectionReveal>

            <div className="digital-arts__grid">
              {filteredArts.map((art, i) => (
                <SectionReveal key={art.id} delay={i * 120} direction="up">
                  <article className="art-card">
                    <div className="art-card__image">
                      <img src={art.image} alt={art.title} />
                      <div className="art-card__badge">{art.category}</div>
                    </div>
                    <div className="art-card__info">
                      <div className="art-card__meta">
                        <span className="art-card__year">{art.year}</span>
                      </div>
                      <h3 className="art-card__title">{art.title}</h3>
                      <p className="art-card__description">{art.description}</p>
                    </div>
                  </article>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

