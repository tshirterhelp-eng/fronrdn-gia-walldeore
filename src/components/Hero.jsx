import Arrow from './Arrow.jsx';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <picture className="hero__media">
        <source
          media="(max-width: 800px) and (orientation: portrait)"
          srcSet="/images/hero-living-room-mobile.webp"
          width="941"
          height="1672"
        />
        <img
          src="/images/hero-living-room.webp"
          alt="A warmly lit living room with an illuminated sculptural wall artwork of a golden tree, mountains, lake and moon above a cream sofa"
          width="1672"
          height="941"
          fetchpriority="high"
        />
      </picture>
      <div className="hero__shade" aria-hidden="true" />

      <div className="hero__content container">
        <p className="eyebrow eyebrow--light hero__eyebrow">Artistry for your interiors</p>
        <h1 id="hero-title" className="hero__title">
          <span className="hero__line">Art That</span>
          <span className="hero__line hero__line--accent">Transforms</span>
          <span className="hero__line">Spaces.</span>
        </h1>
        <p className="hero__lede">
          Discover distinctive wall decor that brings warmth, character, and timeless elegance to your space.
        </p>
        <div className="hero__actions">
          <a href="#collections" className="btn btn--dark">
            Explore Collection <Arrow />
          </a>
          <a href="#about" className="link-arrow link-arrow--light">
            Discover GIA <Arrow />
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to discover more">
        <span>Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
