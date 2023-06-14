import SoundLogo from "@mui/icons-material/VolumeUp"
import SoundLogoOff from "@mui/icons-material/VolumeMute"
import SoundItem from "../sounditem/SoundItem"
import "./SoundBox.css"
import { useState } from "react"

const SoundBox = ({soundUrl, title, description}) =>{

    const [childData, setChildData] = useState(false)

    

    const pullData = (data) =>{
        setChildData(data)
    }


    

    return(
        <div className="sound-box">
            <div className="sound-logo__wrapper">
                {childData? <SoundLogo className="sound-box__logo"  sx={{fontSize:'10rem'}} />: <SoundLogoOff className="sound-box__logo" sx={{fontSize:'10rem'}} /> }
            </div>
            <h3 className="sound-box__h3">{title}</h3>
            <p className="sound-box__p">{description}</p>
            <SoundItem pullData={pullData} audioUrl={soundUrl}/>
        </div>
    )
    
}

export default SoundBox