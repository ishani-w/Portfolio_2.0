import './ServiceBlock.css';

export default function ServiceBlock({ number, title, description }) {
  return (
    <div className="service-block">
      <span className="service-block__number">{number}</span>
      <h3 className="service-block__title">{title}</h3>
      <p className="service-block__desc">{description}</p>
    </div>
  );
}
