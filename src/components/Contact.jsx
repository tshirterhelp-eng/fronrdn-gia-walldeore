import { useEffect, useState } from 'react';
import { business, telHref, whatsappHref } from '../data/business.js';
import Arrow from './Arrow.jsx';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[\d\s()-]{8,18}$/;

function validate({ name, contact, message }) {
  const errors = {};
  if (name.trim().length < 2) errors.name = 'Please share your name.';
  const c = contact.trim();
  if (!c) errors.contact = 'Please add a phone number or email so we can reply.';
  else if (!EMAIL_RE.test(c) && !(PHONE_RE.test(c) && c.replace(/\D/g, '').length >= 8))
    errors.contact = 'Please enter a valid phone number or email address.';
  if (message.trim().length < 10) errors.message = 'Tell us a little about your space (at least 10 characters).';
  return errors;
}

const Pending = () => <span className="contact__pending">To be confirmed</span>;

export default function Contact({ interest }) {
  const [values, setValues] = useState({ name: '', contact: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (interest) {
      setValues((v) => ({ ...v, message: `I'd love to know more about your ${interest} collection.` }));
      setStatus(null);
    }
  }, [interest]);

  const onChange = (e) => {
    const next = { ...values, [e.target.name]: e.target.value };
    setValues(next);
    if (touched[e.target.name]) setErrors(validate(next));
  };
  const onBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setErrors(validate(values));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched({ name: true, contact: true, message: true });
    if (Object.keys(errs).length) {
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    const text = `Hello GIA, I'm ${values.name.trim()} (${values.contact.trim()}).\n\n${values.message.trim()}`;
    const wa = whatsappHref(business.whatsapp, text);
    if (wa) {
      window.open(wa, '_blank', 'noopener');
      setStatus('whatsapp');
    } else {
      // No enquiry backend is configured yet: this is a demo submission.
      setStatus('demo');
    }
    setValues({ name: '', contact: '', message: '' });
    setTouched({});
  };

  const tel = telHref(business.phone);
  const wa = whatsappHref(business.whatsapp, 'Hello GIA, I would like to enquire about your wall decor.');
  const fieldProps = (name) => ({
    id: `f-${name}`,
    name,
    value: values[name],
    onChange,
    onBlur,
    'aria-invalid': touched[name] && errors[name] ? true : undefined,
    'aria-describedby': touched[name] && errors[name] ? `f-${name}-err` : undefined,
  });
  const err = (name) =>
    touched[name] && errors[name] ? (
      <span className="field__error" id={`f-${name}-err`} role="alert">{errors[name]}</span>
    ) : null;

  return (
    <section id="contact" className="contact section" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__info">
          <p className="eyebrow reveal">Visit or contact GIA</p>
          <h2 id="contact-title" className="display reveal">
            Let's find the right piece <em>for your space.</em>
          </h2>
          <p className="body-lg reveal">
            Have a design in mind? Get in touch with GIA to explore the possibilities.
          </p>

          <dl className="contact__details reveal">
            <div>
              <dt>Telephone</dt>
              <dd>{tel ? <a href={tel}>{business.phone}</a> : <Pending />}</dd>
            </div>
            <div>
              <dt>WhatsApp</dt>
              <dd>{wa ? <a href={wa} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a> : <Pending />}</dd>
            </div>
            <div>
              <dt>Showroom</dt>
              <dd>
                {business.addressLines ? (
                  <address>{business.addressLines.map((l) => <span key={l}>{l}</span>)}</address>
                ) : <Pending />}
                {business.mapsUrl && (
                  <a className="link-arrow" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
                    Get directions <Arrow />
                  </a>
                )}
              </dd>
            </div>
            <div>
              <dt>Opening hours</dt>
              <dd>
                {business.hours ? (
                  <ul className="contact__hours">
                    {business.hours.map((h) => <li key={h.days}><span>{h.days}</span><span>{h.time}</span></li>)}
                  </ul>
                ) : <Pending />}
              </dd>
            </div>
          </dl>
        </div>

        <form className="contact__form reveal" onSubmit={onSubmit} noValidate aria-describedby="form-note">
          <p className="contact__form-title">Send an enquiry</p>
          <div className="field">
            <label htmlFor="f-name">Name</label>
            <input type="text" autoComplete="name" {...fieldProps('name')} />
            {err('name')}
          </div>
          <div className="field">
            <label htmlFor="f-contact">Phone or email</label>
            <input type="text" autoComplete="email" inputMode="email" {...fieldProps('contact')} />
            {err('contact')}
          </div>
          <div className="field">
            <label htmlFor="f-message">Message</label>
            <textarea rows="4" {...fieldProps('message')} placeholder="Tell us about your wall, room and the feeling you'd like." />
            {err('message')}
          </div>
          <button type="submit" className="btn btn--dark btn--block">
            Send Enquiry <Arrow />
          </button>
          <div className="contact__status" aria-live="polite">
            {status === 'demo' && (
              <p className="contact__notice">
                Thank you — your details look good. <strong>This form is a preview and has not sent a message yet.</strong>{' '}
                Please contact GIA directly by phone or WhatsApp.
              </p>
            )}
            {status === 'whatsapp' && (
              <p className="contact__notice">Thank you — WhatsApp has opened with your message ready to send.</p>
            )}
          </div>
          <p id="form-note" className="contact__fine">We'll only use your details to reply to this enquiry.</p>
        </form>
      </div>
    </section>
  );
}
