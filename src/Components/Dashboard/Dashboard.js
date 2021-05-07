import { Link } from "react-router-dom";
import oxygen from "../../img/oxygen.svg";
import menu from "../../img/menu.svg";
import plasma from "../../img/blood-donation.svg";
import tiffin from "../../img/lunch-box.svg";
import beds from "../../img/hospital-bed.svg";
import concentrator from "../../img/oxygen concentrator.svg";
import language from "../../assets/language"

let Dashboard = (props) => {
    let lan = props.lan;

    return <section className="Dashboard">
        <div className="container" onClick={props.onClick}>
            <div className="row justify-content-center align-items-center text-center">
                <div className="col-lg-2 col-md-6 my-3 my-lg-0">
                    <Link to="/res/dashboard" onClick={() => { props.setLoading(1) }}> <img src={menu} alt="Dashboard" className="img-fluid dashImg" />
                        <h2 className="DashHeading">{language.dashboard[lan]}</h2>
                    </Link>
                </div>

                <div className="col-lg-2 col-md-6 my-3 my-lg-0">
                    <Link to="/res/oxygen" onClick={() => { props.setLoading(1) }}>
                        <img src={oxygen} alt="Dashboard" className="img-fluid dashImg" />
                        <h2 className="DashHeading">{language.oxygen[lan]}</h2>
                    </Link>
                </div>

                <div className="col-lg-2 col-md-6 my-3 my-lg-0">
                    <Link to="/res/plasmaassiastance" onClick={() => { props.setLoading(1) }}> <img src={plasma} alt="Dashboard" className="img-fluid dashImg" />
                        <h2 className="DashHeading">{language.plasmaassiastance[lan]}</h2>
                    </Link>
                </div>

                <div className="col-lg-2 col-md-6 my-3 my-lg-0">
                    <Link to="/res/tiffinserv" onClick={() => { props.setLoading(1) }}> <img src={tiffin} alt="Dashboard" className="img-fluid dashImg" />
                        <h2 className="DashHeading">{language.tiffinserv[lan]}</h2>
                    </Link>
                </div>

                <div className="col-lg-2 col-md-6 my-3 my-lg-0">
                    <Link to="/res/hospitalbeds" onClick={() => { props.setLoading(1) }}> <img src={beds} alt="Dashboard" className="img-fluid dashImg" />
                        <h2 className="DashHeading">{language.hospitalbeds[lan]}</h2>
                    </Link>
                </div>

                <div className="col-lg-2 col-md-6 my-3 my-lg-0">
                    <Link to="/res/oxycon" onClick={() => { props.setLoading(1) }}> <img src={concentrator} alt="Dashboard" className="img-fluid dashImg" />
                        <h2 className="DashHeading">{language.oxycon[lan]}</h2>
                    </Link>
                </div>

            </div>
        </div>
    </section>
}

export default Dashboard;