import React, { useRef } from 'react';
import './contact.css'
import { FaFacebookSquare } from 'react-icons/fa'
import { TbArrowBigRightLines } from 'react-icons/tb'
import { SiZalo , SiGmail} from 'react-icons/si'

// EmailJs 
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1x9h7aq', 'template_jjlkcyg', form.current, 'b8czQTn-dtHtBXBnT')
      e.target.reset()
  };
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
                0967300895
              </span>
              <div>
                <a className='flex'>
                  Send Message <TbArrowBigRightLines className='icon' />
                </a>
              </div>
            </div>

            <div className="card">
              <SiGmail className='icon' />
              <h4>Gmail</h4>
              <span className='userName'>
                lechithanh.bt@gmail.com
              </span>
              <div>
                <a className='flex' target='_blank'>
                  Send Message <TbArrowBigRightLines className='icon' />
                </a>
              </div>
            </div>



          </div>
        </div>

        <div className="form grid">
          <h3>Send me an email</h3>

          <form ref={form} onSubmit={sendEmail}>
            <input name='name' type="text" placeholder='Enter your Name' />
            <input name='email' type="text" placeholder='Enter your Email' />
            <textarea name="message" placeholder='Enter your message'></textarea>
            <button className='formBtn' type='submit' name='submit'>
              Send Email
            </button>
          </form>
        </div>


      </div>

    </section>
  )
}

export default Contact