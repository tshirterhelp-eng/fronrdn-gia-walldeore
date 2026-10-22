# GIA The Wall Decor — website

React + Vite single-page site.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build && npm run preview   # production build at http://localhost:4173
```

## Before going live
- **Business facts** — fill in `src/data/business.js` from the Google Business Profile
  (phone, WhatsApp, address, hours, maps link, socials). Missing values show "To be confirmed"
  and no links are rendered for them.
- **Reviews** — add genuine Google reviews to `reviews` in `src/data/business.js`;
  the section stays hidden while the list is empty.
- **Collections & imagery** — `src/data/content.js`. Collection names are suggestions pending
  confirmation; images are crops of the supplied hero photographs. Replace them with GIA's own photography.
- **Enquiry form** — validates input. When `whatsapp` is set it opens WhatsApp with the message;
  otherwise it shows a "preview, not sent" notice (no backend yet).
