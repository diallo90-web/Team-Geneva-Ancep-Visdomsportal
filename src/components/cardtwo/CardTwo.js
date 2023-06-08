import "./CardTwo.css"

const CardTwo = ({title, description, headingLevel}) =>{
    const validTitleValues = ["h1", "h3"]
    const safeTitle = headingLevel? headingLevel.toLowerCase() : ""
    const Title = validTitleValues.includes(safeTitle) ? safeTitle : "h1"

    /* Endret på klassenavnet slik at jeg fikk sidestilt teksten til høyre */
    const checkSize = Title == "h1" ? "card-two-h1" : "card-two-h3"

    console.log(checkSize)
    return(
        
        <div className="card-two-wrapper">
            <Title className = {checkSize}>{title}</Title>

            <p className="card-two-description">{description}</p>


        </div>
    )
}

export default CardTwo