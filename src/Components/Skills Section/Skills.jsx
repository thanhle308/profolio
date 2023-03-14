import React from 'react'
import './skills.css'
import {FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {DiSass ,DiCss3} from 'react-icons/di'
import {AiFillHtml5} from 'react-icons/ai'
const Skills = () => {
  return (
    <section id='skills' className='skills container section'>
      <div className="sectionTitle">
        <span className="titleNumber">
          02.
        </span>
        <h5 className='titleText'>Skills
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="skillsContainer grid">
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Web Development</h2>
            <span className='subTitle'>
              2 Years Experience
            </span>
          </div>

          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaReact className='icon'/>
              </div>
              <span className='skillName'>ReactJS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoJavascript className='icon'/>
              </div>
              <span className='skillName'>JavaScript</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <DiSass className='icon'/>
              </div>
              <span className='skillName'>SASS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <DiCss3 className='icon'/>
              </div>
              <span className='skillName'>CSS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <AiFillHtml5 className='icon'/>
              </div>
              <span className='skillName'>HTML</span>
            </div>

          </div>
        </div>
      </div>


    </section>
  )
}

export default Skills