import SectionReveal from '../../components/SectionReveal/SectionReveal';
import portrait from '../../assets/images/portrait.png';
import './About.css';

export default function About() {
  return (
    <>
      {/* ===== Hero / Portrait ===== */}
      <section className="about-hero" id="about-hero">
        <div className="container">
          <div className="about-hero__inner">
            {/* Portrait slides in from left */}
            <SectionReveal direction="left">
              <div className="about-hero__portrait">
                <img src={portrait} alt="Ishani Wijesooriya — UI/UX Engineer & Product Manager" />
              </div>
            </SectionReveal>

            {/* Info slides in from right */}
            <SectionReveal direction="right" delay={200}>
              <div className="about-hero__info">
                <span className="about-hero__role">UI/UX Engineer & Product Manager</span>
                <h1 className="about-hero__name">Ishani Wijesooriya</h1>
                <hr className="gold-rule gold-rule--animated about-hero__rule" />
                <p className="about-hero__intro">
                  I bridge the gap between user experience research, product strategy,
                  and modern frontend development — turning complex user needs into elegant,
                  high-performing digital products.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ===== Narrative ===== */}
      <section className="about-narrative section-pad" id="about-narrative">
        <div className="container">
          <SectionReveal direction="none">
            <div className="about-narrative__content">
              <span className="eyebrow" style={{ display: 'block', marginBottom: '32px' }}>
                My Story
              </span>
              <p>
                My passion lies at the sweet spot where user empathy, strategic product
                direction, and technology meet. With a dual background in UI/UX design
                and frontend engineering, I build products that are not only visually
                captivating but also technically robust and user-validated.
              </p>
              <p>
                As a Product Manager & UI/UX Engineer, I take products through their complete lifecycle —
                from early discovery sprints and user research to interactive wireframes, component design systems,
                and production-ready React code.
              </p>
              <p>
                I believe that great products require a holistic mindset: understanding business goals,
                advocating for the user, and crafting scalable UI codebases that enable teams to ship with confidence and speed.
              </p>
              <p>
                When I'm not designing or managing product roadmaps, you'll find me exploring design trends,
                experimenting with modern web interactions, and mentoring emerging designers and developers.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>


      {/* ===== Experience & Education ===== */}
      <section className="about-history section-pad" id="about-history">
        <div className="container">
          <div className="history-grid">
            {/* Work Experience Column */}
            <div className="history-col">
              <SectionReveal direction="up">
                <span className="eyebrow">Professional Timeline</span>
                <h2 className="section-h2 history-heading">Work Experience</h2>
              </SectionReveal>
              
              <div className="timeline">
                <div className="timeline-item animate-rise">
                  <span className="timeline-date">2020 – 2025</span>
                  <h3 className="timeline-title">UI/UX Engineer</h3>
                  <span className="timeline-company">OREL Corporation</span>
                  <p className="timeline-desc">Designing and building responsive, high-performing websites and digital platform solutions. Leading UI/UX design processes in Figma, implementing automated solutions, and managing digital products.</p>
                </div>
                <div className="timeline-item animate-rise">
                  <span className="timeline-date">2017 – 2023</span>
                  <h3 className="timeline-title">Freelance Creative Designer</h3>
                  <span className="timeline-company">Fiverr & Independent Contracts</span>
                  <p className="timeline-desc">UI/UX design for web/mobile, custom Mandala and vector drawing, brand identity design, and digital marketing post creation.</p>
                </div>
                <div className="timeline-item animate-rise">
                  <span className="timeline-date">2019 – 2020</span>
                  <h3 className="timeline-title">UI/UX Designer</h3>
                  <span className="timeline-company">Susila Holdings (Pvt) Ltd</span>
                  <p className="timeline-desc">Crafting user-friendly interfaces, mapping workflows, and creating engaging designs for web platforms.</p>
                </div>
                <div className="timeline-item animate-rise">
                  <span className="timeline-date">2017 – 2019</span>
                  <h3 className="timeline-title">UI/UX Designer</h3>
                  <span className="timeline-company">Inkspace (Pvt) Ltd</span>
                  <p className="timeline-desc">Interface design, user research, wireframing, and custom visual assets creation.</p>
                </div>
                <div className="timeline-item animate-rise">
                  <span className="timeline-date">2017 (6 Months)</span>
                  <h3 className="timeline-title">UI/UX Intern</h3>
                  <span className="timeline-company">AMKreation (Pte) Ltd</span>
                  <p className="timeline-desc">Practical training in graphic design, website layout creation, and learning production design workflows.</p>
                </div>
              </div>
            </div>

            {/* Education Column */}
            <div className="history-col">
              <SectionReveal direction="up" delay={100}>
                <span className="eyebrow">Academic Background</span>
                <h2 className="section-h2 history-heading">Education</h2>
              </SectionReveal>

              <div className="timeline">
                <div className="timeline-item animate-rise">
                  <span className="timeline-date">Graduated Feb 2019</span>
                  <h3 className="timeline-title">B.Sc. (Honours) in Information Technology</h3>
                  <span className="timeline-company">Sri Lanka Institute of Information Technology (SLIIT)</span>
                  <p className="timeline-desc">Specialized training in software engineering, database systems, UI/UX methodologies, and project management.</p>
                </div>
                <div className="timeline-item animate-rise">
                  <span className="timeline-date">Completed 2012</span>
                  <h3 className="timeline-title">Diploma in Information Technology (DETEC)</h3>
                  <span className="timeline-company">Esoft Metro Campus</span>
                  <p className="timeline-desc">Foundational coursework in computer science, system analysis, and software development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Tools & Technologies ===== */}
      <section className="about-tools section-pad" id="about-tools">
        <div className="container">
          <div className="tools-grid">
            <div className="tools-col">
              <SectionReveal direction="left">
                <span className="eyebrow">Design Tools</span>
                <h2 className="section-h2" style={{ marginBottom: '40px' }}>Creative Proficiencies</h2>
                
                <div className="skill-meters">
                  <div className="meter-item">
                    <div className="meter-header">
                      <span>Adobe Illustrator</span>
                      <span>95%</span>
                    </div>
                    <div className="meter-bar"><div className="meter-fill" style={{ width: '95%' }} /></div>
                  </div>
                  
                  <div className="meter-item">
                    <div className="meter-header">
                      <span>Adobe Photoshop</span>
                      <span>95%</span>
                    </div>
                    <div className="meter-bar"><div className="meter-fill" style={{ width: '95%' }} /></div>
                  </div>

                  <div className="meter-item">
                    <div className="meter-header">
                      <span>Figma</span>
                      <span>80%</span>
                    </div>
                    <div className="meter-bar"><div className="meter-fill" style={{ width: '80%' }} /></div>
                  </div>

                  <div className="meter-item">
                    <div className="meter-header">
                      <span>Sketch</span>
                      <span>80%</span>
                    </div>
                    <div className="meter-bar"><div className="meter-fill" style={{ width: '80%' }} /></div>
                  </div>

                  <div className="meter-item">
                    <div className="meter-header">
                      <span>Adobe XD</span>
                      <span>75%</span>
                    </div>
                    <div className="meter-bar"><div className="meter-fill" style={{ width: '75%' }} /></div>
                  </div>

                  <div className="meter-item">
                    <div className="meter-header">
                      <span>Adobe InDesign</span>
                      <span>75%</span>
                    </div>
                    <div className="meter-bar"><div className="meter-fill" style={{ width: '75%' }} /></div>
                  </div>
                </div>
              </SectionReveal>
            </div>

            <div className="tools-col">
              <SectionReveal direction="right" delay={150}>
                <span className="eyebrow">Frontend & Dev</span>
                <h2 className="section-h2" style={{ marginBottom: '40px' }}>Frontend & Tech Stack</h2>
                <p style={{ color: 'var(--grey-body)', marginBottom: '32px', lineHeight: '1.75' }}>
                  I build modular, accessible, and high-performing client architectures. I work fluently across design files, design tokens, and frontend codebases.
                </p>
                <div className="tech-chips">
                  {['React', 'Next.js', 'React Native', 'TypeScript', 'Node.js', 'D3.js', 'Monaco Editor', 'WebRTC', 'WordPress', 'HTML5', 'Vanilla CSS', 'Git & CI/CD'].map((tech) => (
                    <span key={tech} className="tech-chip">{tech}</span>
                  ))}
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Resume CTA ===== */}
      <section className="about-resume section-pad" id="about-resume">
        <div className="container">
          <SectionReveal direction="up">
            <div className="about-resume__content">
              <p className="about-resume__text">
                Interested in working together? Download my resume for a
                complete overview of my experience and capabilities.
              </p>
              <button className="btn btn-primary">Download CV</button>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
