// import { MdSettings } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import siteLogo from "../../img/site-logo.png";
import "./CustomNavbar.css";
import { useState } from 'react';
import language from '../../assets/language';


let CustomNavbar = (props) => {
    let [nextLan, setNextLan] = useState("Hindi");
    let lan = props.lan;
    let changeLan = () => {

        if (nextLan === "Hindi") {
            setNextLan("English");
            props.setLan('hi');
        }

        if (nextLan === "English") {
            setNextLan("Hindi");
            props.setLan('en');
        }
    }

    let history = useHistory();
    return <Navbar collapseOnSelect className="CustomNavbar" expand="lg">
        <Navbar.Brand style={{ cursor: "pointer" }} onClick={() => {
            history.push("/");
        }}>
            <img src={siteLogo} alt="Covid Ujjain" style={{ maxWidth: "200px" }}></img>
        </Navbar.Brand>
        <Button className="ml-auto" onClick={() => changeLan()}>{nextLan}</Button>

        <Nav className="ml-2">

            <Nav.Item className="mr-2">
                <Link to="/" className="text-secondary">{language.home[lan]}</Link>
            </Nav.Item>

            <Nav.Item className="mr-2">
                <Link to="/res" className="text-secondary">{language.resources[lan]}</Link>
            </Nav.Item>
        </Nav>


    </Navbar >

}

export default CustomNavbar;