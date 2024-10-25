import './index.css';

const firstName = 'KONGALA'
const secondName = 'SRIKANTH'

const About = () => (
    <div className='about-section-container' id='about'>
    <div class="wrapper">
        <div class="bg"> Who Am, I ? </div>
        <div class="fg"> Who Am, I ? </div>
      </div>
        <div className='about-card'>
            
            <div className='about-img-container'>
            <ul className='about-name-container'>
            {firstName.split('').map((letter, index) => (
                    <li className='about-name' key={index}>{letter}</li>
                ))}
            </ul>
                <img src='https://res.cloudinary.com/dxgjs0mtb/image/upload/v1725295606/sk-new_anikqe.png' alt='about profile img' className='about-pro-img'/>
                
                <ul className='about-name-container'>
            {secondName.split('').map((letter, index) => (
                    <li className='about-name' key={index}>{letter}</li>
                ))}
            </ul>
            </div>
            <div>
                <p className='about-description'>Hello, I'm Srikanth Kongala, a Computer Science Engineering graduate and Full Stack Developer passionate about crafting dynamic, responsive websites that provide exceptional user experiences. Proficient in HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, SQLite, MongoDB, and Python, I leverage these technologies to create modern, functional applications that are both visually appealing and user-friendly. I thrive on solving complex problems and enjoy exploring new frameworks and tools to enhance my development skills. Beyond my technical expertise, I’m a dedicated YouTuber, where I share insights on web development, coding best practices, and the latest tech trends, engaging with a global community of aspiring developers. I believe in the power of collaboration and enjoy mentoring others in their learning journeys. In my spare time, I love experimenting with new projects, contributing to open-source initiatives, and staying updated on industry advancements. I look forward to connecting with you and exploring opportunities for collaboration!</p>
            </div>
        </div>
        <p className='about-description-sm'>
        Hello, I'm Srikanth Kongala, a computer science engineering graduate and full-stack developer. I specialize in creating dynamic and responsive websites using HTML, CSS, JavaScript, Bootstrap, Python, Django, and MySQL. My goal is to deliver a great user experience through visually appealing and functional websites.<br/><br/>
        Apart from development, I am a YouTuber, sharing knowledge on web development, coding, and tech topics with a broad audience. I enjoy creating video tutorials to help others learn and grow in their tech journeys.<br/><br/>
        I'm always open to new challenges and opportunities to expand my skills. If you’d like to know more about me or my work, check the project section below to explore my portfolio. I look forward to connecting with you!
        </p>
    </div>
)

export default About