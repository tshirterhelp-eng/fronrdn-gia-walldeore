export default function Wordmark({ className = '' }) {
  return (
    <a href="#home" className={`wordmark ${className}`} aria-label="GIA The Wall Decor — home">
      <span className="wordmark__gia">GIA</span>
      <span className="wordmark__rule" aria-hidden="true" />
      <span className="wordmark__sub">The Wall Decor</span>
    </a>
  );
}
