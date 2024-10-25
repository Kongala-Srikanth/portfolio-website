import { useContext } from 'react'
import Portfolio from '../../context/PortfolioContext'
import YoutubeVideoItems from '../YoutubeVideoItems'

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { IoMdClose } from "react-icons/io";


import './index.css'

/*
const youtubeData = [
    {
      thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_1/hqdefault.jpg',
      title: 'Video Title 1',
      channelName: 'Channel Name 1',
      publishedDate: 'Jan 1, 2021',
      url: 'https://www.youtube.com/watch?v=VIDEO_ID_1',
    },

  ]
*/

const Youtube = () => {
   const {youtubeData} = useContext(Portfolio)

   //console.log(youtubeData)

    return(
    <div id='youtube' className='youtube-md-device'>
      <div class="wrapper">
        <div class="bg"> Youtube </div>
        <div class="fg"> YouTube </div>
      </div>
        
        <div className="video-gallery">
        
        {youtubeData.slice(0,6).map((video, index) => (
          <YoutubeVideoItems key={index} video={video.snippet} videoUrl={video.id.videoId}/>
        ))}
        </div>
        <Popup modal trigger={ 
          <div className='view-more-btn-container'>
            <button type='button' className='view-more-btn'>View More</button>
          </div>
          } position="right center">
            {
              close => (
            
          <div className='card-center-position'>
            <div className='project-section-main-card background-white'>
              <div className='heading-close-container'>
                <h1 className='all-videos-heading'>All Videos</h1>
                <button type='button' className='hide-btn yt-close-btn' onClick={close}>
                  <IoMdClose className='close-btn'/>
                  </button>
              </div>
              <div className='youtube-video-alignment'>
              {youtubeData.map((video, index) => (
                <YoutubeVideoItems key={index} video={video.snippet}/>
              ))}
              </div>
            </div>
          </div>
          )}
        </Popup>
      </div>
    )
}

export default Youtube