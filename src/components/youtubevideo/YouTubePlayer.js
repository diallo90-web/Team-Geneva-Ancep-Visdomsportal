import React from "react";
import YouTube from 'react-youtube';
import "./YouTubePlayer.css"

const YouTubePlayer = ({ videoId }) => {
    //options
    const opts = {
        height: '390',
        width: '640',
    };
    
      return( 
        <div className="player">
          <YouTube videoId={videoId} opts={opts} className="youtube-video"/>;
        </div>
      )
    };
    
export default YouTubePlayer;