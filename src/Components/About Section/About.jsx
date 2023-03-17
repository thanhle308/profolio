import React from 'react'
import './about.css'
import { TbCloudDownload } from 'react-icons/tb'
import img from '../../assets/img2-removebg.png'

const About = () => {
  return (
    <section id='about' className='about section container'>

      <div className="sectionTitle">
        <span className="titleNumber">
          01.
        </span>
        <h5 className='titleText'>About Me
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
            I'm a Frontend Developer. I’m extremely passionate about web development especially
            Frontend Development, helping businesses and improve their online presence. Currently, I
            have studied Software Engineering at Van Lang University (2016 - now), I have finished
            Frontend Development Course at CyberSoft Academy and had nearly 1 year of working
            experience in ReactJS. Now I currently aim to learn as much as I can in a work environment
            and to further my own abilities in a professional setting.
            <br />
            <br />
            I am passionate about learning new technologies and always keep concentrated on improving my self skills. Being patient
            and responsible for working help me implement completely assinged tasks. Hope that I can contribute to the development of
            your company.
          </h4>

          <div className="aboutBtn">
            <a href="cv.pdf" download="cv.pdf" className='flex'>
              Download CV <TbCloudDownload className='icon' />
            </a>
          </div>

        </div>

        <div className="aboutImgDiv">
          <img src={img} alt="Thanh" className='aboutImg' />
        </div>
      </div>

    </section>
  )
}

export default About