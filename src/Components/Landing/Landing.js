import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import covidImg from "../../img/covid-pandemic.png";
import CurrentData from "../CurrentData/currentData";

let Landing = () => {
    return <div>

        <div className="LandingContainer">
            <div className="LandingCont">
                <h2>Let's fight with COVID-19 together.</h2>
                <p>We, a group of youngsters created this website to help you and keep a track of covid resources available in ujjain and nearby districts.Here is a small contribution from our side to help you meet your needs. We also expect you to do your bit by abiding to the covid protocols.Powered by DGARAGE and Medevision</p>
                <Link to="/res"><Button>Resources</Button></Link>
            </div>
            <div className="LandingCont">
                <img className="img-fluid" src={covidImg} alt="Covid Img"></img>
            </div>
        </div>
        <CurrentData></CurrentData>

    </div>
}

export default Landing;