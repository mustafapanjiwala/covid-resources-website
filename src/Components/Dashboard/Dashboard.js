import { Link } from "react-router-dom";

let Dashboard = (props) => {


    return <div className="container">
        <div className="row justify-content-center align-items-center text-center">
            <div className="col-lg-2 col-md-6 my-3 my-lg-0">
                <Link to="/res/dashboard#table"> <img src="./assets/menu.svg" alt="Dashboard" className="img-fluid" />
                    <h2>Dashboard</h2>
                </Link>
            </div>

            <div className="col-lg-2 col-md-6 my-3 my-lg-0">
                <Link to="/res/oxygen#table" >
                    <img src="./assets/menu.svg" alt="Dashboard" className="img-fluid" />
                    <h2>Oxygen</h2>
                </Link>
            </div>

            <div className="col-lg-2 col-md-6 my-3 my-lg-0">
                <Link to="/res/plasmaassiastance#table"> <img src="./assets/menu.svg" alt="Dashboard" className="img-fluid" />
                    <h2>Plasma Assistance</h2>
                </Link>
            </div>

            <div className="col-lg-2 col-md-6 my-3 my-lg-0">
                <Link to="/res/tiffinserv#table"> <img src="./assets/menu.svg" alt="Dashboard" className="img-fluid" />
                    <h2>Tiffin Service</h2>
                </Link>
            </div>

            <div className="col-lg-2 col-md-6 my-3 my-lg-0">
                <Link to="/res/hospitalbeds#table"> <img src="./assets/menu.svg" alt="Dashboard" className="img-fluid" />
                    <h2>Hospital Beds</h2>
                </Link>
            </div>

            <div className="col-lg-2 col-md-6 my-3 my-lg-0">
                <Link to="/res/oxycon#table"> <img src="./assets/menu.svg" alt="Dashboard" className="img-fluid" />
                    <h2>Oxygen Concentrator</h2>
                </Link>
            </div>

        </div>
    </div>
}

export default Dashboard;