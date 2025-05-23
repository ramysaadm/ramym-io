import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Innovations from './components/Innovations';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Expertise />
      <Innovations />
      <Contact />
      <Footer />
    </div>
  );
}
