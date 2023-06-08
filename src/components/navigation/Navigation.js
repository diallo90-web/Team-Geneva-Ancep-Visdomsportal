import { CircleMenu, CircleMenuItem, Tooltip, TooltipPlacement } from "react-circular-menu"
import Book from "@mui/icons-material/MenuBookOutlined"
import Sound from "@mui/icons-material/AudioFileOutlined"
import Video from "@mui/icons-material/OndemandVideoOutlined"
import Photo from "@mui/icons-material/InsertPhotoOutlined"
import Brain from "@mui/icons-material/PsychologyAltOutlined"
import { Button } from "@mui/material"
import "./Test.css"
import { useState } from "react"




const Navigation = (props) =>{

    const [hover, setHover] = useState(false)
    const [hoverTwo, setHoverTwo] = useState(false)
    const [hoverThree, setHoverThree] = useState(false)
    const [hoverFour, setHoverFour] = useState(false)
    const [menuPressed, setMenuPresses] = useState("")

    props.func(menuPressed)


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
        startAngle={200}
        rotationAngle={180}
        itemSize={5}
        radius={23}
        rotationAngleInclusive={false}
        onMenuToggle={()=>{
            setMenuPresses(true)
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