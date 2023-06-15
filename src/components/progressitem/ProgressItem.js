import "./ProgressItem.css"
import LockComponent from "./LockComponent";



const ProgressItem = ({title}) => {


    return (
        <div className="progress-item__wrapper">
            <h3 className="progress-item__wrapper-h3">{title}</h3>
            <LockComponent/>
        </div>
    )


}


export default ProgressItem;