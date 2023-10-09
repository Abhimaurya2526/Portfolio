import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons

import './style.scss';

const pdfFileUrl = 'http://localhost:3000/resume.pdf';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigationContactMePage = () => {
    navigate('/contact');
  };

  const handleDownloadResume = (url) => {
    console.log('Downloading resume from URL:', url); 
    const fileName = url.split('/').pop();
    console.log('File name:', fileName); 
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
    console.log('Download initiated.'); 
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Abhishek
          <br />
          Front-end developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: 'translateY(550px)',
        }}
        end={{
          transform: 'translateY(0px)',
        }}
      >
        <div className="home__social-icons">
          <a href="https://github.com/Abhimaurya2526" target='blank'>
            <FaGithub size={32} />
          </a>
          <a href="https://www.linkedin.com/in/abhishek-maurya-784511220/" target='blank'>
            <FaLinkedin size={32} />
          </a>
          <a href="https://instagram.com/your-instagram-profile">
            <FaInstagram size={32} />
          </a>
        </div>
        <div className="home__contact-me">
          <button onClick={handleNavigationContactMePage}>Hire Me</button>
        </div>
        <div className="home__contact-me">
          <button onClick={() => handleDownloadResume(pdfFileUrl)}>Download Resume</button>
        </div>
        
      </Animate>
    </section>
  );
};

export default Home;
