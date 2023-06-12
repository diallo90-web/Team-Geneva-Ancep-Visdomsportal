import CarouselItem from '../../components/imagecarousel/ImageCarouselItem';
import Game from "../../components/game/Game"
import YouTubePlayer from "../../components/youtubevideo/YouTubePlayer"
import Card from "../../components/card/Card"
import LittleBtnGhost from "../../components/shared/smallbuttonghost/LittleBtnGhost"
import QuoteCard from '../../components/quotecard/QuoteCard';
import QuoteCardTwo from '../../components/quotecardtwo/QuoteCardTwo';
import "./HomePage.css"

import ImageWithTextLeft from '../../components/ImageWithText/ImageWithTextLeft';
import ImageWithTextRight from '../../components/ImageWithText/ImageWithTextRight';
import Text from '../../components/ImageWithText/Text';
import Image from '../../components/ImageWithText/Image';
import arneRight from "../../images/arne-right2.png"
import arneLeft from "../../images/arne-left2.png"

const HomePage = () => {
    const descriptionOne = "En verden av uendelige muligheter og grenseløs nysgjerrighet. Her inviteres du til å dykke ned i en reise gjennom kunnskapens dypeste daler og filosofens høyeste tinder"
    const titleOne = "Oppdag, Undersøk, Utforsk"
    const videoTitleOne = "Fantasi"
    const videoTitleTwo = "Man glemmer"

    const titleImageOne = "Miljøforkjemper"
    const descriptionImageOne = "Arne Næss' arbeid innen dypøkologi og miljøvern kan inspirere og øke bevisstheten om viktigheten av å ta vare på naturen og miljøet. Dette kan bidra til å motivere og oppmuntre unge mennesker til å handle ansvarlig og engasjere seg i bærekraftige handlinger."
    const btnTextImageOne = "Utforsk"

    const titleImageTwo = "Selvinnsikt & Personlig Utvikling"
    const descriptionImageTwo = "Næss' filosofiske tanker om individets forhold til naturen og samfunnet kan bidra til å utvide perspektivet og skape refleksjon rundt ens verdier, livsstil og personlige mål. Hans ideer om autentisitet og harmoni med omgivelsene kan være inspirerende for unge mennesker som søker å forstå seg selv bedre og utvikle seg på en meningsfull måte."
    const btnTextImageTwo = "Oppdag"
    
    
    return (
        <div className="main-wrapper">
            
            <CarouselItem />
            <div className='grid-container'>
                <div className='grid-container__item-game'>
                    < Game />
                </div>

                <div className='grid-container__item-card'>
                    <Card title={titleOne} description={descriptionOne} headingLevel={"h3"} />
                    <LittleBtnGhost content={"Flere Spill"} />
                </div>
                <div className='grid-container__text--one'>
                    <Text title={titleImageOne} description={descriptionImageOne} btnText={btnTextImageOne}/>
                </div>
                <div className='grid-container__image--one'>
                    <Image imgSource={arneRight} backgroundColor={"green"} right={true}/>
                </div>
                <div className='grid-container__image--two'>
                    <Image imgSource={arneLeft} backgroundColor={"purple"} right={false}/>
                </div>
                <div className='grid-container__text--two'>
                <Text title={titleImageTwo} description={descriptionImageTwo} btnText={btnTextImageTwo}/>
                </div>
            </div>

        


            <div className='grid-container__item-card-wrapper'>
                <div className='grid-container__item-card--video'>
                    <QuoteCard title={videoTitleOne} description={"Er en svært viktig del av det menneskelige. Dessverre er det mange som holder fantasien tilbake fordi de synes det er flaut. Det er synd, for det gjør livet deres fattigere"} headingLevel={"h3"} />
                </div>
                <div className='grid-container__item-video'>
                    <YouTubePlayer videoId={"GJz2zVW9WHM"} />
                </div>
                <div className='grid-container__item-card--video2'>
                    <QuoteCardTwo title={videoTitleTwo} description={"Kanskje det beste ved å bli gammel, er at man glemmer. Selv kan jeg jo glede meg mange ganger over ting jeg glemmer og blir fortalt på nytt. Når min kone Kit Fai sier at morgen skal vi gå ut i skogen, blir jeg glad. Når jeg glemmer det, og hun gjentar det. Blir jeg glad på ny. "} headingLevel={"h3"} />
                </div>

            </div>
        </div>
    );
}

export default HomePage