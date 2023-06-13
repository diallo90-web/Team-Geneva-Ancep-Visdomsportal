import React from "react";
import YouTube from 'react-youtube';
import "./YouTubePlayer.css"

const YouTubePlayer = ({ videoId }) => {
    const opts = {
        height: '100%',
        width: '100%',
    };    
      return( 
        <div className="youtube-wrapper">
          <div className="player">
            <YouTube videoId={videoId} opts={opts} className="youtube-video"/>
          </div>
        </div>
        
      )
    };
    
export default YouTubePlayer;