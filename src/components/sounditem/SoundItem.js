import React from "react"
import { useState, useEffect } from "react"
import LittleBtn from "../shared/smallbutton/LittleBtn"
import Forward from "@mui/icons-material/FastForward"
import Rewind from "@mui/icons-material/FastRewind"
import "./SoundItem.css"
const useSound = url =>{
    const [sound] = useState(new Audio(url))
    const [playing, setPlaying] = useState(false)

    const toggle = () => setPlaying(!playing)

    const rewind = () =>{
        sound.currentTime -= 10
    }

    const forward = () =>{
        sound.currentTime += 10
    }


    useEffect(() =>{
        playing ? sound.play() : sound.pause()
    }, [playing]);

    useEffect(() =>{
        sound.addEventListener('ended', () => setPlaying(false));
        return () => {
            sound.removeEventListener('ended', () => setPlaying(false))
        };
    }, [])

    return[playing, toggle, rewind, forward]
}

const SoundItem = ({audioUrl, pullData}) =>{

    const[playing, toggle, rewind, forward] = useSound(audioUrl);
    useEffect(()=>{
        pullData(playing)
    },[playing])
    

    return(
        <div className="sound-item__wrapper">
            <Rewind className="rewind" fontSize="large" onClick = {rewind}/>
            <LittleBtn event={toggle} content={playing? "Pause" : "Play"}/>
            <Forward className="forward" fontSize="large" onClick = {forward}/>
        </div>
    )

}

export default SoundItem;