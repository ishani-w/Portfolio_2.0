/**
 * SplitText — animates text by splitting into individual characters,
 * each with a staggered `charReveal` CSS animation.
 *
 * @param {string} text - the string to animate
 * @param {string} tag - the HTML element to wrap each line (default: 'span')
 * @param {number} baseDelay - initial delay in ms before first char (default: 0)
 * @param {number} charDelay - stagger delay per character in ms (default: 28)
 */
export default function SplitText({ text, tag: Tag = 'span', baseDelay = 0, charDelay = 28 }) {
  let charIndex = 0;

  return (
    <Tag
      style={{
        display: 'inline-block',
        verticalAlign: 'bottom',
      }}
    >
      {text.split('').map((char, i) => {
        const delay = baseDelay + charIndex++ * charDelay;
        return (
          <span
            key={i}
            className="split-text__char"
            style={{
              animationDelay: `${delay}ms`,
              display: 'inline-block',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
    </Tag>
  );
}

