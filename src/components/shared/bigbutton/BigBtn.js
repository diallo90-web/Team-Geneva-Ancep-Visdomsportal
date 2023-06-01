import React from "react";
import "./BigBtn.css"

const BigBtn = ({content, event}) => {
    return (
        <button onClick={event} className="big-btn">{content}</button>
    );
};

export default BigBtn;