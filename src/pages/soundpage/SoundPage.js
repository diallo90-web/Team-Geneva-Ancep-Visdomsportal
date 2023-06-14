import SoundBox from "../../components/soundbox/SoundBox"
import "./SoundPage.css"

const SoundPage =() =>{

    return(
        <div className="sound-page">
        <h1 className="sound-page__header">LydKlipp</h1>
        <p className="sound-page__description">Bla deg igjennom lydklipp av Arne Næss</p>
        <div className="sound-page__grid-container">
            <div className="sound-page__grid-item">
                <SoundBox title={"Arne Næss Lyd"} description={"Her snakker Arne Næss om..."}/>
            </div>

            <div className="sound-page__grid-item">
                <SoundBox title={"Arne Næss Lyd 2"} description={"Her snakker Arne Næss om..."}/>
            </div>
            <div className="sound-page__grid-item">
                <SoundBox title={"Arne Næss Lyd 3"} description={"Her snakker Arne Næss om..."}/>
            </div>
            </div>

        </div>
    )
}


export default SoundPage;