import logo from './logo.svg';
import './App.css';
import CarouselItem from './components/imagecarousel/ImageCarouselItem';
import Game from "./components/game/Game"
import LocationBar from "./components/shared/locationbar/LocationBar"
import Footer from "./components/shared/footer/Footer"
import YouTubePlayer from "./components/youtubevideo/YouTubePlayer"
import MediumBtn from "./components/shared/mediumbutton/MediumBtn"
function App() {

  
  return (
    <div className="App">
      <LocationBar/>
      <CarouselItem/>
      <div className='game-wrapper'>
        <h3 className='game-header'>Oppdag, Undersøk, Utforsk</h3>
        <p className='game-p'>En verden av uendelige muligheter og 
        grenseløs nysgjerrighet.<br/></p> <p className='game-p'>Her inviteres du til å dykke ned i en reise gjennom kunnskapens dypeste daler 
        og filosofens høyeste tinder</p>
        <div className='game-box'>
        < Game/>
        </div>
      </div>
      <div className='video-div'></div>
      <YouTubePlayer videoId={"GJz2zVW9WHM"}/>
      <div className='video-div'></div>
      <Footer/>
    </div>
  );
}

export default App;
