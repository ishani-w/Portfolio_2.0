import { useScrollProgress } from '../../hooks/useAnimation';
import './ScrollProgress.css';

export default function ScrollProgress() {
  const barRef = useScrollProgress();

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div ref={barRef} className="scroll-progress__bar" />
    </div>
  );
}
