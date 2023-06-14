import "./SubCategoryItem.css";
import {FaChevronRight} from "react-icons/fa";
import { Link } from "react-router-dom";


const SubCategoryItem = ({imgUrl, title, description, link}) => {



    return (
        <Link to={link} className="sub-category-container">
            <div className="sub-category-container__img-wrapper">
                <img className="img-wrapper__img" src={imgUrl} alt={imgUrl}/>
            </div>
            <div className="sub-category-container__description-wrapper">
                <h3 className="description-wrapper__h3">
                    {title}
                    <FaChevronRight className="description-wrapper__arrow"/>
                </h3>
                <p className="description-wrapper__p">{description}</p>
            </div>
        </Link>
    )

}

export default SubCategoryItem;