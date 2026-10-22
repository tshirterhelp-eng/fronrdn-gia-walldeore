import { useCallback, useEffect, useRef, useState } from 'react';
import { projects } from '../data/content.js';
import Arrow from './Arrow.jsx';

export default function OurWork() {
  // Flat list of every image so the lightbox can step through a whole project and beyond.
  const images = projects.flatMap((p) =>
    [{ ...p.cover, caption: p.title }, ...p.details.map((d) => ({ ...d, caption: `${p.title} — ${d.caption}` }))]
  );
  const [active, setActive] = useState(null);
  const closeRef = useRef(null);
  const lastTrigger = useRef(null);

  const open = (src, e) => {
    lastTrigger.current = e.currentTarget;
    setActive(images.findIndex((img) => img.src === src));
  };
  const close = useCallback(() => {
    setActive(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback((dir) => setActive((i) => (i + dir + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (active === null) return undefined;
    document.body.classList.add('menu-open');
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [active, close, step]);

  const item = active !== null ? images[active] : null;

  return (
    <section id="work" className="work section" aria-labelledby="work-title">
      <div className="container">
        <header className="section-head">
          <div>
            <p className="eyebrow reveal">Our work</p>
            <h2 id="work-title" className="display reveal">
              Walls we've <em>brought to life.</em>
            </h2>
          </div>
          <p className="section-head__aside body reveal">
            A closer look at GIA pieces in place: the room they transform, and the details that
            make them worth a second look.
          </p>
        </header>

        <div className="work__list">
          {projects.map((p, i) => (
            <article key={p.id} className={`project ${i % 2 ? 'project--flip' : ''}`}>
              <button type="button" className="project__cover reveal" onClick={(e) => open(p.cover.src, e)} aria-label={`View larger: ${p.title}`}>
                <div className="img-frame">
                  <img src={p.cover.src} alt={p.cover.alt} loading="lazy" />
                </div>
                <span className="project__zoom" aria-hidden="true">View</span>
              </button>

              <div className="project__body">
                <span className="project__num reveal">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="project__title reveal">{p.title}</h3>
                <p className="body reveal">{p.summary}</p>
                <dl className="project__meta reveal">
                  {p.meta.map((m) => (
                    <div key={m.label}>
                      <dt>{m.label}</dt>
                      <dd>{m.value}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="project__details reveal" role="list">
                  {p.details.map((d) => (
                    <li key={d.src}>
                      <button type="button" onClick={(e) => open(d.src, e)} aria-label={`View detail: ${d.caption}`}>
                        <div className="img-frame">
                          <img src={d.src} alt={d.alt} loading="lazy" />
                        </div>
                        <span>{d.caption}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="work__cta reveal">
          <p>
            Picturing something similar for your wall? <em>Send us a photo of your space.</em>
          </p>
          <a href="#contact" className="link-arrow">
            Discuss your wall <Arrow />
          </a>
        </div>
      </div>

      {item && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.caption} onClick={close}>
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img src={item.src} alt={item.alt} />
            <figcaption>
              <span>{item.caption}</span>
              <span className="lightbox__count">
                {String(active + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
              </span>
            </figcaption>
          </figure>
          <button type="button" ref={closeRef} className="lightbox__close" onClick={close} aria-label="Close">Close</button>
          <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous image">←</button>
          <button type="button" className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next image">→</button>
        </div>
      )}
    </section>
  );
}
