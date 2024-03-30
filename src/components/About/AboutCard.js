import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prashant Sisodia </span>
            from <span className="purple"> Uttarkhand, India.</span>
            <br />
            I am a full stack developer. I have one year experience from Axiphyl-healthcare pvt ltd
            <br />
            I have completed B.tech in Computer science and engineering  from Uttarakhand Technical University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Prashant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
