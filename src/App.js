import logo from './logo.svg';
import './App.css';
import CarouselItem from './components/imagecarousel/ImageCarouselItem';
import Game from "./components/game/Game"
import LocationBar from "./components/shared/locationbar/LocationBar"
import Footer from "./components/shared/footer/Footer"
import YouTubePlayer from "./components/youtubevideo/YouTubePlayer"

function App() {

  
  return (
    <div className="App">
      <LocationBar/>
      <CarouselItem/>
      <Game/>
      <YouTubePlayer videoId={"GJz2zVW9WHM"}/>
      <Footer/>
    </div>
  );
}

export default App;
