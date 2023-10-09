import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../Components/pageHeaderContent'
import { skillsData } from './utils';
import { Animate, AnimateKeyframes } from 'react-simple-animate'
import { Line } from "rc-progress"
import './style.scss'


const Skill = () => {
  return (
    <section id="skills" className="skills">
  <PageHeaderContent
    headerText="My Skills"
    icon={<BsInfoCircleFill size={40} />}
  />
  <div className='skills__content-wrapper'>
    {
      skillsData.map((item, i) => ( // Use parentheses instead of curly braces
        <div key={i} className='skills__content-wrapper__inner-content'>
          <Animate
            play
            duration={1}
            delay={0.3}
            start={{
              transform: 'translate(-200px)'
            }}
            end={{
              transform: 'translate(0px)'
            }}
          >
            <h3 className='skills__content-wrapper__inner-content__category-text'>
              {item.label}
            </h3>
            <div className='skills__content-wrapper__inner-content__progressbar-content'>
              {
                item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity: 1", "opacity: 0"]}
                    iterationCount={1} // Use a number instead of a string
                  >
                    <div className='progressbar-wrapper' key={j}>
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth={4} // Use curly braces for numeric values
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth={4} // Use curly braces for numeric values
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))
              }
            </div>
          </Animate>
        </div>
      )) // Closing parenthesis for map function
    }
  </div>
</section>

  )
}

export default Skill