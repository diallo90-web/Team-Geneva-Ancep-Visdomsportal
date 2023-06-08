import Navigation from "../../components/navigation/Navigation"
import CardTwo from "../../components/cardtwo/CardTwo"
import "./NavigationPage.css"
import { useState } from "react"

const NavigationPage = () => {

    const [childData, setChildData] = useState("")

    const pull_data = (data) =>{
        setChildData(data)
    }

   

console.log(childData)

    return (
        <div className="navigation-page-wrapper">
            <CardTwo  title={"Navigasjon"} headingLevel={"h1"} description={childData? " ": "Velkommen til navigasjonssiden, her kan du navigere deg rundt i Arne Næss sin verden. Trykk på sirkelen for å komme i gang!" }/>
            <div className="component-wrapper">
            <Navigation func ={pull_data}/>
            </div>
        </div>
    )

}

export default NavigationPage;