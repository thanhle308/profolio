import React from 'react'
import './skills.css'
import { FaReact, FaGitSquare } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { DiSass, DiCss3 } from 'react-icons/di'
import { AiFillHtml5, AiOutlineGithub, AiOutlineAntDesign } from 'react-icons/ai'
import { SiBootstrap, SiTailwindcss } from 'react-icons/si'




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
                <FaReact className='icon' />
              </div>
              <span className='skillName'>ReactJS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoJavascript className='icon' />
              </div>
              <span className='skillName'>JavaScript</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <DiSass className='icon' />
              </div>
              <span className='skillName'>SASS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <DiCss3 className='icon' />
              </div>
              <span className='skillName'>CSS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <AiFillHtml5 className='icon' />
              </div>
              <span className='skillName'>HTML</span>
            </div>

          </div>
        </div>
      </div>

      <div className="skillsContainer grid">
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">UI/UX Design</h2>
            <span className='subTitle'>
              2 Years Experience
            </span>
          </div>

          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiBootstrap className='icon' />
              </div>
              <span className='skillName'>Bootrap</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <AiOutlineAntDesign className='icon' />
              </div>
              <span className='skillName'>Ant Design</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiTailwindcss className='icon' />
              </div>
              <span className='skillName'>Tailwind CSS</span>
            </div>

          </div>
        </div>
      </div>

      <div className="skillsContainer grid">
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Other Skills</h2>
            <span className='subTitle'>
              2 Years Experience
            </span>
          </div>

          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaGitSquare className='icon' />
              </div>
              <span className='skillName'>Git</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <AiOutlineGithub className='icon' />
              </div>
              <span className='skillName'>GitHub</span>
            </div>

          </div>
        </div>
      </div>


    </section>
  )
}

export default Skills