import React from "react";
import "./LittleBtnGhost.css"

const LittleBtn = ({content, event}) => {
    return (
        <button onClick={event} className="little-btn-ghost">{content}</button>
    );
 };

 export default LittleBtn;