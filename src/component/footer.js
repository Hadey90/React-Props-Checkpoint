import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../style.css";

function BrandExample() {
  return (
    <>
      <Navbar className="bg-dark mt-4 ">
        <Container>
          {/* <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://digitalhub.fifa.com/transform/4f21d266-7ff0-4721-97b0-7431f0789897/FPLUS_FU2023_Argentina_Textmark?io=transform:fill&quality=75"
              width="auto"
              height="30"
              className="d-inline-block align-top "
            />{" "}
          </Navbar.Brand> */}

          <div className="mx-auto">
            <h6 className=" text-white fw-bold ">All Right Researved </h6>
            <h6 className=" text-white fw-bold">www.noRED.com </h6>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
