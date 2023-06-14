import "./VideoBox.css"
import VideoItem from "../videoitem/VideoItem"


const VideoBox = ({videoUrl, title, description}) =>{


    return(
        <div className="video-box">
            <h3 className="video-box__h3">{title}</h3>
            <VideoItem videoUrl={videoUrl}/>
            <p className="video-box__p">{description}</p>
        </div>
    )

}

export default VideoBox;