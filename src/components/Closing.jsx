import Arrow from './Arrow.jsx';

export default function Closing() {
  return (
    <section className="closing" aria-labelledby="closing-title">
      <img className="closing__bg" src="/images/art-full.webp" alt="" loading="lazy" aria-hidden="true" />
      <div className="closing__shade" aria-hidden="true" />
      <div className="container closing__content">
        <p className="eyebrow eyebrow--light reveal">GIA The Wall Decor</p>
        <h2 id="closing-title" className="display display--xl display--light reveal">
          Bring your space <em>to life.</em>
        </h2>
        <p className="body body--light reveal">
          Discover wall decor that feels considered, distinctive, and entirely your own.
        </p>
        <a href="#contact" className="btn btn--ivory reveal">
          Start an Enquiry <Arrow />
        </a>
      </div>
    </section>
  );
}
