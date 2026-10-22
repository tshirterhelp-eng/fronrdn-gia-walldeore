import { collections } from '../data/content.js';
import Arrow from './Arrow.jsx';

export default function Collections({ onExplore }) {
  return (
    <section id="collections" className="collections section" aria-labelledby="collections-title">
      <div className="container">
        <header className="section-head">
          <div>
            <p className="eyebrow reveal">Curated collections</p>
            <h2 id="collections-title" className="display reveal">
              Pieces with a <em>presence.</em>
            </h2>
          </div>
          <p className="section-head__aside body reveal">
            A considered edit of wall decor, each piece chosen for how it changes the feeling of a room.
          </p>
        </header>

        <div className="collections__grid">
          {collections.map((c) => (
            <article key={c.id} className={`collection collection--${c.layout} reveal`}>
              <a
                href="#contact"
                className="collection__link"
                onClick={() => onExplore(c.title)}
                aria-label={`Explore ${c.title} — enquire about this collection`}
              >
                <div className="collection__media img-frame">
                  <img src={c.image} alt={c.alt} loading="lazy" />
                </div>
                <div className="collection__body">
                  <span className="collection__index">{c.index}</span>
                  <div>
                    <h3 className="collection__title">{c.title}</h3>
                    <p className="collection__desc">{c.description}</p>
                    <span className="link-arrow">Explore <Arrow /></span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
