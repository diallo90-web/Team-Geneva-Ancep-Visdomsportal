import "./WorkItem.css"
import LittleBtn from "../shared/smallbutton/LittleBtn";



const WorkItem = ({imageUrl, title, description, book}) =>{


    return(
        <div className={book?"book-item__wrapper" :"work-item__wrapper"}>
            <div className={book? "book-item__image--wrapper" : "work-item__image--wrapper"}>
                <img className={book? "book-tiem__image" :"work-tiem__image"} src={imageUrl}/>
            </div>
            <h3 className={book? "book-item__h3" :"work-item__h3"}>{title}</h3>
            <p className={book? "book-item__p" :"work-item__p"}>{description}</p>
            <div className="work-button">
            <LittleBtn content={"Les mer"}/>
            </div>
        </div>
    )
}

export default WorkItem;