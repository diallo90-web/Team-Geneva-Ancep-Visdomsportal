import React from "react";
import "./MediumBtn.css"

const MediumBtn = ({content, event}) => {
    return (
        < button onClick={event} className="medium-btn">{content}</button>
    );
 };

 export default MediumBtn;