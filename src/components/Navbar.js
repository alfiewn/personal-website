import { Container, Navbar, Nav } from "react-bootstrap"

function NavBar(props) {
    return <Navbar style={{ backgroundColor: "#1b1e24" }} variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="/">Alfie Newman</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default NavBar