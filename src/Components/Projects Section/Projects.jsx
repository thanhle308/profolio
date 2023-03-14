import React from 'react'
import './projects.css'
import {FiYoutube} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'




const Projects = () => {
  const data= [
    {
      id:1,
      image: '',
      demo: '',
      liveLink:'',
      github: '',
      title: "Jira Clone",
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      tech1:'Html',
      tech2: 'CSS',
      tech3: 'ReactJS',
      tech4:'Ant Design'
    }
  ]
  return (
    <section id='projects' className='projects container section'>
      
      <div className="sectionTitle">
        <span className="titleNumber">
          03.
        </span>
        <h5 className='titleText'>Projects
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="projectContainer grid">
          {data.map(({id,image,demo,liveLink,github,title,desc,tech1,tech2,tech3,tech4}) => {
            return (
              <div key={id} className='singleProject'>

                  <div className="externalLinks flex">

                    <div className="youtubeIcon">
                      <a href={demo} target='_blank'>
                        <FiYoutube className='icon' />
                      </a>
                    </div>

                    <div className="githubIcon">
                      <a href={demo} target='_blank'>
                        <BsGithub className='icon' />
                      </a>
                    </div>

                  </div>

                  <div className="imgDiv">
                    <a href="" target='_blank'>
                      <img src={image} alt={title} />
                    </a>
                  </div>

                  <div className="projectTitle">
                    <h3>{title}</h3>
                  </div>
                  <div className="desc">
                    {desc}
                  </div>

                  <div className="technologies flex">
                    <small>{tech1}</small>
                    <small>{tech2}</small>
                    <small>{tech3}</small>
                    <small>{tech4}</small>

                  </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default Projects