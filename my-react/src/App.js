import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Card } from 'react-bootstrap';

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="fs-4 fw-bold text-light text-center">Hanane Ouahmane — Code & Creativity</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Heading */}
      <div className="App mt-4 text-center">
        <h1>Welcome to My Portfolio</h1>

        {/* Cards */}
        <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                I'm a beginner React developer passionate about building responsive web apps.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Skills</Card.Title>
              <Card.Text>
                JavaScript, React, HTML, CSS, Bootstrap.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Projects</Card.Title>
              <Card.Text>
                Calculator App, Todo List, and Weather App using APIs.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
