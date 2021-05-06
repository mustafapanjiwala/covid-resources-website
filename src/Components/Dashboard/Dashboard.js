import { Link } from "react-router-dom";
import oxygen from "../../img/oxygen.svg";
import menu from "../../img/menu.svg";
import plasma from "../../img/blood-donation.svg";
import tiffin from "../../img/lunch-box.svg";
import beds from "../../img/hospital-bed.svg";
import concentrator from "../../img/oxygen concentrator.svg";

let Dashboard = (props) => {


    return <section className="Dashboard">
        <div className="container" onClick={props.onClick}>
            <div className="row justify-content-center align-items-center text-center">
                <div className="col-lg-2 col-md-6 my-3 my-lg-0">
                    <Link to="/res/dashboard"> <img src={menu} alt="Dashboard" className="img-fluid dashImg" />
                        <h2 className="DashHeading">Dashboard</h2>
                    </Link>
                </div>

                <div className="col-lg-2 col-md-6 my-3 my-lg-0">
                    <Link to="/res/oxygen" >
                        <img src={oxygen} alt="Dashboard" className="img-fluid dashImg" />
                        <h2 className="DashHeading">Oxygen</h2>
                    </Link>
                </div>

                <div className="col-lg-2 col-md-6 my-3 my-lg-0">
                    <Link to="/res/plasmaassiastance"> <img src={plasma} alt="Dashboard" className="img-fluid dashImg" />
                        <h2 className="DashHeading">Plasma Assistance</h2>
                    </Link>
                </div>

                <div className="col-lg-2 col-md-6 my-3 my-lg-0">
                    <Link to="/res/tiffinserv"> <img src={tiffin} alt="Dashboard" className="img-fluid dashImg" />
                        <h2 className="DashHeading">Tiffin Service</h2>
                    </Link>
                </div>

                <div className="col-lg-2 col-md-6 my-3 my-lg-0">
                    <Link to="/res/hospitalbeds"> <img src={beds} alt="Dashboard" className="img-fluid dashImg" />
                        <h2 className="DashHeading">Hospital Beds</h2>
                    </Link>
                </div>

                <div className="col-lg-2 col-md-6 my-3 my-lg-0">
                    <Link to="/res/oxycon"> <img src={concentrator} alt="Dashboard" className="img-fluid dashImg" />
                        <h2 className="DashHeading">Oxygen Concentrator</h2>
                    </Link>
                </div>

            </div>
        </div>
    </section>
}

export default Dashboard;