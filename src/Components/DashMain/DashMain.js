import { Link } from "react-router-dom";
import "./DashMain.css";
import language from "../../assets/language";

let DashMain = (props) => {
    let lan = props.lan;

    return <div>
        <section id="cardmenu">
            <div class="container">
                <div class="row justify-content-center align-items-center text-center">
                    <div class="col-lg-3 my-2">
                        <div class="card shadow border-0 customBox">
                            <h2 class="card-title">{language.covidHelpline[lan]}</h2>
                            <div class="customCardBody">
                                <Link to="/res/helpline"><button type="button" class="btn btn-primary">{language.clickHere[lan]}</button></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 my-2">
                        <div class="card customBox shadow border-0">
                            <h2 class="card-title">{language.regVol[lan]}</h2>
                            <div class="customCardBody">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf1TcukBNr8GU-fdqcB3RpVGdtg1zvcbn2G1IevIEpkFiNIwA/viewform?usp=sf_link"><button type="button" class="btn btn-primary">{language.clickHere[lan]}</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 my-2">
                        <div class="card customBox shadow border-0">
                            <h2 class="card-title">{language.oxygen[lan]}</h2>
                            <div class="customCardBody">
                                <Link to="/res/oxygen"><button type="button" class="btn btn-primary">{language.clickHere[lan]}</button></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 my-2">
                        <div class="card customBox shadow border-0">
                            <h2 class="card-title">{language.tiffinserv[lan]}</h2>
                            <div class="customCardBody">
                                <Link to="/res/tiffinserv"><button type="button" class="btn btn-primary">{language.clickHere[lan]}</button></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 my-2">
                        <div class="card customBox shadow border-0">
                            <h2 class="card-title">{language.oxycon[lan]}</h2>
                            <div class="customCardBody">
                                <Link to="/res/oxycon"><button type="button" class="btn btn-primary">{language.clickHere[lan]}</button></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 my-2">
                        <div class="card customBox shadow border-0">
                            <h2 class="card-title">{language.regPlasma[lan]}</h2>
                            <div class="customCardBody">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdMoA3naNEoj5T46xgvDGGDJEEyu9Pzr0S-osrbeDmzqsaZLA/viewform?usp=sf_link"><button type="button" class="btn btn-primary">{language.clickHere[lan]}</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 my-2">
                        <div class="card customBox shadow border-0">
                            <h2 class="card-title">{language.hospitalbeds[lan]}</h2>
                            <div class="customCardBody">
                                <Link to="/res/hospitalbeds"><button type="button" class="btn btn-primary">{language.clickHere[lan]}</button></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 my-2">
                        <div class="card customBox shadow border-0">
                            <h2 class="card-title">{language.homeIso[lan]}</h2>
                            <div class="customCardBody">
                                <Link to="/res/homeiso"><button type="button" class="btn btn-primary">{language.clickHere[lan]}</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default DashMain;