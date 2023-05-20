import React from "react";
import "./About.css";
import { Card } from "react-bootstrap";

const About = () => {
  return (
    <div className="about row">
      <div className="title col-12 col-md-5">
        <h2>About Me</h2>
        <hr className="w-50" />
      </div>
      <div className="description col-12 col-md-7">
        <Card>
          <Card.Body>
            <Card.Text>
              I'm a Software Engineer with experience in designing the frontend and
              implementing the backend of your next favorite website. Whether you're
              trying to kickstart your business, list your services, or create an
              online store – I will help!
            </Card.Text>
            <Card.Text>
              I'm very flexible with the technologies I use and have no problem
              adapting to your project's needs. I can and will deliver great results
              with a timely and collaborative process, providing great value.
            </Card.Text>
            <button className="btn btn-info">I am here</button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default About;
