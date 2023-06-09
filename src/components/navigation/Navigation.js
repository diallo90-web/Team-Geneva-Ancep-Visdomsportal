import { CircleMenu, CircleMenuItem, Tooltip, TooltipPlacement } from "react-circular-menu"
import Book from "@mui/icons-material/MenuBookOutlined"
import Sound from "@mui/icons-material/AudioFileOutlined"
import Video from "@mui/icons-material/OndemandVideoOutlined"
import Photo from "@mui/icons-material/InsertPhotoOutlined"
import Brain from "@mui/icons-material/PsychologyAltOutlined"
import { Button } from "@mui/material"
import "./Test.css"
import { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive";

import CircleNav from "../circlebutton/CircleNav"




const Navigation = (props) =>{

    const [hover, setHover] = useState(false)
    const [hoverTwo, setHoverTwo] = useState(false)
    const [hoverThree, setHoverThree] = useState(false)
    const [hoverFour, setHoverFour] = useState(false)
    const [menuPressed, setMenuPresses] = useState(false)
    const [width, setWidth] = useState(window.innerWidth + "px")
    //const [menuRadius, setMenuRadius] = useState(23)

    const tabletScreen = useMediaQuery({query: '(max-width: 1024px)'})

    const inBetweenScreen = useMediaQuery({query: '(max-width: 850px)'})

    const smallTabletScreen = useMediaQuery({query: '(max-width: 768px)'})

    const mobileScreenLandscape = useMediaQuery({query: '(max-width: 640px)'})

    const mobileScreen = useMediaQuery({query: '(max-width: 480px)'})

    const isLandscape = useMediaQuery({query: '(orientation: landscape)'})

    const isPortrait = useMediaQuery({query: '(orientation: portrait)'})

    let menuRadius = 23
    let menuItemSize = 5
    
    


    useEffect(()=>{
        const handleResize = () =>{
            setWidth(window.innerWidth + "px")
        }

        window.addEventListener('resize', handleResize)
    }, [])
    

    console.log("width", width)
    console.log("menuRadius", menuRadius)
    
    props.func(menuPressed)


    const handleQuery = () =>{
        if(inBetweenScreen){
            menuRadius = 18
        }if(smallTabletScreen){
            menuRadius = 15
        }
        if (mobileScreenLandscape){
            menuRadius = 12
            menuItemSize = 4
        }
        if(mobileScreen){
            menuRadius = 10
            menuItemSize = 4
        }
    }





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

    return(
        <div onChange={handleQuery()} className="navigation-wrapper" >
        <CircleMenu  className="mainMenu"
        startAngle={202}
        rotationAngle={180}
        itemSize={menuItemSize}
        radius={menuRadius}
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