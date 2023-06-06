import "./QuoteCard.css"

const QuoteCard = ({title, description, headingLevel}) =>{
    const validTitleValues = ["h1", "h3"]
    const safeTitle = headingLevel? headingLevel.toLowerCase() : ""
    const Title = validTitleValues.includes(safeTitle) ? safeTitle : "h1"

    const checkHeader = Title === "h1" ? "quote-card-h1" : "quote-card-h3"

    
    return(
        <div className="quote-card-wrapper">
            <Title className = {checkHeader}>{title}</Title>
            <blockquote className="block-quote">
                <p className="quote-card-description">{description}</p>
            </blockquote>
        </div>
    )
}

export default QuoteCard