import Navigation from "../../components/navigation/Navigation"
import CardTwo from "../../components/cardtwo/CardTwo"
import "./NavigationPage.css"
import { useState } from "react"
import { useMediaQuery } from "react-responsive";

const NavigationPage = () => {

    const [childData, setChildData] = useState("")

    const pull_data = (data) =>{
        setChildData(data)
    }

    const mobileScreen = useMediaQuery({query: '(max-width: 480px)'})

console.log(childData)

    return (
        <div className={"navigation-page-wrapper"}>
            <CardTwo  title={childData? "":"Naviger & Utforsk"} headingLevel={mobileScreen? "h3":"h1"} description={childData? " ": mobileScreen? "Trykk på sirkelen for å komme i gang!" :"Velkommen til navigasjonssiden. Her kan du navigere deg rundt i Arne Næss sin verden. Trykk på sirkelen for å komme i gang!" }/>
            <div className="component-wrapper">
            <Navigation func ={pull_data}/>
            </div>
        </div>
    )

}

export default NavigationPage;