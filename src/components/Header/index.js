// import {Link} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
// import { FcAbout } from "react-icons/fc";
import { BsYoutube } from "react-icons/bs";
// import { FcIdea } from "react-icons/fc";
// import { IoIosLaptop } from "react-icons/io";
import { GiBookCover } from "react-icons/gi";
import { PiCertificateThin } from "react-icons/pi";
import { BsFillInfoCircleFill } from "react-icons/bs";

import './index.css'
import { BiLaptop } from 'react-icons/bi';

const Header = () => (
    <nav className='nav-container'>
        <a href='#'>
        <img src='https://res.cloudinary.com/dxgjs0mtb/image/upload/v1725294623/srikanth_kxj4wr.png' alt='website logo' className='website-logo'/>
        </a>
        
        <ul className='nav-options-container'>
            <li>
                <a href='#home' className='link'>
                    <button type='button' className='hide-btn sm-nav-option'><FaHome className='nav-icon'/></button>
                    <button type='button' className='lg-nav-option'>Home</button>
                </a>
            </li>
            <li>
            <a href='#about' className='link'>
                <button type='button' className='hide-btn sm-nav-option'><BsFillInfoCircleFill className='nav-icon'/></button>
                <button type='button' className='lg-nav-option'>About</button>
            </a>            
            </li>
            <li>
            <a href='#skills' className='link'>
                <button type='button' className='hide-btn sm-nav-option'><GiBookCover className='nav-icon'/></button>
                
            </a>  
            <a href='#skillsMd' className='link'>
                <button type='button' className='lg-nav-option'>Skills</button>
            </a>    
            </li>
            <li>
            <a href='#projects' className='link'>
                <button type='button' className='hide-btn sm-nav-option'><BiLaptop className='nav-icon'/></button>
                <button type='button' className='lg-nav-option'>Projects</button>
            </a>
            </li>
            <li>
            <a href='#certificates' className='link'>
                <button type='button' className='hide-btn sm-nav-option'><PiCertificateThin  className='nav-icon'/></button>
                <button type='button' className='lg-nav-option'>Certificates</button>
            </a>         
            </li>
            <li>
            <a href='#youtube' className='link youtube-icon' >
                <button type='button' className='hide-btn sm-nav-option'><BsYoutube className='nav-icon'/></button>
                <button type='button' className='lg-nav-option'>YouTube</button>
            </a>         
            </li>
            <li>
            <a href='#contact' className='link'>
                <button type='button' className='hide-btn sm-nav-option'><RiContactsBook3Fill className='nav-icon'/></button>
                <button type='button' className='lg-nav-option'>Contact</button>
            </a>   
            </li>
        </ul>
    </nav>
)

export default Header


