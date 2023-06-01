import React from "react";
import { useState } from "react";
import Tile from "../tile/Tile";
import { canSwap, shuffle, swap, isSolved } from "../help/helpers";
import { BOARD_SIZE, GRID_SIZE, TILE_COUNT } from "../constants/constants";
import "./Board.css"
import LittleBtn from "../../shared/smallbutton/LittleBtn"

const Board = ({imgUrl}) =>{
    const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
    const [isStarted, setIsStarted] = useState(false);
    console.log("isStarted:", isStarted)

    const shuffleTiles = () =>{
        const shuffledTiles = shuffle(tiles)
        setTiles(shuffledTiles)
    }

    const swapTiles = (tileIndex) =>{
        if(canSwap(tileIndex, tiles.indexOf(tiles.length -1))){
            const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length -1))
            setTiles(swappedTiles)
        }
    }

    const handeTileClick = (index) =>{
        swapTiles(index)
    }

    const handleShuffleClick = () =>{
        shuffleTiles()
    }

    const handleStartClick = () =>{
        shuffleTiles()
        setIsStarted(true)
    }

    const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE)
    const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE)

    const style ={
        width: BOARD_SIZE,
        height: BOARD_SIZE,
    };

    const hasWon = isSolved(tiles)


    return(
        <>
        <ul style={style} className="board">
            {tiles.map((tile, index) =>(
                <Tile
                    key ={tile}
                    index ={index}
                    imgUrl = {imgUrl}
                    tile = {tile}
                    width ={pieceWidth}
                    height = {pieceHeight}
                    handeTileClick = {handeTileClick}
                
                />
            ))}

        </ul>

        {hasWon && isStarted && <div className="message">Puzzle solved</div>}
        {!isStarted ?
        (<LittleBtn content={"Start"}  event={() => handleStartClick()}>Start</LittleBtn>):
        (<LittleBtn content={"Restart"} event={() => handleShuffleClick()}>Restart</LittleBtn>)
        }

        {!isStarted && hasWon ?
        (<div></div>):
        (<div className="message">Klarer du å samle bildet?</div>)
        }
        </>
    )
}

export default Board;