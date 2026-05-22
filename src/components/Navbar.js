import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

function NavBar(props) {
    return <Navbar style={{ backgroundColor: "#1b1e24" }} variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/">Alfie Newman</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">About Me</Nav.Link>
                    <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default NavBar