import React from 'react'
import './projects.css'
import {FiYoutube} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'

// img 
import img from '../../assets/img.jpg'
import project_5 from '../../assets/project/project_5.PNG'
import project_4 from '../../assets/project/project_4.PNG'
import project_3 from '../../assets/project/project_3.PNG'
import project_1 from '../../assets/project/project_1.PNG'




const Projects = () => {
  const data= [
    {
      id:1,
      image: project_1,
      demo: 'https://jira-clone-redux-tool-kit.vercel.app/',
      liveLink:'',
      github: 'https://github.com/thanhle308/Jira-Clone-Redux-ToolKit',
      title: "Jira Bugs",
      desc: 'Trang quản lý project bao gồm các chức năng add,remove,edit : {project , task , user} , login , logout , drop&drap task vv.vv... . Trang được sử dụng Redux toolkit ,ngoài ra project này cũng được convert ra project khác sử dụng Redux Saga ',
      tech1:'Html CSS',
      tech2: 'Ant Design',
      tech3: 'ReactJS',
      tech4:'RESTful API'
    },
    {
      id:3,
      image: project_3,
      demo: '',
      liveLink:'',
      github: 'https://github.com/thanhle308/profolio.git',
      title: "My Profolio",
      desc: 'Trang profile bản thân sử dụng ReactJS Sass',
      tech1:'Html',
      tech2: 'CSS',
      tech3: 'ReactJS',
      tech4:''
    },
    {
      id:4,
      image: project_4,
      demo: 'https://thanhle308.github.io/Capstone_Js/',
      liveLink:'https://www.youtube.com/watch?v=GURv0BEUreU&t=19s',
      github: 'https://github.com/thanhle308/Capstone_Js',
      title: "Trang bán hàng điện tử và trang quản lý sản phẩm",
      desc: 'Trang web được viết bằng Javascript lấy dữ liệu từ api về',
      tech1:'Html',
      tech2: 'CSS',
      tech3: 'Javascript',
      tech4:''
    },
    {
      id:5,
      image: project_5,
      demo: 'https://thanhle308.github.io/capstoneproject-cybersoft/',
      liveLink:'https://www.youtube.com/watch?v=jfzuRFEMCkw&t=4s',
      github: 'https://github.com/thanhle308/capstoneproject-cybersoft',
      title: "Clone Demo W3layout",
      desc: 'Xây dựng trang web từ layout có sẵn bằng html css và bootrap',
      tech1:'Html',
      tech2: 'CSS',
      tech3: 'Bootrap',
      tech4:''
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
                      <a href={liveLink} target='_blank'>
                        <FiYoutube className='icon' />
                      </a>
                    </div>

                    <div className="githubIcon">
                      <a href={github} target='_blank'>
                        <BsGithub className='icon' />
                      </a>
                    </div>

                  </div>

                  <div className="imgDiv">
                    <a href={demo} target='_blank'>
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