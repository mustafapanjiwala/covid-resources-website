import { Link } from "react-router-dom";

let DashMain = () => {
    return <div>
        <section id="cardmenu">
            <div class="container">
                <div class="row justify-content-center align-items-center text-center">
                    <div class="col-lg-3 my-2">
                        <div class="card py-5 shadow border-0">
                            <h2 class="card-title">Covid Helpline</h2>
                            <div class="card-body">
                                <Link to="/res/helpline"><button type="button" class="btn btn-primary">Click here</button></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 my-2">
                        <div class="card py-5 shadow border-0">
                            <h2 class="card-title">Register as Volunteer</h2>
                            <div class="card-body">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf1TcukBNr8GU-fdqcB3RpVGdtg1zvcbn2G1IevIEpkFiNIwA/viewform?usp=sf_link"><button type="button" class="btn btn-primary">Click here</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 my-2">
                        <div class="card py-5 shadow border-0">
                            <h2 class="card-title">Oxygen Supplier</h2>
                            <div class="card-body">
                                <Link to="/res/oxygen"><button type="button" class="btn btn-primary">Click here</button></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 my-2">
                        <div class="card py-5 shadow border-0">
                            <h2 class="card-title">Tiffin services</h2>
                            <div class="card-body">
                                <Link to="/res/tiffinserv"><button type="button" class="btn btn-primary">Click here</button></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 my-2">
                        <div class="card py-5 shadow border-0">
                            <h2 class="card-title">Oxygen Concentrator</h2>
                            <div class="card-body">
                                <Link to="/res/oxycon"><button type="button" class="btn btn-primary">Click here</button></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 my-2">
                        <div class="card py-5 shadow border-0">
                            <h2 class="card-title">Register as Plasma Donor</h2>
                            <div class="card-body">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdMoA3naNEoj5T46xgvDGGDJEEyu9Pzr0S-osrbeDmzqsaZLA/viewform?usp=sf_link"><button type="button" class="btn btn-primary">Click here</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 my-2">
                        <div class="card py-5 shadow border-0">
                            <h2 class="card-title">Hospital Beds</h2>
                            <div class="card-body">
                                <Link to="/res/hospitalbeds"><button type="button" class="btn btn-primary">Click here</button></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 my-2">
                        <div class="card py-5 shadow border-0">
                            <h2 class="card-title">Home isolation</h2>
                            <div class="card-body">
                                <Link to="/res/homeiso"><button type="button" class="btn btn-primary">Click here</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default DashMain;