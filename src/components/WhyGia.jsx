import { values } from '../data/content.js';

export default function WhyGia() {
  return (
    <section className="why section" aria-labelledby="why-title">
      <div className="container why__grid">
        <div className="why__head">
          <p className="eyebrow reveal">Why GIA</p>
          <h2 id="why-title" className="display reveal">
            Chosen with care,
            <br />
            <em>made to be lived with.</em>
          </h2>
          <figure className="why__image reveal">
            <div className="img-frame">
              <img src="/images/room-shelf.webp" alt="Softly lit floating shelves styled with plants and bronze vessels" loading="lazy" />
            </div>
          </figure>
        </div>
        <ol className="why__list">
          {values.map((v, i) => (
            <li key={v.title} className="why__item reveal">
              <span className="why__num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="why__title">{v.title}</h3>
                <p className="body">{v.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
