import React, { useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";


import './index.css';

const projectsList = [
  {
      id: 0,
      title: 'Travel Trip',
      projectDemo:'https://sktriptravels.ccbp.tech/',
      githubLink: 'https://github.com/Kongala-Srikanth/react-travel-trip.git',
      descripion: `The "Travel Trip" app allows users to log in and book tickets for various modes of travel, including cars, trains, buses, and flights, through a specific booking form. Users can manage their bookings by canceling tickets at any time. The app provides a seamless experience for planning and managing travel arrangements, making it a convenient tool for users' travel needs.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729330962/ai-generated-8846528_1280_qmfmit.jpg',
      usedLanguages: ['React.js']
  },
  {
      id: '01',
      title: 'Movie Database App',
      projectDemo:'',
      githubLink: 'https://github.com/Kongala-Srikanth/Movie-Database-App.git',
      descripion: `The "Movie Database App" provides a comprehensive platform for exploring movies of all genres. Users can search for movies and browse categories such as upcoming releases and popular films. Each movie entry includes detailed information, including ratings, budget, cast details, and more. This app offers a complete movie experience, making it easy for users to find and learn about their favorite films.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729331150/theater-8894546_1280_j0fwbu.jpg',
      usedLanguages: ['React.js']
  },
  {
      id: 1,
      title: 'Todos Application',
      projectDemo:'https://sktodos4.ccbp.tech/',
      githubLink: '',
      descripion: `This JavaScript-based Todos Application allows users to manage their daily tasks efficiently. Users can add new tasks, which are stored in the browser's local storage for persistent access. Each task can be marked as complete or incomplete with a simple tick or untick action, and these changes are automatically saved to local storage. Additionally, users have the option to remove tasks from their list, ensuring a streamlined and organized to-do list.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1725471492/todo_list_r3jab8.jpg',
      usedLanguages: ['JavaScript']
  },
  {
      id: 2,
      title: 'Restaurant',
      projectDemo:'',
      githubLink: '',
      descripion: `This Restaurant Website is built using HTML, CSS, and Bootstrap to provide a visually appealing and responsive experience. The site features a clean and modern design, showcasing the restaurant's menu, services, and contact information. Thanks to Bootstrap's responsive framework, the website adjusts seamlessly across various devices and screen sizes, ensuring an optimal viewing experience for all visitors. Key sections include a homepage, menu display, about us, and contact form, all styled with elegant CSS and interactive Bootstrap components.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1725471492/restaruant_zl8ofh.jpg',
      usedLanguages: ['HTML/CSS']
  },
  {
      id: 3,
      title: 'Nxt Watch',
      projectDemo:'',
      githubLink: 'https://github.com/Kongala-Srikanth/Youtube-Clone',
      descripion: `Nxt Watch is a complete YouTube clone application developed using React.js. It replicates the core functionalities of YouTube, allowing users to browse, search, and watch videos seamlessly. The application features a dynamic and responsive user interface with components such as a homepage displaying trending videos, a search bar for finding specific content, individual video playback pages, and user authentication for personalized experiences. Utilizing React.js ensures efficient rendering and state management, providing a smooth and engaging user experience akin to the original YouTube platform.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729579889/ai-generated-8575663_960_720_b6dzmz.jpg',
      usedLanguages: ['React.js']
  },
  {
      id: 4,
      title: 'Rock Paper Scissors',
      projectDemo:'',
      githubLink: '',
      descripion: `Rock Paper Scissors is a fun and interactive game application built with React.js. This project allows users to play the classic Rock Paper Scissors game against the computer. The user selects their choice, and the computer randomly picks one as well. The game then determines the winner based on the traditional rules. The application features a clean and responsive interface, real-time updates, and dynamic visual feedback for each round. Utilizing React.js ensures a smooth user experience with efficient state management and component rendering.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1725471491/rock_paper_game_m5ojv3.jpg',
      usedLanguages: ['React.js']
  },
  {
      id: 5,
      title: 'Jobby App',
      projectDemo:'https://skjobby.ccbp.tech/',
      githubLink: 'https://github.com/Kongala-Srikanth/React-JS-Jobby-App.git',
      descripion: `Jobby App is a comprehensive job searching application designed with a user-friendly login page. It enables users to search for jobs efficiently, offering filters to narrow down search results based on package, employment type, and other relevant criteria. Users can log in to personalize their job search experience and find the most relevant job listings. Although the app does not currently support saving jobs, the advanced filtering options and intuitive interface ensure a seamless and effective job hunting process for all users.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1725471490/jobby_app_xkq7ti.jpg',
      usedLanguages: ['React.js']
  },
  {
      id: 6,
      title: 'Nxt Trendz Ecommerce website',
      projectDemo:'https://sknxtrendz.ccbp.tech/',
      githubLink: 'https://github.com/Kongala-Srikanth/Enhance-Nxt-Trendz.git',
      descripion: `Nxt Trendz is an eCommerce website developed using React.js, designed to provide a smooth online shopping experience. Users can browse through a variety of products, utilize filters to narrow down their choices based on categories, prices, and other attributes, and purchase items seamlessly. The application features a modern and responsive design, ensuring compatibility across different devices. React.js ensures efficient rendering and dynamic interactions, making the shopping experience intuitive and enjoyable.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1725471490/nxt_Trendz_jatsbn.jpg',
      usedLanguages: ['React.js']
  },
  {
      id: 7,
      title: 'Wikipedia Search Application',
      projectDemo:'https://kongalawiki.ccbp.tech/',
      githubLink: '',
      descripion: `The Wikipedia Search Application is a JavaScript-based tool that allows users to search for information on any topic using the Wikipedia API. Upon entering a search query, the application retrieves relevant Wikipedia articles and displays links to these articles. Users can click on the links to access detailed information directly on Wikipedia's website. The application provides a straightforward and efficient way to access vast amounts of information available on Wikipedia, enhancing the user's ability to explore various topics of interest.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1725471492/wiki_qg9ksz.jpg',
      usedLanguages: ['JavaScript']
  },
  {
      id: 8,
      title: 'Library Management',
      projectDemo:'https://kongalalibrary.ccbp.tech/',
      githubLink: '',
      descripion: `The Library Management System is a JavaScript-based web application designed for efficient book management and showcase. Users can search for books by title, author, genre, or other criteria, accessing a detailed showcase of available books. The application supports functionalities such as adding new books to the library, updating book information, and managing borrower records if integrated. It provides a user-friendly interface with responsive design, ensuring accessibility across different devices. The system aims to streamline library operations and enhance user experience through intuitive search and management features.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1725471492/book_library_ehcyvn.jpg',
      usedLanguages: ['JavaScript']
  },
  {
      id: 9,
      title: 'Random Joke Page',
      projectDemo:'https://skrandomjokes.ccbp.tech/',
      githubLink: '',
      descripion: `The Random Joke Page is a JavaScript-based web application that displays random jokes fetched from an API or a predefined collection. Users can visit the page and enjoy a random joke displayed each time they refresh or click a button. The application features a simple and clean interface, making it easy for users to access humor instantly. JavaScript fetches jokes dynamically, ensuring each visit offers a new and amusing experience. This project is perfect for adding a touch of fun and entertainment to any website or personal project.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1725471491/random_jokes_khsj4r.jpg',
      usedLanguages: ['JavaScript']
  },
  {
      id: 10,
      title: 'Time Converter',
      projectDemo:'https://kongala-srikanth.github.io/convert-time/',
      githubLink: 'https://github.com/Kongala-Srikanth/convert-time',
      descripion: `The Time Converter application is built using JavaScript to convert hours into seconds. Users can input a number of hours, and the application calculates and displays the equivalent number of seconds. This simple yet practical tool helps users quickly perform conversions for various time-related calculations. The interface is straightforward, providing an input field for hours and displaying the converted seconds instantly upon input. This project demonstrates JavaScript's capability in performing basic mathematical operations and is useful for anyone needing quick time conversions in their daily tasks.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1725471492/time_converter_kn4wrw.jpg',
      usedLanguages: ['JavaScript']
  },
  {
      id: 11,
      title: 'EMI Calculator',
      projectDemo:'https://kongala-srikanth.github.io/emi-calculator/',
      githubLink: 'https://github.com/Kongala-Srikanth/emi-calculator',
      descripion: `The EMI (Equated Monthly Installment) Calculator is a JavaScript-based tool designed to calculate both the interest per month and the total EMI for a loan or mortgage. Users input the principal amount, interest rate, and loan tenure (in months or years). The calculator then computes the monthly interest amount and the total EMI, considering the loan's duration and interest rate. This tool is invaluable for individuals and businesses alike, providing clarity on repayment amounts and helping users make informed financial decisions. The interface includes input fields for easy data entry and displays clear results for straightforward interpretation.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1725471491/emi_calculator_nsmbhc.jpg',
      usedLanguages: ['JavaScript']
  },
  {
      id: 12,
      title: 'Text Editor',
      projectDemo:'',
      githubLink: '',
      descripion: `The Text Editor application is developed using React.js, providing functionality similar to a notepad with additional styling options. Users can create and edit text with basic formatting capabilities such as underline, bold, and italic. The editor features intuitive controls or keyboard shortcuts to apply these styles to selected text. React.js manages state efficiently, ensuring real-time updates to the text and styles without page reloads. This project offers a responsive and user-friendly interface, making it suitable for personal notes, document drafting, or any scenario requiring simple text formatting.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1725471491/text_editable_m3verk.jpg',
      usedLanguages: ['React.js']
  },
  {
      id: 13,
      title: 'Character Counter',
      projectDemo:'',
      githubLink: '',
      descripion: `The Character Counter is a React.js-based application that allows users to input text and instantly see the number of characters, words, and lines in real-time. This tool provides a simple interface with a text input area where users can type or paste text. As the user inputs or modifies text, React.js dynamically updates and displays the character count, word count, and line count. This application is useful for tasks such as checking text length limits, monitoring word count in writing projects, or analyzing content structure. It offers a responsive design and efficient state management, ensuring accurate and immediate feedback to users.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729580040/social-media-1989152_1280_vua8rk.jpg',
      usedLanguages: ['React.js']
  },
  {
      id: 14,
      title: 'Editable Text Input',
      projectDemo:'',
      githubLink: '',
      descripion: 'The "Editable Text Input" project allows users to dynamically format their text within an input field. Users can easily apply various text styles such as bold, italic, and strikethrough as they type. This feature-rich text editor enhances the user experience by providing real-time formatting options, making it ideal for applications requiring rich text input or note-taking.',
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729580087/edit-6931553_1280_jkxj80.png',
      usedLanguages: ['React.js']
  },
  {
      id: 15,
      title: 'CCBP Timeline',
      projectDemo:'',
      githubLink: '',
      descripion: `The CCBP Timeline is a React.js-based interactive timeline that chronicles your journey through the CCBP Intensive 2.0 program. This timeline showcases key milestones, projects completed, and courses undertaken during the program. Users can navigate through the timeline to view significant events and accomplishments, each accompanied by details such as project descriptions, course titles, and completion dates. The application features a visually appealing design with responsive elements for optimal viewing across devices. This project serves as a comprehensive showcase of your learning and achievements throughout the CCBP Intensive 2.0 program, highlighting your growth and progress over time.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1725471489/time_line_rarv0o.jpg',
      usedLanguages: ['React.js']
  },
  {
      id: 16,
      title: 'IPL Dashboard App',
      projectDemo:'',
      githubLink: '',
      descripion: `The IPL Dashboard App is a React.js-based application that provides comprehensive statistics and insights into IPL (Indian Premier League) teams, matches, and performance metrics. Users can explore data such as the number of matches played, wins and losses for each team, and detailed team information including player rosters and past performances. The app features dynamic charts and visualizations to present data in an engaging and informative manner. It allows users to filter and sort data based on various criteria, enhancing usability and analytical capabilities. This project leverages React.js for efficient data management and rendering, providing a responsive and interactive dashboard for IPL enthusiasts and analysts alike.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1725471490/ipl_dashboard_gltlya.jpg',
      usedLanguages: ['React.js']
  },
  {
      id: 17,
      title: 'Match Game',
      projectDemo:'https://srikanth4440.ccbp.tech/',
      githubLink: '',
      descripion: `The "Match Game" is an engaging puzzle game where random images, such as fruits, animals, and places, are displayed. Players must identify and select the correct matching image from a set of options. Correct selections lead to a win, while incorrect choices result in a loss. This game challenges players' memory and recognition skills, providing an entertaining and educational experience.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1725471490/match_game_okl6xn.jpg',
      usedLanguages: ['React.js']
  },
  {
      id: 18,
      title: 'Password Manager',
      projectDemo:'',
      githubLink: '',
      descripion: 'The "Password Manager" is a basic yet essential tool for securely storing passwords. Users can save their passwords, which are masked with star symbols to ensure privacy. ',
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1725471490/password_manager_hdizjz.jpg',
      usedLanguages: ['React.js']
  },
  {
      id: 19,
      title: 'Faqs App',
      projectDemo:'',
      githubLink: '',
      descripion: 'The "FAQs App" provides users with easy access to answers for frequently asked questions. By selecting a question, users can view the corresponding answer, helping them gain clarity and resolve common queries efficiently. This app is designed to enhance user experience by offering quick and organized information.',
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729580184/question-8264110_1280_aqrutq.png',
      usedLanguages: ['React.js']
  },
  {
      id: 20,
      title: 'Stopwatch',
      projectDemo:'https://srikanth4444.ccbp.tech/',
      githubLink: '',
      descripion: `The Stopwatch application is developed using React.js, offering users a simple yet functional timer for tracking elapsed time. Users can start, stop, and reset the stopwatch with intuitive controls. The interface displays elapsed time in hours, minutes, seconds, and milliseconds, updating in real-time as the stopwatch runs. React.js manages state effectively, ensuring accurate timekeeping and seamless user interaction. This project is ideal for tasks requiring precise timing, such as sports events, cooking, or productivity tracking. It features a clean and responsive design, making it accessible across various devices for versatile use cases.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729580247/ai-generated-8811041_960_720_eoivj3.png',
      usedLanguages: ['React.js']
  },
  {
      id: 21,
      title: 'Digital Timer App',
      projectDemo:'',
      githubLink: '',
      descripion: `The Digital Timer App built with React.js provides users with a flexible and customizable timer for various timing needs. Users can set a specific countdown duration and start or pause the timer as needed. The interface displays the remaining time in hours, minutes, and seconds, updating in real-time. Users can also reset the timer to its initial state. This application leverages React.js for efficient state management and rendering, ensuring smooth and accurate timekeeping. It features a user-friendly design with controls for adjusting timer settings and clear visual feedback during countdowns. Ideal for use in cooking, workouts, and time management activities, the Digital Timer App offers reliability and convenience in tracking elapsed time.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729580346/clock-4522008_1280_xief0z.png',
      usedLanguages: ['React.js']
  },
  {
      id: 22,
      title: 'Emoji Game',
      projectDemo:'https://srikanth4443.ccbp.tech/',
      githubLink: '',
      descripion: 'The "Emoji Game" is a fun and engaging challenge where users must select from 12 unique emojis. Each time an emoji is selected, the 12 emojis randomly shuffle their positions. The goal is to select each emoji only once—if a user selects a duplicate emoji, the game ends. Successfully selecting all 12 unique emojis without repetition results in a win. This game tests memory and attention to detail, offering an exciting and interactive experience.',
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729580406/smiley-4832530_1280_uaskvw.png',
      usedLanguages: ['React.js']
  },
  {
      id: 23,
      title: 'Money Manager',
      projectDemo:'https://srikanth4442.ccbp.tech/',
      githubLink: '',
      descripion: `The "Money Manager" app is an essential tool for anyone looking to manage their finances effectively. It tracks and calculates the user's credits and debits, allowing them to see how much money they've added and spent. Users can also record the purpose of each debit transaction. The app provides a clear overview of the current balance, total credits, and total debits, helping users maintain financial control and transparency.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729584972/marketing-4646598_1280_z6qxke.png',
      usedLanguages: ['React.js']
  },
  {
      id: 24,
      title: 'Appointments App',
      projectDemo:'',
      githubLink: '',
      descripion: 'The "Appointments App" is designed to help users efficiently manage their appointments. Users can store appointment details, including the name, date, and status of each appointment. The app keeps track of active appointments, providing a clear and organized view of upcoming and past commitments, ensuring that users never miss an important meeting or event.',
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729585065/calender-3273277_1280_snnoi6.jpg',
      usedLanguages: ['React.js']
  },
  {
      id: 25,
      title: 'Comments App',
      projectDemo:'https://srikanth4441.ccbp.tech/',
      githubLink: '',
      descripion: 'The "Comments App" enables users to interact with posts by adding, liking, and deleting comments. Users can submit multiple comments under a post, creating a dynamic and engaging discussion. The app also offers the flexibility to remove comments if needed, making it an ideal platform for managing user feedback and fostering conversations.',
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729612687/cms-265128_1280_xiqufc.jpg',
      usedLanguages: ['React.js']
  },
  {
      id: 26,
      title: 'Letter Calculator',
      projectDemo:'',
      githubLink: '',
      descripion: 'The "Letter Calculator" is a straightforward tool designed to count the number of letters in a given text. Users can input any text, and the app will instantly calculate and display the total number of letters. This simple utility helps with text analysis and counting tasks, providing quick and accurate results.',
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1725471491/character_counter_tuwuwm.jpg',
      usedLanguages: ['React.js']
  },
  {
      id: 27,
      title: 'Browser History',
      projectDemo:'',
      githubLink: '',
      descripion: `The Browser History application is developed using React.js to help users track and manage their browsing activity. This app allows users to view a list of visited websites, displaying details such as URLs, page titles, and visit timestamps. Users can search and filter their browsing history, delete specific entries, and sort the data based on different criteria. React.js ensures efficient state management and dynamic rendering, providing a smooth user experience. The interface is clean and responsive, making it easy to navigate through historical data. This project is useful for users who want to review and manage their web activity efficiently.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729585192/browser-773215_1280_fwlijr.png',
      usedLanguages: ['React.js']
  },
  {
      id: 28,
      title: 'Know Fact About the Number',
      projectDemo:'https://skfacts.ccbp.tech/',
      githubLink: '',
      descripion: `The "Know Fact About the Number" application is built using JavaScript to provide interesting facts and properties about any given number input by the user. Upon entering a number, the application retrieves and displays various facts such as whether the number is prime, its factorial, its divisors, and other mathematical properties. JavaScript performs calculations dynamically, ensuring real-time generation of facts based on user input. This project offers an educational and interactive way for users to explore numerical properties and enhance their mathematical understanding.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729611708/fact-6577794_1280_wbgoli.jpg',
      usedLanguages: ['JavaScript']
  },
  {
      id: 29,
      title: 'Countries Search Population',
      projectDemo:'https://skcountries.ccbp.tech/',
      githubLink: '',
      descripion: `The Countries Search Page is a JavaScript-based application that allows users to search for countries and retrieve information such as total population. Users can input a country name in the search bar, and the application dynamically fetches and displays details including the country's population. JavaScript utilizes APIs such as the REST Countries API to fetch real-time data and present it in a user-friendly interface. This project offers a simple yet effective way for users to explore and learn about different countries and their populations.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729611774/magnets-2487101_1280_teiigc.jpg',
      usedLanguages: ['JavaScript']
  },
  {
      id: 30,
      title: 'Guess Number Game',
      projectDemo:'https://kongala-srikanth.github.io/guessing/',
      githubLink: 'https://github.com/Kongala-Srikanth/guessing',
      descripion: `The Guess the Number game is implemented using JavaScript, challenging players to guess a randomly generated number between 1 and 100. Players input their guesses, and the game provides feedback whether the guessed number is too high, too low, or correct. The game continues until the player correctly guesses the number. JavaScript handles the game logic, including generating random numbers, validating inputs, and providing interactive feedback to the player. This project offers a fun and engaging way to test guessing skills and is suitable for beginners learning JavaScript or anyone looking for a quick and enjoyable game experience.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729611856/dices-160005_1280_svqfyb.png',
      usedLanguages: ['JavaScript']
  },
  {
      id: 31,
      title: 'Addition Game',
      projectDemo:'https://skadditiongame.ccbp.tech/',
      githubLink: '',
      descripion: `The "Addition Game" is a fun and educational game where two random numbers between 1 and 100 are displayed. Users must correctly add the two numbers. If the correct answer is entered, the user wins the game; otherwise, a "Try Again" message will be displayed until the correct answer is provided. This game helps improve math skills while offering an engaging experience.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729611920/hand-982054_1280_ci81n7.jpg',
      usedLanguages: ['JavaScript']
  },
  {
      id: 32,
      title: 'Speed Typing Test',
      projectDemo:'https://skspeedtyping.ccbp.tech/',
      githubLink: '',
      descripion: `The "Speed Typing Test" is a timed typing challenge where a paragraph is displayed as soon as the user opens the website, and the timer starts. Users must type the paragraph without making any mistakes. Once completed, the app calculates and displays the total time taken to finish typing. This tool helps users improve their typing speed and accuracy.`,
      imageUrl: 'https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729611955/using-laptop-9097617_1280_o5tepr.jpg',
      usedLanguages: ['JavaScript']
  },
]

/*
const projectDemoData = [
  {
    id: 1,
    title: "NxtWatch Project",
    shortDescription: "A YouTube clone built with React.",
    fullDescription: "NxtWatch is a YouTube clone application where users can watch videos, like/dislike, and save videos. It is built using React, Redux, and Styled Components. This project also includes features like dark mode and authentication.",
    technologies: ["React", "Redux", "Styled Components"],
    githubLink: "https://github.com/Kongala-Srikanth/NxtWatchProject.git",
    liveDemo: "https://nxtwatch.netlify.app/",
    image: "https://via.placeholder.com/250",
    screenshot: "https://via.placeholder.com/600"
  },
  {
    id: 2,
    title: "Travel Trip",
    shortDescription: "A travel booking application.",
    fullDescription: "Travel Trip is a comprehensive travel booking application where users can book tickets for cars, buses, trains, and planes. Built with React, it includes features such as login, trip booking, and trip management.",
    technologies: ["React", "Node.js", "SQLite"],
    githubLink: "https://github.com/Kongala-Srikanth/TravelTrip.git",
    liveDemo: "https://traveltrip.netlify.app/",
    image: "https://via.placeholder.com/250",
    screenshot: "https://via.placeholder.com/600"
  },
  {
    id: 3,
    title: "Digital Timer",
    shortDescription: "A digital timer application with React.",
    fullDescription: "This digital timer application is built with React and includes features like start, stop, reset, and configurable time intervals. The app also demonstrates the use of hooks for state management.",
    technologies: ["React"],
    githubLink: "https://github.com/Kongala-Srikanth/DigitalTimer.git",
    liveDemo: "https://digitaltimer.netlify.app/",
    image: "https://via.placeholder.com/250",
    screenshot: "https://via.placeholder.com/600"
  },
  {
    id: 4,
    title: "Portfolio Website",
    shortDescription: "Personal portfolio website built with React.",
    fullDescription: "A personal portfolio website to showcase my projects, skills, and achievements. Built using React, this website features a responsive design, animations, and a contact form.",
    technologies: ["React", "CSS", "Bootstrap"],
    githubLink: "https://github.com/Kongala-Srikanth/PortfolioWebsite.git",
    liveDemo: "https://kongalaportfolio.netlify.app/",
    image: "https://via.placeholder.com/250",
    screenshot: "https://via.placeholder.com/600"
  },
  {
    id: 5,
    title: "Weather App",
    shortDescription: "A weather forecasting app using React and API.",
    fullDescription: "Weather App is a simple yet effective weather forecasting application. It fetches weather data from an API and displays the current weather conditions along with a 5-day forecast.",
    technologies: ["React", "API", "CSS","Javascript"],
    githubLink: "https://github.com/Kongala-Srikanth/WeatherApp.git",
    liveDemo: "https://weatherapp.netlify.app/",
    image: "https://via.placeholder.com/250",
    screenshot: "https://via.placeholder.com/600"
  },
  {
    id: 6,
    title: "Weather App",
    shortDescription: "A weather forecasting app using React and API.",
    fullDescription: "Weather App is a simple yet effective weather forecasting application. It fetches weather data from an API and displays the current weather conditions along with a 5-day forecast.",
    technologies: ["React", "API", "CSS","Javascript"],
    githubLink: "https://github.com/Kongala-Srikanth/WeatherApp.git",
    liveDemo: "https://weatherapp.netlify.app/",
    image: "https://via.placeholder.com/250",
    screenshot: "https://via.placeholder.com/600"
  },
  {
    id: 7,
    title: "Weather App",
    shortDescription: "A weather forecasting app using React and API.",
    fullDescription: "Weather App is a simple yet effective weather forecasting application. It fetches weather data from an API and displays the current weather conditions along with a 5-day forecast.",
    technologies: ["React", "API", "CSS","Javascript"],
    githubLink: "https://github.com/Kongala-Srikanth/WeatherApp.git",
    liveDemo: "https://weatherapp.netlify.app/",
    image: "https://via.placeholder.com/250",
    screenshot: "https://via.placeholder.com/600"
  },
  {
    id: 8,
    title: "Weather App",
    shortDescription: "A weather forecasting app using React and API.",
    fullDescription: "Weather App is a simple yet effective weather forecasting application. It fetches weather data from an API and displays the current weather conditions along with a 5-day forecast.",
    technologies: ["React", "API", "CSS","Javascript"],
    githubLink: "https://github.com/Kongala-Srikanth/WeatherApp.git",
    liveDemo: "https://weatherapp.netlify.app/",
    image: "https://via.placeholder.com/250",
    screenshot: "https://via.placeholder.com/600"
  },
  {
    id: 9,
    title: "Weather App",
    shortDescription: "A weather forecasting app using React and API.",
    fullDescription: "Weather App is a simple yet effective weather forecasting application. It fetches weather data from an API and displays the current weather conditions along with a 5-day forecast.",
    technologies: ["React", "API", "CSS","Javascript"],
    githubLink: "https://github.com/Kongala-Srikanth/WeatherApp.git",
    liveDemo: "https://weatherapp.netlify.app/",
    image: "https://via.placeholder.com/250",
    screenshot: "https://via.placeholder.com/600"
  },
  {
    id: 10,
    title: "Weather App",
    shortDescription: "A weather forecasting app using React and API.",
    fullDescription: "Weather App is a simple yet effective weather forecasting application. It fetches weather data from an API and displays the current weather conditions along with a 5-day forecast.",
    technologies: ["React", "API", "CSS","Javascript"],
    githubLink: "https://github.com/Kongala-Srikanth/WeatherApp.git",
    liveDemo: "https://weatherapp.netlify.app/",
    image: "https://via.placeholder.com/250",
    screenshot: "https://via.placeholder.com/600"
  },
  {
    id: 11,
    title: "Weather App",
    shortDescription: "A weather forecasting app using React and API.",
    fullDescription: "Weather App is a simple yet effective weather forecasting application. It fetches weather data from an API and displays the current weather conditions along with a 5-day forecast.",
    technologies: ["React", "API", "CSS","Javascript"],
    githubLink: "https://github.com/Kongala-Srikanth/WeatherApp.git",
    liveDemo: "https://weatherapp.netlify.app/",
    image: "https://via.placeholder.com/250",
    screenshot: "https://via.placeholder.com/600"
  },
  {
    id: 12,
    title: "Weather App",
    shortDescription: "A weather forecasting app using React and API.",
    fullDescription: "Weather App is a simple yet effective weather forecasting application. It fetches weather data from an API and displays the current weather conditions along with a 5-day forecast.",
    technologies: ["React", "API", "CSS","Javascript"],
    githubLink: "https://github.com/Kongala-Srikanth/WeatherApp.git",
    liveDemo: "https://weatherapp.netlify.app/",
    image: "https://via.placeholder.com/250",
    screenshot: "https://via.placeholder.com/600"
  },
  {
    id: 13,
    title: "Weather App",
    shortDescription: "A weather forecasting app using React and API.",
    fullDescription: "Weather App is a simple yet effective weather forecasting application. It fetches weather data from an API and displays the current weather conditions along with a 5-day forecast.",
    technologies: ["React", "API", "CSS","Javascript"],
    githubLink: "https://github.com/Kongala-Srikanth/WeatherApp.git",
    liveDemo: "https://weatherapp.netlify.app/",
    image: "https://via.placeholder.com/250",
    screenshot: "https://via.placeholder.com/600"
  },
  {
    id: 14,
    title: "Weather App",
    shortDescription: "A weather forecasting app using React and API.",
    fullDescription: "Weather App is a simple yet effective weather forecasting application. It fetches weather data from an API and displays the current weather conditions along with a 5-day forecast.",
    technologies: ["React", "API", "CSS","Javascript"],
    githubLink: "https://github.com/Kongala-Srikanth/WeatherApp.git",
    liveDemo: "https://weatherapp.netlify.app/",
    image: "https://via.placeholder.com/250",
    screenshot: "https://via.placeholder.com/600"
  },
  {
    id: 15,
    title: "Weather App",
    shortDescription: "A weather forecasting app using React and API.",
    fullDescription: "Weather App is a simple yet effective weather forecasting application. It fetches weather data from an API and displays the current weather conditions along with a 5-day forecast.",
    technologies: ["React", "API", "CSS","Javascript"],
    githubLink: "https://github.com/Kongala-Srikanth/WeatherApp.git",
    liveDemo: "https://weatherapp.netlify.app/",
    image: "https://via.placeholder.com/250",
    screenshot: "https://via.placeholder.com/600"
  },
  {
    id: 16,
    title: "Weather App",
    shortDescription: "A weather forecasting app using React and API.",
    fullDescription: "Weather App is a simple yet effective weather forecasting application. It fetches weather data from an API and displays the current weather conditions along with a 5-day forecast.",
    technologies: ["React", "API", "CSS","Javascript"],
    githubLink: "https://github.com/Kongala-Srikanth/WeatherApp.git",
    liveDemo: "https://weatherapp.netlify.app/",
    image: "https://via.placeholder.com/250",
    screenshot: "https://via.placeholder.com/600"
  },
  {
    id: 17,
    title: "Weather App",
    shortDescription: "A weather forecasting app using React and API.",
    fullDescription: "Weather App is a simple yet effective weather forecasting application. It fetches weather data from an API and displays the current weather conditions along with a 5-day forecast.",
    technologies: ["React", "API", "CSS","Javascript"],
    githubLink: "https://github.com/Kongala-Srikanth/WeatherApp.git",
    liveDemo: "https://weatherapp.netlify.app/",
    image: "https://via.placeholder.com/250",
    screenshot: "https://via.placeholder.com/600"
  },
  {
    id: 18,
    title: "Weather App",
    shortDescription: "A weather forecasting app using React and API.",
    fullDescription: "Weather App is a simple yet effective weather forecasting application. It fetches weather data from an API and displays the current weather conditions along with a 5-day forecast.",
    technologies: ["React", "API", "CSS","Javascript"],
    githubLink: "https://github.com/Kongala-Srikanth/WeatherApp.git",
    liveDemo: "https://weatherapp.netlify.app/",
    image: "https://via.placeholder.com/250",
    screenshot: "https://via.placeholder.com/600"
  },
  {
    id: 19,
    title: "Weather App",
    shortDescription: "A weather forecasting app using React and API.",
    fullDescription: "Weather App is a simple yet effective weather forecasting application. It fetches weather data from an API and displays the current weather conditions along with a 5-day forecast.",
    technologies: ["React", "API", "CSS","Javascript"],
    githubLink: "https://github.com/Kongala-Srikanth/WeatherApp.git",
    liveDemo: "https://weatherapp.netlify.app/",
    image: "https://via.placeholder.com/250",
    screenshot: "https://via.placeholder.com/600"
  },
  {
    id: 20,
    title: "Weather App",
    shortDescription: "A weather forecasting app using React and API.",
    fullDescription: "Weather App is a simple yet effective weather forecasting application. It fetches weather data from an API and displays the current weather conditions along with a 5-day forecast.",
    technologies: ["React", "API", "CSS","Javascript"],
    githubLink: "https://github.com/Kongala-Srikanth/WeatherApp.git",
    liveDemo: "https://weatherapp.netlify.app/",
    image: "https://via.placeholder.com/250",
    screenshot: "https://via.placeholder.com/600"
  },
  {
    id: 21,
    title: "Weather App",
    shortDescription: "A weather forecasting app using React and API.",
    fullDescription: "Weather App is a simple yet effective weather forecasting application. It fetches weather data from an API and displays the current weather conditions along with a 5-day forecast.",
    technologies: ["React", "API", "CSS","Javascript"],
    githubLink: "https://github.com/Kongala-Srikanth/WeatherApp.git",
    liveDemo: "https://weatherapp.netlify.app/",
    image: "https://via.placeholder.com/250",
    screenshot: "https://via.placeholder.com/600"
  },
  {
    id: 22,
    title: "Weather App",
    shortDescription: "A weather forecasting app using React and API.",
    fullDescription: "Weather App is a simple yet effective weather forecasting application. It fetches weather data from an API and displays the current weather conditions along with a 5-day forecast.",
    technologies: ["React", "API", "CSS","Javascript"],
    githubLink: "https://github.com/Kongala-Srikanth/WeatherApp.git",
    liveDemo: "https://weatherapp.netlify.app/",
    image: "https://via.placeholder.com/250",
    screenshot: "https://via.placeholder.com/600"
  },
];

*/

const ProjectsShowcase = () => {
  const [projects, setProjects] = useState(projectsList);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearchTerm = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || project.usedLanguages.includes(filter);
    return matchesSearchTerm && matchesFilter;
  });




  return (
    <>
    <div className='project-section-container' id='projects'>
      <div class="wrapper">
        <div class="bg"> Projects </div>
        <div class="fg"> Projects </div>
      </div>
        <div className='project-section-main-card'>
            <div className="project-section">
            <div className="search-filter-bar">
                <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={handleSearchChange}
                className='search-filter-bar'
                />
                <div className="filters">
                {['All', 'HTML/CSS', 'Bootstrap', 'Javascript', 'React.js', 'API'].map((tech) => (
                    <button className='filters' key={tech} onClick={() => handleFilterChange(tech)}>
                    {tech}
                    </button>
                ))}
                </div>
            </div>

            <div className="project-grid">
                {filteredProjects.map((project) => (
                <div className="project-card" key={project.id} onClick={() => handleProjectClick(project)}>
                    <img src={project.imageUrl} alt={project.title} />
                    <h3>{project.title}</h3>
                    <p className='project-description-text'>{project.descripion}</p>
                </div>
                ))}
            </div>

            {selectedProject && (
                <div className="project-modal">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.descripion}</p>

                <h2 className='login-details-heading'>Login Details</h2>
                <p className='login-details'>Username: <span className='login-details-span'>rahul</span></p>
                <p className='login-details'>Password: <span className='login-details-span'>rahul@2021</span></p>
                
                <div className='project-btns-container'>
                <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer"><button type='button'>GitHub</button></a>
                <a href={selectedProject.projectDemo} target="_blank" rel="noopener noreferrer"><button type='button'>Live Demo</button></a>
                </div>
                <button className="close-modal" onClick={handleCloseModal}><IoMdCloseCircle className='close-project-icon' /></button>
                </div>
            )}
            </div>
        </div> 
    </div>
    
    </>
  );
};

export default ProjectsShowcase;
