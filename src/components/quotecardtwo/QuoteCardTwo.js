import "./QuoteCardTwo.css"

const QuoteCardTwo = ({title, description, headingLevel}) =>{
    const validTitleValues = ["h1", "h3"]
    const safeTitle = headingLevel? headingLevel.toLowerCase() : ""
    const Title = validTitleValues.includes(safeTitle) ? safeTitle : "h1"

    const checkHeader = Title === "h1" ? "quote-card-two-h1" : "quote-card-two-h3"

    
    return(
        <div className="quote-card-two-wrapper">
            <Title className = {checkHeader}>{title}</Title>
            <blockquote className="block-quote-two">
                <p className="quote-card-two-description">{description}</p>
            </blockquote>
        </div>
    )
}

export default QuoteCardTwo