import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './Containers/home';
import About from './Containers/about';
import Contact from './Containers/contact';
import Portfolio from './Containers/portfolio';
import Skills from './Containers/skill';
import Resume from './Containers/resume';
import Navbar from './Components/navBar';
import particleOptions from './utils.js/particles.js';



function App() {

  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderparticleJsInHomePage = location.pathname === '/';

  return (
    <div className='App'>
      {/* particle js */}
      {
        renderparticleJsInHomePage && <Particles id='particles' options={particleOptions} init={handleInit} />

      }

      {/* navbar */}
      <Navbar></Navbar>

      {/* main page content */}
      <div className='App__main-page-content'>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skill' element={<Skills />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;

