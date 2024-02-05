import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import HomePage-components //
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousel/Carousel';
import Solutions from './components/solutions/Solutions';
import Comparison from './components/comparison/Comparison';
import Blog from './components/blog/Blog';
import Testimony from './components/testimony/Testimony';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';


import Owners from './pages/owners/Owners';
import WhoWeAre from './pages/whoweare/WhoWeAre';
import Blogs from './pages/blogs/Blogs';



const Home = () => (
  <>
    <Navbar />
    <Carousel />
    <Solutions />
    <Comparison />
    <Projects />
    <Blog />
    <Testimony />
    <Footer />
  </>
);

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
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

export default App;
