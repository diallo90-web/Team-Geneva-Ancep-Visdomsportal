import React from "react";
import YouTube from 'react-youtube';
import "./YouTubePlayer.css"

const YouTubePlayer = ({ videoId }) => {
    //options
    const opts = {
        height: '440',
        width: '690',
    };

    const videoTitleOne = "Fantasi..."
    const videoTitleTw0 = "Man glemmer..."

    


    
        

    
      return( 
        <div className="wrapper">
          <div className="player">
            <YouTube videoId={videoId} opts={opts} className="youtube-video"/>
          </div>
        
        </div>
        
      )
    };
    
export default YouTubePlayer;