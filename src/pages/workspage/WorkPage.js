import WorkItem from "../../components/workitem/WorkItem"
import "./WorkPage.css"
import card_data from "../../assets/card_data.json"
import { useState } from "react"
import { Link } from "react-router-dom"
import { FaChevronCircleLeft } from "react-icons/fa"
import { workImages } from "../../assets/imageHelper"

const WorkPage = () => {

  const images = workImages()

  return (
    <div className="work-wrapper">
      <Link className="work__back-arrow" to="/Navigasjon/Verk">
        <FaChevronCircleLeft/>
      </Link>
      <h1 className="work-header">Tekster</h1>
      <p className="work-description">Bla deg igjennom alle tekstene til Arne Næss</p>
      <div className='grid-container__work'>
        {card_data.works.map((workObject, index) => (

          <div className="grid-item__work">
            <WorkItem
              key={workObject.id}
              book={false}
              title={workObject.title}
              description={workObject.description}
              imageUrl={images[index].image}
            />

            {/*<LittleBtn content={"Les mer"}/>*/}

          </div>


))}

      </div>
    </div>
  )
}

export default WorkPage;
