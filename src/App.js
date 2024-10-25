import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer'
import Certificates from './components/Certificates'
import Youtube from './components/Youtube'
import Projects from './components/Projects'
import Carousel from './components/PorjectSmallDevice'
import PortfolioContext from './context/PortfolioContext';
import Contact from './components/Contact'
import './App.css';

class App extends Component {
  state = {
    youtubeData: [],
    error: null,
    channelId: 'UCS6duP2jSYhglU9dFlgz2hg', // Replace with the actual channel ID
    maxResults: 50, // Max results per page, adjust as needed
  };




  componentDidMount() {
    const youtubeVideoData = localStorage.getItem('youtubeData')
    //console.log(youtubeVideoData)
    if (youtubeVideoData === null){
      this.fetchVideos();
      console.log('no data in localstorage')
    }else{
      console.log('data have localstorage')
      this.setState({
        youtubeData: JSON.parse(youtubeVideoData),
        error: null,
      });
      
    }
    
  }


  fetchVideos = async () => {
    const { channelId, maxResults } = this.state;
    const API_KEY = 'AIzaSyCpKmtiDTbigClQtBehEbD7Hm3J96acdaI'; // Replace with your actual API key
    let allVideos = [];

    try {
      let nextPageToken = '';
      let totalFetched = 0;

      // Fetch pages until we have approximately 200 videos
      while (totalFetched < 200) {
        let url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`;

        if (nextPageToken) {
          url += `&pageToken=${nextPageToken}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        allVideos = [...allVideos, ...data.items];
        totalFetched += data.items.length;
        nextPageToken = data.nextPageToken;

        // Break the loop if no more videos or if we have enough
        if (!nextPageToken || totalFetched >= 200) {
          break;
        }
      }

      this.setState({
        youtubeData: allVideos,
        error: null,
      });
      localStorage.setItem('youtubeData', JSON.stringify(allVideos))

    } catch (error) {
      console.error('Error fetching YouTube data:', error);
      this.setState({ error: error.message || 'Unknown error fetching YouTube data' });
    }
  };



  render() {
    const { youtubeData, error } = this.state;
    

    return (
      <PortfolioContext.Provider value={{ youtubeData}}>
        <div>
          <Header />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Carousel/>
          <Certificates />
          <Youtube/>
          <Contact />
          <Footer />
        </div>
      </PortfolioContext.Provider>
    );
  }
}

export default App;
