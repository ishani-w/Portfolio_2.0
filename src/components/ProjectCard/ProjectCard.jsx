import { Link } from 'react-router-dom';
import CircleArrow from '../CircleArrow/CircleArrow';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <Link to={`/work/${project.slug}`} className="project-card" id={`project-${project.slug}`}>
      <div className="project-card__image-wrap">
        <img src={project.heroImage} alt={project.title} loading="lazy" />
        <div className="project-card__overlay" />
      </div>
      <div className="project-card__body">
        <span className="project-card__category">{project.category}</span>
        <h3 className="project-card__title">{project.title}</h3>
        <div className="project-card__cta">
          <CircleArrow label="View Case Study" />
        </div>
      </div>
    </Link>
  );
}
