import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <div>
            <button className= "back-button" onClick ={handleClick}>Return to Home Page</button>
        </div>
    )
}

export default BackButton;
