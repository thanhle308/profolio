import React from 'react'
import './home.css'
import { AiFillGithub } from 'react-icons/ai'
import { CiTwitter } from 'react-icons/ci'
import { BsFacebook } from 'react-icons/bs'
import { FaHandPointRight } from 'react-icons/fa'
import {FiChevronsDown} from 'react-icons/fi'

const Home = () => {
  return (
    <section id='home' className='home section'>

      {/* <div className="leftIcons">
        <div className="socials grid">
          <a href="" target='_blank'>
            <AiFillGithub className='icon' />
          </a>
          <a href="" target='_blank'>
            <CiTwitter className='icon' />
          </a>
          <a href="" target='_blank'>
            <BsFacebook className='icon' />
          </a>
        </div>
      </div> */}

        {/* Home Content  */}
      <div className="container homeContainer">
        <span className="introText">
          Hi my name is,
        </span>
        <h1 className='title'>
          Thanh
        </h1>
        <span className='subTitle'>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </span>
        <p className="homeParagraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>

        <div className="lowerHomeSection">
          <button className='contactBtn'>
            <a href="#contact" className='flex'>
              <FaHandPointRight className='icon' /> Contact Me
            </a>
          </button>

          <div className="scrollDiv">
            <a href="#about" className="flex">
             <h6 className='scroll'> Scroll Down</h6> <FiChevronsDown className='icon'/>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="rightEmail">
        <div>
          <div className="emailAddress">
            <a href="https://mailto:youremail@gmail.com" target='_blank'>
              youremail@gmail.com
            </a>
          </div>

          <div className="line"></div>
        </div>
      </div> */}

    </section>
  )
}

export default Home