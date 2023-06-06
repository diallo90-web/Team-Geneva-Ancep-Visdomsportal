import './App.css';
import CarouselItem from './components/imagecarousel/ImageCarouselItem';
import Game from "./components/game/Game"
import LocationBar from "./components/shared/locationbar/LocationBar"
import Footer from "./components/shared/footer/Footer"
import YouTubePlayer from "./components/youtubevideo/YouTubePlayer"





import Card from "./components/card/Card"

import LittleBtnGhost from "./components/shared/smallbuttonghost/LittleBtnGhost"

function App() {

  const descriptionOne = "En verden av uendelige muligheter og grenseløs nysgjerrighet. Her inviteres du til å dykke ned i en reise gjennom kunnskapens dypeste daler og filosofens høyeste tinder"
  const titleOne = "Oppdag, Undersøk, Utforsk"
  const videoTitleOne = "Fantasi..."
  const videoTitleTwo = "Man glemmer..."
  return (
    <div className="main-wrapper">
      <LocationBar/>
      <CarouselItem/>
      <div className='grid-container'>
        <div className='grid-container__item-game'>
          < Game/>
        </div>

        <div className='grid-container__item-card'>
          <Card title={titleOne} description={descriptionOne} headingLevel={"h3"}/>
          <LittleBtnGhost content={"Flere Spill"}/>
        </div>
  
        <div className='grid-container__item-card-wrapper'>
          <div className='grid-container__item-card--video'>
            <Card title={videoTitleOne} description={"Er en svært viktig del av det menneskelige. Dessverre er det mange som holder fantasien tilbake fordi de synes det er flaut. Det er synd, for det gjør livet deres fattigere"} headingLevel={"h3"}/>
          </div>
          <div className='grid-container__item-video'>
          <YouTubePlayer videoId={"GJz2zVW9WHM"}/>
          </div>
          <div className='grid-container__item-card--video2'>
            <Card title={videoTitleTwo} description={  "Kanskje det beste ved å bli gammel, er at man glemmer. Selv kan jeg jo glede meg mange ganger over ting jeg glemmer og blir fortalt på nytt. Når min kone Kit Fai sier at morgen skal vi gå ut i skogen, blir jeg glad. Når jeg glemmer det, og hun gjentar det. Blir jeg glad på ny. "} headingLevel={"h3"}/>
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
