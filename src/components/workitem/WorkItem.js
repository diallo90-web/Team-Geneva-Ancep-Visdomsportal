import "./WorkItem.css"
import LittleBtn from "../shared/smallbutton/LittleBtn";



const WorkItem = ({imageUrl, title, description, btnText}) =>{


    return(
        <div className="work-item__wrapper">
            <div className="work-item__image--wrapper">
                <img className="work-tiem__image" src={imageUrl}/>
            </div>
            <h3 className="work-item__h3">{title}</h3>
            <p className="work-item__p">{description}</p>
            <div className="work-button">
            <LittleBtn content={"Les mer"}/>
            </div>
        </div>
    )
}

export default WorkItem;