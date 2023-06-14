import SubCategoryItem from "../../components/worksSubCategory/SubCategoryItem";
import arneNaessBoker from "../../images/arnenæssbøker.png";
import arneNaessTekster from "../../images/arnenæsstekster.png";
import "./SubCategoryPage.css"

const SubCategoryPage = () => {
    return (
        <div className='grid-container-cat'>
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