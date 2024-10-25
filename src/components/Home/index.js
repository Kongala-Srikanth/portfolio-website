import { Component } from "react";
import { FaFileDownload } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogoDuotone } from "react-icons/pi";

import './index.css'

const work = ['WEB DEVELOPER', 'YOUTUBER', 'FREELANCER']

class Home extends Component {
    state = {workName: work[0], count: 0}

    componentDidMount(){
        this.changeWorkName()
    }

    changeWorkName = () => {
        setInterval(() => {
            this.setState(prevState => ({workName: work[prevState.count], count : (prevState.count + 1)%3}))
        }, 5000)
    }

    

    render(){
        const {workName} = this.state
    return(
        <div className="home-main-container" id="home">
            <div className="home-details-container">
                <div>
                    
                    <h1 className="name">I AM SRIKANTH KONGALA</h1>
                    <p className="work-title">A {workName}</p>
                    <ul className="social-media-icons-container">
                        <li><a href="" target="_blank" className="icon-link"><FaXTwitter/></a></li>
                        <li><a href="https://www.instagram.com/srikanth_4441/" target="_blank" className="icon-link"><IoLogoInstagram/></a></li>
                        <li><a href="https://www.youtube.com/@TechnicalSrikanth/" target="_blank" className="icon-link"><AiOutlineYoutube/></a></li>
                        <li><a href="https://www.linkedin.com/in/kongala-srikanth/" target="_blank" className="icon-link"><RiLinkedinBoxLine/></a></li>
                        <li><a href="https://github.com/Kongala-Srikanth" target="_blank" className="icon-link"><FaGithub/></a></li>
                        <li><a href="https://wa.me/7075960802" target="_blank" className="icon-link"><FaWhatsapp/></a></li>
                        <li><a href="https://t.me/srikanth4441" target="_blank" className="icon-link"><PiTelegramLogoDuotone/></a></li>
                    </ul>
                    <a href='https://drive.google.com/file/d/1yL1APcVD_N_vh-FLKTLiny8lkmx-NYQ5/view?usp=drive_link' target='_blank' className="resume-btn-link">
                    <button type="button" className="resume-btn">Download Resume <FaFileDownload className="download"/></button></a>
                </div>
            </div>
            <div className="pro-background">
                <img src="https://res.cloudinary.com/dxgjs0mtb/image/upload/v1725335781/sk-cartoon_hapma9.jpg" alt="profile image" className="home-profile-img"/>
            </div>
        </div>
    )
}
}
export default Home