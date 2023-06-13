import React from "react";
import "./LittleBtn.css"

const LittleBtn = ({ content, event }) => {
    return (
        <button onClick={event} className="little-btn">{content}</button>
    );
};

export default LittleBtn;