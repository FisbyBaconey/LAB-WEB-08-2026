import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen font-sans bg-[#FFF4E0] text-black selection:bg-[#FF90E8] selection:text-black">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;