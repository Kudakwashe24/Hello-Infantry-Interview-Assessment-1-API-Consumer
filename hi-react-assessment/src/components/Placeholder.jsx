import './Placeholder.css';

/**
 * Placeholder component — replace this with your own card/list item component.
 *
 * Performance hints:
 * - Consider using React.memo() to prevent unnecessary re-renders
 * - Images should be lazy-loaded (hint: loading="lazy" or Intersection Observer)
 * - Think about what props actually affect the rendered output
 */
function Placeholder({ title = 'Item Title', subtitle = 'Subtitle' }) {
  return (
    <div className="placeholder-card">
      <div className="placeholder-image" />
      <div className="placeholder-content">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default Placeholder;
