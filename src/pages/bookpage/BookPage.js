import "./BookPage.css"
import WorkItem from "../../components/workitem/WorkItem"
import bookImage from "../../images/bookdummy.jpeg"
import card_data from "../../assets/card_data.json"
import { bookImages } from "../../assets/imageHelper"

import { Link } from "react-router-dom"
import { FaChevronCircleLeft } from "react-icons/fa"


const BookPage = () =>{
    
    const images = bookImages()

    return(
        <div className="book-page">
            <Link className="book-page__back-arrow" to="/Navigasjon/Verk">
                <FaChevronCircleLeft/>
            </Link>
            <h1 className="book-page__h1">Bøker</h1>
            <p className="book-page_p">Bøker av Arne Næss</p>
            <div className="book-page__grid-container">
                {card_data.books.map((object, index) =>(
                <div className="book-page__grid-item">
                    <WorkItem
                        key={object.id}
                        book={true}
                        title={object.title}
                        imageUrl={images[index].image}
                    />

                </div>
                ))}

            </div>

        </div>
    )
}

export default BookPage