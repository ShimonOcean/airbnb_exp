import React from "react";
import KatieImg from "../images/katie-zaferes.png"
import StarImg from "../images/star.png"

function Card() {
    return (
        <div className="card--container">
            <img className="card--image" src={KatieImg} alt="katie-zaferes"/>
            <div className="card--stats">
                <img className="card--star" src={StarImg} alt="star"/>
                <span>5.0</span>
                <span>(6) -</span>
                <span>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $120</span> / person</p>
        </div>
    )
}

export default Card;