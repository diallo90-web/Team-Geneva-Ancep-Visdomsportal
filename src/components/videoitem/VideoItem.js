import React from "react";
import ReactPlayer from "react-player";
import "./VideoItem.css"


const VideoItem = ({videoUrl}) =>{


    return(
        <div className="video-item">
            <ReactPlayer 
                width='100%' 
                height='100%'
                className = "video-item__player" 
                controls = {true}
                url={videoUrl}/>
                
            </div>
    )

}

export default VideoItem;