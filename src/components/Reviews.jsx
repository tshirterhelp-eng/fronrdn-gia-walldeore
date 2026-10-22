import { reviews } from '../data/business.js';

// Renders only genuine reviews copied from GIA's Google Business Profile.
// With no verified reviews the section is omitted entirely.
export default function Reviews() {
  if (!reviews.length) return null;
  return (
    <section className="reviews section" aria-labelledby="reviews-title">
      <div className="container">
        <header className="section-head section-head--center">
          <p className="eyebrow reveal">Kind words</p>
          <h2 id="reviews-title" className="display reveal">From our <em>clients.</em></h2>
        </header>
        <div className="reviews__list">
          {reviews.map((r) => (
            <figure key={r.author + r.text.slice(0, 20)} className="review reveal">
              <span className="review__mark" aria-hidden="true">“</span>
              <blockquote>{r.text}</blockquote>
              <figcaption>
                <span>{r.author}</span>
                {r.rating ? (
                  <span className="review__rating" aria-label={`Rated ${r.rating} out of 5 on Google`}>
                    {'★'.repeat(Math.round(r.rating))} <small>Google</small>
                  </span>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
