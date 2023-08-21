import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../style.css";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-info">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="https://digitalhub.fifa.com/transform/4f21d266-7ff0-4721-97b0-7431f0789897/FPLUS_FU2023_Argentina_Textmark?io=transform:fill&quality=75"
            width="auto"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="#" className="text-red">
          noRED.com
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Playes</Nav.Link>
            <Nav.Link href="#action2">Teams</Nav.Link>
            <NavDropdown title="Manager" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Fabio capello</NavDropdown.Item>
              <NavDropdown.Item href="#action4">pep guardiola</NavDropdown.Item>

              <NavDropdown.Item href="#action5">Jürgen Klopp</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Trophy</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
