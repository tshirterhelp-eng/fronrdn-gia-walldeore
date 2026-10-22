import { navLinks } from '../data/content.js';
import { business, telHref } from '../data/business.js';
import Wordmark from './Wordmark.jsx';

const SOCIAL_LABELS = { instagram: 'Instagram', facebook: 'Facebook', pinterest: 'Pinterest', youtube: 'YouTube' };

export default function Footer() {
  const socials = Object.entries(business.social).filter(([, url]) => url);
  const tel = telHref(business.phone);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Wordmark className="wordmark--footer" />
            <p className="body body--light">Wall decor that brings warmth, character and timeless elegance to your interiors.</p>
          </div>
          <nav className="footer__col" aria-label="Footer">
            <p className="footer__label">Explore</p>
            {navLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>
          <div className="footer__col">
            <p className="footer__label">Contact</p>
            {tel ? <a href={tel}>{business.phone}</a> : null}
            {business.email ? <a href={`mailto:${business.email}`}>{business.email}</a> : null}
            {business.addressLines ? business.addressLines.map((l) => <span key={l}>{l}</span>) : null}
            {!tel && !business.email && !business.addressLines && <span className="footer__muted">Details to be confirmed</span>}
            <a href="#contact">Send an enquiry</a>
          </div>
          {socials.length > 0 && (
            <div className="footer__col">
              <p className="footer__label">Follow</p>
              {socials.map(([k, url]) => (
                <a key={k} href={url} target="_blank" rel="noopener noreferrer">{SOCIAL_LABELS[k]}</a>
              ))}
            </div>
          )}
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} GIA The Wall Decor. All rights reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
