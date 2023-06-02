import React from "react";
import YouTube from 'react-youtube';
import "./YouTubePlayer.css"

const YouTubePlayer = ({ videoId }) => {
    //options
    const opts = {
        height: '440',
        width: '690',
    };
    
      return( 
        <div className="wrapper">
          <div className="over-div">
            <h3 className="video-header over">Fantasi...</h3>
            <p className="over-video-text"><p className="quote-start">"</p> Er en svært viktig del av det menneskelige. Dessverre er det mange som holder fantasien tilbake fordi de </p>
            <p className="over-video-text">synes det er flaut. Det er synd, for det gjør livet deres fattigere. <p className="quote-end">"</p></p>

          </div>
          <div className="player">
            <YouTube videoId={videoId} opts={opts} className="youtube-video"/>
          </div>
          <div className="under-div">
            <h3 className="video-header under">Man glemmer...</h3>
            <p className="under-video-text"><p className="quote-start">"</p>Kanskje det beste ved å bli gammel, er at man glemmer. Selv kan jeg jo glede meg mange ganger over ting</p>
            <p className="under-video-text">jeg glemmer og blir fortalt på nytt. Når min kone Kit Fai sier at morgen skal vi gå ut i skogen, blir jeg glad. Når</p>
            <p className="under-video-text">jeg glemmer det, og hun gjentar det. Blir jeg glad på ny. <p className="quote-end">"</p> </p>
          </div>
        </div>
        
      )
    };
    
export default YouTubePlayer;