import SoundBox from "../../components/soundbox/SoundBox"
import "./SoundPage.css"
import { Link } from "react-router-dom"
import { FaChevronCircleLeft } from "react-icons/fa"
import call_one from "../../sound/call_one.mp3"
import call_two from "../../sound/call_two.mp3"
import call_three from "../../sound/call_three.mp3"

const SoundPage =() =>{

    const titleOne = "The Call of the Mountain part 1"
    const titleTwo = "The Call of the Mountain part 2"
    const titleThree = "The Call of the Mountain part 3"
    const descriptionOne = "Lydklipp fra fra dokumentaren \"På Tvers - Arne Næss 80 år\""

    return(
        <div className="sound-page">
        <Link className="sound-page__back-arrow" to="/Navigasjon">
            <FaChevronCircleLeft/>
        </Link>
        <h1 className="sound-page__header">LydKlipp</h1>
        <p className="sound-page__description">Bla deg igjennom lydklipp av Arne Næss</p>
        <div className="sound-page__grid-container">
            <div className="sound-page__grid-item">
                <SoundBox title={titleOne} soundUrl={call_one} description={descriptionOne}/>
            </div>

            <div className="sound-page__grid-item">
                <SoundBox title={titleTwo} soundUrl={call_two} description={descriptionOne}/>
            </div>
            <div className="sound-page__grid-item">
                <SoundBox title={titleThree} soundUrl={call_three} description={descriptionOne}/>
            </div>
            </div>

        </div>
    )
}


export default SoundPage;