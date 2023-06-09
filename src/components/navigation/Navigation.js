import { CircleMenu, CircleMenuItem, Tooltip, TooltipPlacement } from "react-circular-menu"
import Book from "@mui/icons-material/MenuBookOutlined"
import Sound from "@mui/icons-material/AudioFileOutlined"
import Video from "@mui/icons-material/OndemandVideoOutlined"
import Photo from "@mui/icons-material/InsertPhotoOutlined"
import Brain from "@mui/icons-material/PsychologyAltOutlined"
import { Button } from "@mui/material"
import "./Test.css"
import { useState, useEffect } from "react"
import CircleNav from "../circlebutton/CircleNav"




const Navigation = (props) =>{

    const [hover, setHover] = useState(false)
    const [hoverTwo, setHoverTwo] = useState(false)
    const [hoverThree, setHoverThree] = useState(false)
    const [hoverFour, setHoverFour] = useState(false)
    const [menuPressed, setMenuPresses] = useState(false)
    const [matches, setMatches] = useState(window.matchMedia("(min-width: 800px)").matches)
    const [matchesTwo, setMatchesTwo] = useState(window.matchMedia("(min-width: 640px)").matches)
    const [matchesThree, setMatchesThree] = useState(window.matchMedia("(min-width: 550px)").matches)

    props.func(menuPressed)


    let menuSize;
    /**
     * Use react-media-hook
     */


    useEffect(()=>{
        window
            .matchMedia("(min-width: 800px)")
            .addEventListener("change", e => setMatches(e.matches))
        window
            .matchMedia("(min-width: 640px)").addEventListener("change", e => setMatchesTwo(e.matches))
        window
            .matchMedia("(min-width: 550px)").addEventListener("change", e => setMatchesThree(e.matches))

    }, [])


    const handleMenuSize = () =>{
        if(matches){
            menuSize = 23
    
        }else if(matchesTwo){
            menuSize = 18
        }else if(matchesThree){
            menuSize = 15
        }else if(!matchesThree){
            menuSize = 10
        }
    }

    console.log("matches", matches.valueOf())

    handleMenuSize()


    const handleMouseEnter = () =>{
        setHover(true)
    }

    const handleMouseLeave = () =>{
        setHover(false)
        
    }

    const handleMouseEnterTwo = () =>{
        setHoverTwo(true)
    }

    const handleMouseLeaveTwo = () =>{
        setHoverTwo(false)
    }

    const handleMouseEnterThree = () =>{
        setHoverThree(true)
    }

    const handleMouseLeaveThree = () =>{
        setHoverThree(false)
    }

    const handleMouseEnterFour = () =>{
        setHoverFour(true)
    }

    const handleMouseLeaveFour = () =>{
        setHoverFour(false)
    }

    console.log(menuPressed)

    const Menu = () => {
        return(
        <Button>
            <Brain fontSize="large"/>
        </Button>
        
        )
        
    }
    return(
        <div className="navigation-wrapper">
        <CircleMenu className="mainMenu"
        startAngle={202}
        rotationAngle={180}
        itemSize={5}
        radius={menuSize}
        rotationAngleInclusive={false}
        menuToggleElement={<CircleNav menuActive={menuPressed}/>}
        onMenuToggle={(active)=>{
            setMenuPresses(active)
        }}
        

        
    
        >
        <CircleMenuItem 
        onMouseEnter ={handleMouseEnter}
        onMouseLeave ={handleMouseLeave}
        className="menu"
        
        style={{background: hover? '#96608e': '#d7acc1',
                border: 'none'}}
        tooltip="Verk"
        tooltipPlacement={TooltipPlacement.Bottom}>
        <Book fontSize="large" className="book"/>

        </CircleMenuItem>

        <CircleMenuItem className="menu"
        onMouseEnter ={handleMouseEnterTwo}
        onMouseLeave ={handleMouseLeaveTwo}
        style={{background: hoverTwo? '#96608e': '#d7acc1',
                
                border: 'none'}}
        
        tooltip="Lyd"
        tooltipPlacement={TooltipPlacement.Bottom}>
        
        <Sound fontSize="large"/>

        </CircleMenuItem>

        <CircleMenuItem className="menu"
        onMouseEnter ={handleMouseEnterThree}
        onMouseLeave ={handleMouseLeaveThree}
        style={{background: hoverThree? '#96608e': '#d7acc1',
                border: 'none'}}
        tooltip="Video"
        tooltipPlacement={TooltipPlacement.Bottom}>
        <Video fontSize="large"/>
        </CircleMenuItem>

        <CircleMenuItem className="menu"
        onMouseEnter ={handleMouseEnterFour}
        onMouseLeave ={handleMouseLeaveFour}
        style={{background: hoverFour? '#96608e': '#d7acc1',
                border: 'none'}}
        tooltip="Bilde"
        tooltipPlacement={TooltipPlacement.Bottom}>
        <Photo fontSize="large"/>

        </CircleMenuItem>

        </CircleMenu>

        </div>

        
    )

}

export default Navigation;