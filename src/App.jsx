import { Col, Container, Navbar, Row } from 'react-bootstrap'
import myLogo from "./assets/appstore.svg"
import './App.css'

function App() {

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://getinvoice.com/images/logo.svg"
              className="d-inline-block align-top logo"
              alt="Get invoice logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Col>
          <Row className="wrapper">
            <Col className="title">
              <h1>Professional Invoices in Seconds</h1>
            </Col>
            <Col>
              <img
                className="rigth-img"
                src="https://getinvoice.com/images/image.png"
              />
            </Col>
          </Row>
        </Col>
        <Row>
          <Col>
            <a href="#">
              <img
                className="appstore-img"
                src={myLogo}
              />
            </a>
          </Col>
        </Row>
      </Container>
      <div className="footer">
        <span>©2023 All Rights Reserved. Alfa Apps</span>
        <p>
          <a href="https://www.alphaapps.dev/terms">Terms of Service</a> and
          <a href="https://www.alphaapps.dev/privacy"> Privacy Policy</a>
        </p>
      </div>
    </>
  )
}

export default App
