import "./ProgressPage.css"
import arneLeft from "../../images/arne-right2.png";
import ProgressItem from "../../components/progressitem/ProgressItem";



const ProgressPage = () =>{


    return(
        <div className="progress-page">
            <h1 className="progress-page__title">Næss' Filosofi</h1>
            <div className="progress-page__description-container">
                <div className="progress-page__description">
                    <h3 className="progress-page__description-h3">Fremgang gjennom samtaler.</h3>
                    <p className="progress-page__description-p">Utforsk ulike perspektiver, del kunnskap og oppnå personlig og sosial utvikling gjennom engasjerende oppgaver. Bli med oss på denne reisen mot vekst og oppdag kraften i inspirerende interaksjoner og reflekterende dialoger med Arne Næss.</p>
                </div>
            </div>

            <div className="progress-page__grid-container">
                <div className="progress-page__grid-item">
                    <ProgressItem title="Kapitalisme på nytt?"/>
                </div>
                <div className="progress-page__grid-item">
                    <ProgressItem title="Vi er medlemmer av et samfunn, ikke brikker"/>
                </div>
                <div className="progress-page__grid-item">
                    <ProgressItem title="Mennesket leker, Gud leker"/>
                </div>
                <div className="progress-page__grid-item">
                    <ProgressItem title="Fremtiden er total åpen"/>
                </div>
            </div>

        </div>
    )
}

export default ProgressPage