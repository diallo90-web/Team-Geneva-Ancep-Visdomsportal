import SubCategoryItem from "../../components/worksSubCategory/SubCategoryItem";
import arneNaessBoker from "../../images/arnenæssbøker.png";
import arneNaessTekster from "../../images/arnenæsstekster.png";
import { Link } from "react-router-dom";
import { FaChevronCircleLeft } from "react-icons/fa";

import "./SubCategoryPage.css"

const SubCategoryPage = () => {
    return (
        <div className='grid-container-cat'>
            
            <div className="grid-container-cat__description">
                <Link className="description__back-arrow" to="/Navigasjon">
                    <FaChevronCircleLeft/>
                </Link>
                <h1 className="description__h1">Verk</h1>
                <p className="description__p">Velg mellom Arne Næss' arkiverte bøker og tekster</p>
            </div>
            <div className="grid-item-cat">
                <SubCategoryItem link="/Navigasjon/Verk/Boker" imgUrl={arneNaessBoker} title="Bøker" description="Her finner du et rikt utvalg av bøker Arne Næss har skrevet." />
            </div>
            <div className="grid-item-cat">
                <SubCategoryItem link="/Navigasjon/Verk/Tekster" imgUrl={arneNaessTekster} title="Tekster" description="Her finner du et arkiv med tekster skrevet av Arne Næss." />
            </div>
        </div>
    );
}

export default SubCategoryPage;