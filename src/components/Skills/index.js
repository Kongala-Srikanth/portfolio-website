import {SkillCardFront} from './styledComponents'
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiSqlite } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { SiPython } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { GrWordpress } from "react-icons/gr";
import { TbSeo } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { CgFigma } from "react-icons/cg";

import './index.css'



const skills = [
  {
    id: 'html',
    name: 'HTML',
    percentage: 50,
    color: '#E44D26',
    description: 'HTML is the standard markup language for creating web pages and web applications.',
    imgUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1720005366/48875d57b77e65a8e30d4bbb87715a0c_krmj3h.png'
  },
  {
    id: 'css',
    name: 'CSS',
    percentage: 50,
    color: '#264DE4', 
    description: 'CSS is a stylesheet language used for describing the presentation of a document written in HTML.',
    imgUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1720005366/cc57f22117bb01dc7347b1a7fe00b1b6_p3hno6.png'
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    percentage: 50,
    color: '#563D7C',
    description: 'Bootstrap is a popular CSS framework for building responsive and mobile-first websites.',
    imgUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1720005366/kisspng-responsive-web-design-bootstrap-sass-cascading-sty-framework-5acb894bc4c191.9841223815232883958059_xuxfqo.png'
  },
  {
    id: 'python',
    name: 'Python',
    percentage: 50,
    color: '#306998',
    description: 'Python is a high-level programming language known for its simplicity and readability.',
    imgUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1720006239/kisspng-python-computer-icons-tutorial-computer-programmin-social-icons-5ad5ccbb60d361.7508341715239610193966_fdpe5q.png'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    percentage: 50,
    color: '#F0DB4F',
    description: 'JavaScript is a programming language that adds interactivity to web pages and web applications.',
    imgUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1720014178/kisspng-javascript-programmer-node-js-web-application-vector-markup-language-5b173fc201e143.7543356315282503060077_vnzmed.png'
  },
  {
    id: 'sqlite',
    name: 'SQLite',
    percentage: 50,
    color: '#003b57b0',
    description: 'SQLite is a lightweight, serverless, and self-contained SQL database engine.',
    imgUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1720014450/kisspng-sqlite-relational-database-management-system-redis-square-icon-5b1399d39a9258.6977493315280112196331_kcjdvy.png'
  },
  {
    id: 'node',
    name: 'Node.js',
    percentage: 50,
    color: '#68A063',
    description: 'Node.js is a runtime environment that allows you to run JavaScript on the server side.',
    imgUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1720005366/d37c2f2191d471557f862789bf8ac7d8_ulbimu.png'
  },
  {
    id: 'react',
    name: 'React.js',
    percentage: 50,
    color: '#61DAFB',
    description: 'React.js is a JavaScript library for building user interfaces, often used for single-page applications.',
    imgUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1720005367/transparent-js-icon-logo-icon-react-icon-5dbea1da3071a5.5168401015727743621985_blzdif.png'
  },
  {
    id: 'mangoDB',
    name: 'MangoDB',
    percentage: 50,
    color: '#082532',
    description: 'MongoDB is a NoSQL database that stores data in flexible documents.',
    imgUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729348535/1_doAg1_fMQKWFoub-6gwUiQ_jmas0x.png'
  }
];

const Skills = () => (
  <>
  <div className='skills-sm-container' id='skills'>
    <div class="wrapper">
          <div class="bg"> Skills </div>
          <div class="fg"> Skills </div>
    </div>
  <div className='skills-sm-card'>
    <div className="globe-container">
          <div className="globe">
              <div className="skill-icon icon-html"> <FaHtml5 className='html'/> </div>
              <div className="skill-icon icon-css"><IoLogoCss3 className='css'/></div>
              <div className="skill-icon icon-javascript"><RiJavascriptFill className='javascript'/></div>
              <div className="skill-icon icon-react"><RiReactjsLine className='react'/></div>
              <div className="skill-icon icon-node"><FaNodeJs className='node'/></div>
              <div className="skill-icon icon-bootstrap"><FaBootstrap className='bootstrap'/></div>
              <div className="skill-icon icon-sqlite"><SiSqlite className='sqlite'/></div>
              <div className="skill-icon icon-python"><SiPython className='python'/></div>
              <div className="skill-icon icon-github"><FaGithub className=''/></div>
              <div className="skill-icon icon-wordpress"><GrWordpress className='wordpress'/></div>
              
      
              <div className="skill-icon icon-pole1"><TbSeo /></div>
              <div className="skill-icon icon-pole2"><DiMongodb className='mongodb'/></div>
              <div className="skill-icon icon-pole3"><SiExpress /></div>
              <div className="skill-icon icon-pole4"><CgFigma className='figma'/></div>
          </div>
      </div>

  </div>
  </div>
  
     
    <div className='skills-section' id='skillsMd'>
    <div class="wrapper">
        <div class="bg"> Skills </div>
        <div class="fg"> Skills </div>
      </div>
        <div className='skills-card'>
            <div className="App">
      <div className="skills-container">
        {
          skills.map(each => (
            <div className="skill-card" key={each.id}>
          <div className="skill-card-inner">
            <SkillCardFront color={each.color} className="skill-card-front" >
              <img src={each.imgUrl} alt={each.id} className='skill-img'/>
              <p className='skill-name'>{each.name}</p>
            </SkillCardFront>
            <div className="skill-card-back">
              <p className='skill-description'>{each.description}</p>
            </div>
          </div>
        </div>
          ))
        }
      </div>
    </div>
            </div>
    </div>
    </>
)

export default Skills