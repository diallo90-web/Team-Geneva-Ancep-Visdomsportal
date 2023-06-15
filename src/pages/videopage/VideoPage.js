
import VideoBox from "../../components/videobox/VideoBox"
import "./VideoPage.css"
import { Link } from "react-router-dom"
import { FaChevronCircleLeft } from "react-icons/fa"


const VideoPage = () =>{


    const videoOne = "https://www.youtube.com/watch?v=H9dtTsWxkAw"
    const videoTwo = "https://www.youtube.com/watch?v=_ApBt_wPTLQ"
    const videoThree = "https://www.youtube.com/watch?v=5m5tTwg2-IM"
    
    const titleOne = "På Tvers - Arne Næss 80 år"
    const titleTwo = "Deep Ecology and Ecosophy"
    const titleThree = "Tirich Mir-Ekspedisjonen"


    const descriptionOne = "Om opplevelsen av å krysse tregrensen"
    const descriptionTwo = "Arne Næss (1994) about the difference between deep ecology and ecosophy"
    const descriptionThree = "Intervju med Arne Næss før Tirich Mir-ekspedisjonen (1964)"

    return(
        <div className="video-page">
            <Link className="video-page__back-arrow" to="/Navigasjon">
                <FaChevronCircleLeft/>
            </Link>
            <h1 className="video-page__h1">Video</h1>
            <p className="video-page__p">Filmklipp av Arne Næss</p>

            <div className="video-page__grid-container">
                <div className="video-page__grid-item">
                    <VideoBox title={titleOne} description={descriptionOne} videoUrl={videoOne}/>

                </div>

                <div className="video-page__grid-item">
                    <VideoBox title={titleTwo} description={descriptionTwo} videoUrl={videoTwo}/>

                </div>

                <div className="video-page__grid-item">
                    <VideoBox title={titleThree} description={descriptionThree} videoUrl={videoThree}/>

                </div>

            </div>

        </div>
    )
}

export default VideoPage