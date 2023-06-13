import "./Image.css"

const Image = ({imgSource, imgAlt, backgroundColor, right}) =>{

    const validColor = ["green", "purple"]
    const safeColor = backgroundColor? backgroundColor.toLowerCase() : "";
    const color = validColor.includes(safeColor) ? safeColor : "green"

    const checkColor = color === "green" ? "image-wrapper__green" : "image-wrapper__purple"


    return(
        <div className= "image-container">
            <div className= {checkColor}>
                <img className={right? 'image-wrapper__img--right' : 'image-wrapper__img--left'} src={imgSource} alt={imgAlt}/>
            </div>
        </div>
    )
}

export default Image;