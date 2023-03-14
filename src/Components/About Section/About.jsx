import React from 'react'
import './about.css'
import {TbCloudDownload} from 'react-icons/tb'
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, mollitia consequatur! Expedita dignissimos voluptatem excepturi?
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, illo!
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis modi ducimus nesciunt debitis assumenda distinctio beatae nemo cum officia sequi!
          </h4>

        <div className="aboutBtn">
          <a href="cv.pdf" download="cv.pdf" className='flex'>
            Download CV <TbCloudDownload className='icon'/>
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