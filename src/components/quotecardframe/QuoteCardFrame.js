import "./QuoteCardFrame.css"

const QuoteCardFrame = ({title, description, headingLevel}) =>{
    const validTitleValues = ["h1", "h3"]
    const safeTitle = headingLevel? headingLevel.toLowerCase() : ""
    const Title = validTitleValues.includes(safeTitle) ? safeTitle : "h1"

    const checkHeader = Title === "h1" ? "quote-card-frame-h1" : "quote-card-frame-h3"

    
    return(
        <div className="quote-card-frame-wrapper">
            <Title className = {checkHeader}>{title}</Title>
            <blockquote className="block-quote-frame">
                <p className="quote-card-frame-description">{description}</p>
            </blockquote>
        </div>
    )
}

export default QuoteCardFrame