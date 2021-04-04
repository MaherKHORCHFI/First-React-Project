import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Jumbotron, Button, Carousel, CardGroup, Card } from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-School</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Our Mission</Nav.Link>
            <NavDropdown title="Our Programs" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Skill 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Skill 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Skill 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Skill 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">About Us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact
      </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container">
        <Jumbotron>
          <h1>LEARN TO DO..</h1>
          <p>
            We help you get ready for the future.
          </p>
          <p>
            <Button variant="primary">Join Us</Button>
          </p>
        </Jumbotron>
      </div>


      <Carousel>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/3909258.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/3909225.jpg"
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

      </Carousel>


      <div className="container">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/12/03/02/21/child-1073638_960_720.jpg" />
            <Card.Body>
              <Card.Title>REACT JS Introduction</Card.Title>
              <Card.Text>
                React.js is JavaScript library for building user interfaces.
      </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
          <Card>
            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/12/18/13/59/create-3026190_960_720.jpg" />
            <Card.Body>
              <Card.Title>JSX</Card.Title>
              <Card.Text>
                JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.{''}
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
          <Card>
            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/02/11/10/15/board-1193334_960_720.jpg" />
            <Card.Body>
              <Card.Title>React Components</Card.Title>
              <Card.Text>
                Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render() function.
      </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
        </CardGroup>
      </div>



    </div>

  );
}

export default App;
