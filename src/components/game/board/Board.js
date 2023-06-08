import React from "react";
import { useState, useEffect } from "react";
import Tile from "../tile/Tile";
import { canSwap, shuffle, swap, isSolved } from "../help/helpers";
import { BOARD_SIZE, BOARD_SIZE_SMALL, GRID_SIZE, TILE_COUNT } from "../constants/constants";
import "./Board.css"
import LittleBtn from "../../shared/smallbutton/LittleBtn"


const Board = ({imgUrl}) =>{
    const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
    const [isStarted, setIsStarted] = useState(false);
    const [matches, setMatches] = useState(window.matchMedia("(min-width: 480px)").matches)
    let boardSize;

    console.log("isStarted:", isStarted)

    useEffect(()=>{
        window
            .matchMedia("(min-width: 480px)")
            .addEventListener("change", e => setMatches(e.matches))

    }, [])

    

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

    const handleBoardSize = () =>{
        if(matches){
            boardSize = BOARD_SIZE
        }else{
            boardSize = BOARD_SIZE_SMALL
        }
    }
    handleBoardSize();
    const pieceWidth = Math.round(boardSize / GRID_SIZE)
    const pieceHeight = Math.round(boardSize / GRID_SIZE)

    const style ={
        width: boardSize,
        height: boardSize,
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
                    boardSize = {boardSize}
                
                />
            ))}

        </ul>

        <div className="btn-wrapper">

        {hasWon && isStarted && <div className="message">Puzzle solved</div>}
        {!isStarted ?
        (<LittleBtn content={"Start"}  event={() => handleStartClick()}>Start</LittleBtn>):
        (<LittleBtn content={"Restart"} event={() => handleShuffleClick()}>Restart</LittleBtn>)
        }
        

        {!isStarted && hasWon ?
        (<div></div>):
        (<div className="message">Klarer du å samle bildet?</div>)
        }
        </div>
        </>
    )
}

export default Board;