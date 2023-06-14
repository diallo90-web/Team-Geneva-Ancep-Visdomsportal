
import VideoBox from "../../components/videobox/VideoBox"
import "./VideoPage.css"
import { Link } from "react-router-dom"
import { FaChevronCircleLeft } from "react-icons/fa"


const VideoPage = () =>{


    const videoOne = "https://www.youtube.com/watch?v=H9dtTsWxkAw"
    const videoTwo = "https://www.youtube.com/watch?v=_ApBt_wPTLQ"
    const videoThree = "https://www.youtube.com/watch?v=5m5tTwg2-IM"

    return(
        <div className="video-page">
            <Link className="video-page__back-arrow" to="/Navigasjon">
                <FaChevronCircleLeft/>
            </Link>
            <h1 className="video-page__h1">Video</h1>
            <p className="video-page__p">Filmklipp av Arne Næss</p>

            <div className="video-page__grid-container">
                <div className="video-page__grid-item">
                    <VideoBox title={"Title One"} description={"bla bla bla"} videoUrl={videoOne}/>

                </div>

                <div className="video-page__grid-item">
                    <VideoBox title={"Title Two"} description={"kra kra kra"} videoUrl={videoTwo}/>

                </div>

                <div className="video-page__grid-item">
                    <VideoBox title={"Title Three"} description={"za za za"} videoUrl={videoThree}/>

                </div>

            </div>

        </div>
    )
}

export default VideoPage