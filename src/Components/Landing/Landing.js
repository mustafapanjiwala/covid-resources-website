import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import covidImg from "../../img/covid-pandemic.png";
import CurrentData from "../CurrentData/currentData";
import facemask from "../../img/facemask.svg";
import socialDistancing from "../../img/Social Distancing.svg";
import stayhome from "../../img/stayhome.svg";
import handwash from "../../img/handwash.svg";

import fever from "../../img/Fever.svg";
import soreThroat from "../../img/sore throat.svg";
import headache from "../../img/headache.svg";
import cough from "../../img/Cough.svg";
import language from "../../assets/language";

let Landing = (props) => {
    let lan = props.lan;

    return <div>

        <div className="LandingContainer">
            <div className="LandingCont">
                <h2>{language.fightCovid[lan]}</h2>
                <p>{language.homeDesc[lan]}</p>
                <Link to="/res/dashboard"><Button>{language.resources[lan]}</Button></Link>
            </div>
            <div className="LandingCont">
                <img className="img-fluid" src={covidImg} alt="Covid Img"></img>
            </div>
        </div>
        <CurrentData lan={lan}></CurrentData>


        {/* Bottom Path */}
        <section className="precautions">
            <div class="container">
                <div class="text-center mb-5">
                    <h1>{language.preCaution[lan]}</h1>
                </div>
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-3">
                        <div class="card shadow p-3 mb-5 bg-white border-0 rounded">
                            <img src={facemask} alt="face mask" />
                            <div class="card-body">
                                <h2 class="card-text text-center">{language.wearFacemask[lan]}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="card shadow p-3 mb-5 bg-white border-0 rounded">
                            <img src={socialDistancing} alt="social distancing" />
                            <div class="card-body">
                                <h2 class="card-text text-center">{language.socialDistancing[lan]}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="card shadow p-3 mb-5 bg-white border-0 rounded">
                            <img src={stayhome} alt="stay home" />
                            <div class="card-body">
                                <h2 class="card-text text-center">{language.stayAthome[lan]}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="card shadow p-3 mb-5 bg-white border-0 rounded">
                            <img src={handwash} alt="wash hands" />
                            <div class="card-body">
                                <h2 class="card-text text-center">{language.washHands[lan]}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="symptoms">
            <div class="container">
                <div class="text-center mb-5">
                    <h1>{language.commonSymp[lan]}</h1>
                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-3">
                        <div class="card shadow p-3 mb-5 bg-white rounded text-center">
                            <div class="card-body">
                                <img src={fever} alt="fever" class="img-fluid" />
                                <h2>{language.fever[lan]}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="card shadow p-3 mb-5 bg-white rounded text-center">
                            <div class="card-body">
                                <img src={soreThroat} alt="sore throat" class="img-fluid" />
                                <h2>{language.soarThroat[lan]}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="card shadow p-3 mb-5 bg-white rounded text-center">
                            <div class="card-body">
                                <img src={headache} alt="headache" class="img-fluid" />
                                <h2>{language.headache[lan]}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="card shadow p-3 mb-5 bg-white rounded text-center">
                            <div class="card-body">
                                <img src={cough} alt="cough" class="img-fluid" />
                                <h2>{language.cough[lan]}</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>


    </div>
}

export default Landing;