import "./WorkItem.css"



const WorkItem = ({imageUrl, title, description, btnText}) =>{


    return(
        <div className="work-item__wrapper">
            <img className="work-tiem__image" src={imageUrl}/>
            <h3 className="work-item__h3">{title}</h3>
            <p className="work-item__p">{description}</p>
        </div>
    )
}

export default WorkItem;