import "./Card.css"

const Card = ({title, description, headingLevel}) =>{
    const validTitleValues = ["h1", "h3"]
    const safeTitle = headingLevel? headingLevel.toLowerCase() : ""
    const Title = validTitleValues.includes(safeTitle) ? safeTitle : "h1"

    const checkSize = Title == "h1" ? "card-h1" : "card-h3"

    console.log(checkSize)
    return(
        <div className="card-wrapper">

            <Title className = {checkSize}>{title}</Title>

            <p className="card-description">{description}</p>


        </div>
    )
}

export default Card