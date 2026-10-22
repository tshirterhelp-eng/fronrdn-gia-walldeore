export default function Intro() {
  return (
    <section id="about" className="intro section" aria-labelledby="intro-title">
      <div className="container intro__grid">
        <figure className="intro__main reveal">
          <div className="img-frame">
            <img
              src="/images/room-lounge.webp"
              alt="Cream sectional sofa and bronze coffee table bathed in warm light"
              loading="lazy"
              width="1100"
              height="480"
            />
          </div>
          <figcaption className="caption">The living room, at golden hour</figcaption>
        </figure>

        <div className="intro__text">
          <p className="eyebrow reveal">The art of interiors</p>
          <h2 id="intro-title" className="display reveal">
            A little detail.
            <br />
            <em>A different feeling.</em>
          </h2>
          <span className="rule reveal" aria-hidden="true" />
          <p className="body-lg reveal">
            The right piece of wall decor does more than fill a wall. It brings balance, creates
            atmosphere, and gives a space its own character.
          </p>

          <figure className="intro__detail reveal">
            <div className="img-frame">
              <img
                src="/images/art-tree.webp"
                alt="Close detail of a golden sculptural tree, softly backlit"
                loading="lazy"
                width="400"
                height="440"
              />
            </div>
            <figcaption className="caption">
              <span className="caption__num">—</span> Light, layer and form
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
