import { useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Intro from './components/Intro.jsx';
import Collections from './components/Collections.jsx';
import OurWork from './components/OurWork.jsx';
import Showcase from './components/Showcase.jsx';
import Inspiration from './components/Inspiration.jsx';
import WhyGia from './components/WhyGia.jsx';
import Reviews from './components/Reviews.jsx';
import Contact from './components/Contact.jsx';
import Closing from './components/Closing.jsx';
import Footer from './components/Footer.jsx';
import { useReveal } from './hooks/useReveal.js';

export default function App() {
  // Collection "Explore" links pre-fill the enquiry message with the chosen collection.
  const [interest, setInterest] = useState('');
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Intro />
        <Collections onExplore={setInterest} />
        <OurWork />
        <Showcase />
        <Inspiration />
        <WhyGia />
        <Reviews />
        <Contact interest={interest} />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
