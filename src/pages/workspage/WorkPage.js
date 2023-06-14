import WorkItem from "../../components/workitem/WorkItem"
import imageOne from "../../images/arne-naess.jpeg"
import imageTwo from "../../images/boksing.jpeg"
import imageThree from "../../images/arnenæssbøker.png"
import "./WorkPage.css"
import LittleBtn from "../../components/shared/smallbutton/LittleBtn"

const WorkPage = () =>{

    const titles = [{title: "Title One", description: "bla bla bla bla bla bla bla", image: imageOne}, {title: "Title Two", description: "Descrition Two", image: imageTwo} ,
                    {title: "Title Three", description: "Descrition Threee", image: imageThree}, {title: "Title Four", description: "Descrition Four", image: imageTwo}]


    return(
        <div className="work-wrapper">
        <h1 className="work-header">Tekster</h1>
        <p className="work-description">Bla deg igjennom alle tekstene til Arne Næss</p>
        <div className='grid-container__work'>
      {titles.map((object)=>(
       
        <div className="grid-item__work">
            <WorkItem
                key={object.title}
                title={object.title}
                description={object.description}
                imageUrl={object.image}
        />

        {/*<LittleBtn content={"Les mer"}/>*/}

        </div>
        

      ))}

    </div>
    </div>
    )
}

export default WorkPage;
