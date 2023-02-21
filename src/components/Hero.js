import React from "react";
import AirbnbHero from "../images/airbnb_exp.png"

function Hero() {
    return (
        <section className="hero--container">
            <img className="hero--img" src={AirbnbHero} alt="Experiences Img"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by
                one of a kind hosts-all without leaving home.
            </p>
        </section>
    )
}

export default Hero;