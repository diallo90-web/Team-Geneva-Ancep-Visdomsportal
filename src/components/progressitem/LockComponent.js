import React, { useState, useEffect } from "react";
import Lock from "@mui/icons-material/Lock";
import LockOpen from "@mui/icons-material/LockOpen";
import "./LockComponent.css"


const LockComponent = () => {
    const [locked, setLocked] = useState(true);
    const [iconSize, setIconSize] = useState("8rem")


    
    useEffect(() => {
        const handleResizing = () => {
            if (window.innerWidth < 1024) {
                setIconSize("5rem")
            } else {
                setIconSize("8rem")
            }
        };

        handleResizing();
        window.addEventListener("resize", handleResizing)

        return () => {
            window.removeEventListener("resize", handleResizing)
        };
    }, []);


    const toggleLock = () => {
        setLocked(!locked);
    };

    return (
        <div className="lock-component__wrapper" onClick={toggleLock}>
            {locked ? (
                <Lock className="lock-component__icon" sx={{ fontSize: iconSize }} />
            ) : (
                <LockOpen className="lock-component__icon-open" sx={{ fontSize: iconSize }} />
            )}
        </div>
    );
};

export default LockComponent;