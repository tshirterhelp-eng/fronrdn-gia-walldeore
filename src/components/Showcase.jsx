import { showcase } from '../data/content.js';

export default function Showcase() {
  const { main, details } = showcase;
  return (
    <section className="showcase section" aria-labelledby="showcase-title">
      <div className="container showcase__grid">
        <div className="showcase__intro">
          <p className="eyebrow eyebrow--brass reveal">Signature wall art</p>
          <h2 id="showcase-title" className="display display--light reveal">
            Make your walls <em>unforgettable.</em>
          </h2>
          <p className="body body--light reveal">
            Light is part of the composition. Layered silhouettes, metallic leaf and a soft halo
            around the edge turn a single wall into the quiet centre of the room — by day a
            sculpture, by evening a source of warmth.
          </p>
        </div>

        <figure className="showcase__main reveal">
          <div className="img-frame">
            <img src={main.src} alt={main.alt} loading="lazy" />
          </div>
          <figcaption className="caption caption--light">
            <span className="caption__num">I.</span> {main.caption}
          </figcaption>
        </figure>

        {details.map((d, i) => (
          <figure key={d.src} className={`showcase__detail showcase__detail--${i + 1} reveal`}>
            <div className="img-frame">
              <img src={d.src} alt={d.alt} loading="lazy" />
            </div>
            <figcaption className="caption caption--light">
              <span className="caption__num">{['II.', 'III.'][i]}</span> {d.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
