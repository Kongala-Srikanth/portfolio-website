// Carousel.tsx
import { useState, useEffect } from 'react';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle  } from "react-icons/io";

import './index.css';

const projects = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1725471490/jobby_app_xkq7ti.jpg',
    title: 'Jobby App',
    description: `Developed Jobby App allowing user login, job listings with title search, and filters by salary and employment type. Used React components for pages like Login, Home, and Job Details. Authenticated users with JWT, persisted login state, and implemented protected routes.`,
    gitLink:'https://github.com/Kongala-Srikanth/React-JS-Jobby-App',
    preview: 'https://skjobby.ccbp.tech/'
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729331150/theater-8894546_1280_j0fwbu.jpg',
    title: 'Movie Database App',
    description: 'Movie Database is a React app for browsing and managing movies. Users can search for films, view detailed information, and  upcoming movies details. It features dynamic UI updates, REST API integration for movie data, and seamless navigation with React Router.',
    gitLink:'https://github.com/Kongala-Srikanth/Movie-Database-App',
    preview: ''
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1725471490/nxt_Trendz_jatsbn.jpg',
    title: 'Nxt Trendz',
    description: 'Developed an e-commerce platform inspired by Amazon/Flipkart with pages for Login, Products, and Product Details using React Router and components. Implemented secure authentication/authorization via JWT and REST APIs. Tech: React, JS, CSS, Bootstrap, JWT, REST API.',
    gitLink:'https://github.com/Kongala-Srikanth/Enhance-Nxt-Trendz',
    preview: 'https://sknxtrendz.ccbp.tech/'
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729330962/ai-generated-8846528_1280_qmfmit.jpg',
    title: 'Travel Trip',
    description: 'Travel Trip is a React-based platform for booking tickets for cars, buses, trains, and planes. It features routes like Login, Home, Trip Booking, and My Trips, allowing users to input details, book trips step-by-step, and manage bookings with an easy-to-use interface.',
    gitLink:'https://github.com/Kongala-Srikanth/react-travel-trip',
    preview: 'https://sktriptravels.ccbp.tech/'
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1725471492/todo_list_r3jab8.jpg',
    title: 'Todos List',
    description: 'Built a comprehensive todo management tool to boost productivity with a user-friendly interface using HTML, CSS, and Bootstrap. Implemented seamless task management via JavaScript CRUD operations and ensured task persistence with local storage.',
    gitLink:'https://github.com/Kongala-Srikanth/Enhance-Todos-App',
    preview: 'https://todosappsk.ccbp.tech/'
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState(projects.slice(0, window.innerWidth < 768 ? 1 : 2));

  useEffect(() => {
    const handleResize = () => {
      setVisibleProjects(projects.slice(currentIndex, currentIndex + (window.innerWidth < 768 ? 1 : 2)));
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % projects.length);
    setVisibleProjects(projects.slice((currentIndex + 1) % projects.length, (currentIndex + 1) % projects.length + (window.innerWidth < 768 ? 1 : 2)));
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
    setVisibleProjects(projects.slice((currentIndex - 1 + projects.length) % projects.length, (currentIndex - 1 + projects.length) % projects.length + (window.innerWidth < 768 ? 1 : 2)));
  };

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <button
          className="prev-button"
          onClick={handlePrev}
        >
          <IoIosArrowDropleftCircle />
        </button>
        <button
          className="next-button"
          onClick={handleNext}
        >
          <IoIosArrowDroprightCircle />
        </button>
      </div>
      <div className="carousel-body">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="project-card-sm"
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <p className='login-details'>Username: <span className='login-details-span'>rahul</span></p>
            <p className='login-details'>Password: <span className='login-details-span'>rahul@2021</span></p>
            <div className='prev-git-btn-container'>
            <a href={project.preview} target='_blank'>
            <button className="view-button">
              Preview
            </button>
            </a>
            
            <a href={project.gitLink} target='_blank'>
              <button className="view-button">
                Github
              </button>
            </a>    
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;