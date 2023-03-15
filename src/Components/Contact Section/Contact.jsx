import React from 'react'
import './contact.css'
import { FaFacebookSquare } from 'react-icons/fa'
import { TbArrowBigRightLines } from 'react-icons/tb'
import { AiFillLinkedin } from 'react-icons/ai'
import {SiZalo} from 'react-icons/si'

const Contact = () => {
  return (
    <section id='contact' className='contact section container'>

      <div className="sectionTitle">
        <span className="titleNumber">
          04.
        </span>
        <h5 className='titleText'>Contact
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Talk to me</h3>
          <div className="cards grid">

            <div className="card">
              <FaFacebookSquare className='icon' />
              <h4>Facebook</h4>
              <span className='userName'>
                @im.chithanh
              </span>
              <div>
                <a href="https://www.facebook.com/profile.php?id=100084415954319" className='flex' target='_blank'>
                  Send Message <TbArrowBigRightLines className='icon' />
                </a>
              </div>
            </div>

            <div className="card">
              <SiZalo className='icon' />
              <h4>Zalo</h4>
              <span className='userName'>
                @im.chithanh
              </span>
              <div>
                <a href="https://www.facebook.com/profile.php?id=100084415954319" className='flex' target='_blank'>
                  Send Message <TbArrowBigRightLines className='icon' />
                </a>
              </div>
            </div>

            <div className="card">
              <AiFillLinkedin className='icon' />
              <h4>Linkedin</h4>
              <span className='userName'>
                @im.chithanh
              </span>
              <div>
                <a href="https://www.facebook.com/profile.php?id=100084415954319" className='flex' target='_blank'>
                  Send Message <TbArrowBigRightLines className='icon' />
                </a>
              </div>
            </div>



          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact