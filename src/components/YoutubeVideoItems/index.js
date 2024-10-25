import {formatDistanceToNow} from 'date-fns'
import './index.css'



const YoutubeVideoItems = props => {
    const {video, videoUrl} = props
    const {title, channelTitle, thumbnails, publishedAt} = video
    const videoTitle = title.split("|")[0].split('#')[0]
    //const videoTitle = title.split("#")[0].split('| Technical Srikanth').join(' ').split('|Technical Srikanth')
    const dateInString = formatDistanceToNow(publishedAt).split(' ').splice(-2)
    const publishedDate = `${dateInString[0]} ${dateInString[1]} ago...`

    // console.log(videoUrl)

    return (
        <div  className="video-card">
            <img src={thumbnails.high.url} alt={videoTitle} className="video-thumbnail" />
            <div className="video-info">
              <h3 className="video-title">{videoTitle}</h3>
              <div className='video-details-container'>
                <div className='channel-title-container'>
                    <p className="video-channel">{channelTitle}</p>
                    <p className="video-date">{publishedDate}</p>
                </div>
                <div>
                    <a href={`https://www.youtube.com/watch?v=${videoUrl}`} target="_blank" rel="noopener noreferrer" className="watch-now-btn">
                        <button type='button' className='hide-btn watch-btn'>Watch Now</button>   
                    </a>
                </div>
              </div>
            </div>
          </div>
    )
}

export default YoutubeVideoItems