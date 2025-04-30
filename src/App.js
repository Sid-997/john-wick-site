import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Gallery from './components/Gallery';
import About from './components/About';
import Hero from './components/HeroSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
