import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Import HomePage-components//
import Navbar from './components/navbar/Navbar';
import Carousel from '../src/components/carousel/Carousel';
import Solutions from '../src/components/solutions/Solutions';
import Comparison from './components/comparison/Comparison';
import Blog from './components/blog/Blog';
import Testimony from './components/testimony/Testimony';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';

//Import Pages//
import Owners from './pages/owners/Owners';
import WhoWeAre from './pages/whoweare/WhoWeAre';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/testimony" element={<Testimony />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/footer" element={<Footer />} />

        <Route path="/owners" element={<Owners />} />
        <Route path="/whoweare" element={<WhoWeAre />} />
      </Routes>
    </Router>
  );
}

const Home = () => (
  <>
    <Navbar/>
    <Carousel id=""/>
    <Solutions id="services"/>
    <Comparison />
    <Projects />
    <Blog />
    <Testimony />
    <Footer />
  </>
);

export default App;
