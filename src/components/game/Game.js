import "./Game.css"
import Board from "./board/Board"
import React from "react"
import { useState, useEffect } from "react"
import image from "../../images/boksing.jpeg"



const Game = () =>{

    const[imgUrl, setImgUrl] = useState("")

    useEffect(() =>{
        setImgUrl(image)
    }, [])


    return (
        <div className="game">
            <Board imgUrl={imgUrl}/>
        </div>
        );
    
}

export default Game