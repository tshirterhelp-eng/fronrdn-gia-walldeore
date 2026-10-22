import { useEffect, useState } from 'react';
import { navLinks } from '../data/content.js';
import Wordmark from './Wordmark.jsx';
import Arrow from './Arrow.jsx';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner">
        <Wordmark />
        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="nav__cta">
          Enquire Now <Arrow />
        </a>
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span />
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" aria-hidden={!open} inert={open ? undefined : ''}>
        <nav aria-label="Mobile">
          {navLinks.map((l, i) => (
            <a key={l.href} href={l.href} onClick={close} style={{ '--i': i }}>
              <span className="mobile-menu__num">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn--dark mobile-menu__cta" onClick={close}>
          Enquire Now <Arrow />
        </a>
      </div>
    </header>
  );
}
