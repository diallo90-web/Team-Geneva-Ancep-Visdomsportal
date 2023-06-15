import "./BookPage.css"
import WorkItem from "../../components/workitem/WorkItem"
import bookImage from "../../images/bookdummy.jpeg"

import { Link } from "react-router-dom"
import { FaChevronCircleLeft } from "react-icons/fa"


const BookPage = () =>{
    
    const titles = [{title: "Title One", description: "bla bla bla bla bla bla bla", image: bookImage}, {title: "Title Two", description: "Descrition Two", image: bookImage} ,
    {title: "Title Three", description: "Descrition Threee", image: bookImage}, {title: "Title Four", description: "Descrition Four", image: bookImage}]

    return(
        <div className="book-page">
            <Link className="book-page__back-arrow" to="/Navigasjon/Verk">
                <FaChevronCircleLeft/>
            </Link>
            <h1 className="book-page__h1">Bøker</h1>
            <p className="book-page_p">Bøker av Arne Næss</p>
            <div className="book-page__grid-container">
                {titles.map((object) =>(
                <div className="book-page__grid-item">
                    <WorkItem
                        key={object.title}
                        title={object.title}
                        description={object.description}
                        imageUrl={object.image}
                    />

                </div>
                ))}

            </div>

        </div>
    )
}

export default BookPage