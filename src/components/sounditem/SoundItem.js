import React from "react"
import { useState, useEffect } from "react"
import LittleBtn from "../shared/smallbutton/LittleBtn"
const useSound = url =>{
    const [sound] = useState(new Audio(url))
    const [playing, setPlaying] = useState(false)

    const toggle = () => setPlaying(!playing)

    useEffect(() =>{
        playing ? sound.play() : sound.pause()
    }, [playing]);

    useEffect(() =>{
        sound.addEventListener('ended', () => setPlaying(false));
        return () => {
            sound.removeEventListener('ended', () => setPlaying(false))
        };
    }, [])

    return[playing, toggle]
}

const SoundItem = ({audioUrl, pullData}) =>{

    const[playing, toggle] = useSound(audioUrl);

    pullData(playing)

    return(
        <div className="sound-item__wrapper">
            <LittleBtn event={toggle} content={playing? "Pause" : "Play"}/>
        </div>
    )

}

export default SoundItem;