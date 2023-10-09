import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../Components/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import './style.scss'
import { DiApple, DiAndroid } from "react-icons/di"
import { FaDev, FaDatabase } from "react-icons/fa"



const jobSummary =
  "Discover my proficiency as a frontend developer through a collection of projects that highlight my skills in HTML, CSS, and JavaScript. I specialize in transforming design concepts into engaging and user-friendly web interfaces. My work prioritizes responsive design principles for seamless cross-device experiences, and I pay meticulous attention to detail. Explore my portfolio to see how I bring creativity and functionality together to enhance user interaction and deliver compelling web solutions.";


const personDetails = [
  {
    label: "Name",
    value: "Abhishek Maurya"
  },
  {
    label: "Age",
    value: '23'
  },
  {
    label: "Address",
    value: 'India'
  },
  {
    label: "Email",
    value: 'mauryaabhishek.lko@gmail.com'
  },
  {
    label: "Contact No",
    value: '+91-6307252606'
  }
];

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='about__content'>
        <div className='about__content__personalwrapper'>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(-900px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(500px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
            <h3 className='PersonalInformationHeaderText'>Personal Information</h3>
            <ul>
              {personDetails.map((item, i) => (
                <li key={i}>
                  <span className='title'>{item.label}</span>
                  <span className='value'>{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className='about__content__serviceswrapper'>
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(600px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
          <div className='about__content__serviceswrapper__innerContent'>
            <div>
              <FaDev size={60} color='var(--yellow-theme-main-color)' />
            </div>
            <div>
              <FaDatabase size={60} color='var(--yellow-theme-main-color)' />
            </div>
            <div>
              <DiApple size={60} color='var(--yellow-theme-main-color)' />
            </div>
            <div>
              <DiAndroid size={60} color='var(--yellow-theme-main-color)' />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

export default About;

