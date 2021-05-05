import { MdSettings } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import siteLogo from "../../img/site-logo.png";


let CustomNavbar = () => {
    return <Navbar collapseOnSelect expand="lg" bg="light">
        <Navbar.Brand>
            <img src={siteLogo} alt="Covid Ujjain" style={{ maxWidth: "200px" }}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">

                <Nav.Item className="mr-2">
                    <Link to="/" className="text-secondary">Home</Link>
                </Nav.Item>

                <Nav.Item className="mr-2">
                    <Link to="/res" className="text-secondary">Resources</Link>
                </Nav.Item>

                <Nav.Item className="mr-2 ">
                    <Link to="/settings">
                        <MdSettings className="text-secondary"></MdSettings>
                    </Link>
                </Nav.Item>

            </Nav>
        </Navbar.Collapse>
    </Navbar>

}

export default CustomNavbar;