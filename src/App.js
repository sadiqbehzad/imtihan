import React from 'react';
import Carousel from '../src/components/carousel/Carousel';
import Solutions from '../src/components/solutions/Solutions';
import Blog from './components/blog/Blog';
import Comparison from './components/comparison/Comparison';
import Testimony from './components/testimony/Testimony';
import Projects from'./components/projects/Projects';
import Footer from'./components/footer/Footer';
// import Owners from './pages/owners/Owners';


function App() {
  return (
    <>
    <div>
      {/* <Owners /> */}
      <Carousel />
      <Solutions />
      <Comparison />
      <Projects />
      <Blog />
      <Testimony /> 
      <Footer /> 
    </div>
    </>
  );
}

export default App;
