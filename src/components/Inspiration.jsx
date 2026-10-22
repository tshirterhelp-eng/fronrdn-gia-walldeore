import { useCallback, useEffect, useRef, useState } from 'react';
import { inspiration } from '../data/content.js';

export default function Inspiration() {
  const [active, setActive] = useState(null);
  const closeRef = useRef(null);
  const lastTrigger = useRef(null);

  const open = (i, e) => {
    lastTrigger.current = e.currentTarget;
    setActive(i);
  };
  const close = useCallback(() => {
    setActive(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback(
    (dir) => setActive((i) => (i + dir + inspiration.length) % inspiration.length),
    []
  );

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

  const item = active !== null ? inspiration[active] : null;

  return (
    <section id="inspiration" className="inspiration section" aria-labelledby="inspiration-title">
      <div className="container">
        <header className="section-head section-head--center">
          <p className="eyebrow reveal">Inspiration</p>
          <h2 id="inspiration-title" className="display reveal">
            Ideas for <em>living beautifully.</em>
          </h2>
        </header>

        <ul className="gallery" role="list">
          {inspiration.map((img, i) => (
            <li key={img.src} className={`gallery__item gallery__item--${img.shape} reveal`}>
              <button type="button" className="gallery__btn" onClick={(e) => open(i, e)} aria-label={`View larger: ${img.caption}`}>
                <div className="img-frame">
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </div>
                <span className="gallery__caption">{img.caption}</span>
              </button>
            </li>
          ))}
        </ul>
        <p className="gallery__note">Styling inspiration. Images shown are for reference.</p>
      </div>

      {item && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.caption} onClick={close}>
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img src={item.src} alt={item.alt} />
            <figcaption>
              <span>{item.caption}</span>
              <span className="lightbox__count">
                {String(active + 1).padStart(2, '0')} / {String(inspiration.length).padStart(2, '0')}
              </span>
            </figcaption>
          </figure>
          <button type="button" ref={closeRef} className="lightbox__close" onClick={close} aria-label="Close">
            Close
          </button>
          <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous image">
            ←
          </button>
          <button type="button" className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next image">
            →
          </button>
        </div>
      )}
    </section>
  );
}
