import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
// import E-Commerce from "../../Assets/Projects/E-Commerce.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="E-Commerce-Application"
              description="An E-commerce application developed using React.js for the frontend, Node.js and Express.js for the backend, MongoDB for database management, and Bootstrap for responsive design."
              ghLink="https://github.com/Prashant7727/E-Commerce-App"
              demoLink="https://e-commerce-app-sigma-seven.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="File-Sharing-Application"
              description="A file-sharing application developed using the MERN stack, designed to facilitate secure and efficient file transfers and management."
              ghLink="https://github.com/Prashant7727/FileSharingApp"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Task-Management-Application"
              description="A task management application designed to streamline productivity and organization using modern web technologies. Developed with React.js for the frontend, Node.js and Express.js for the backend, MongoDB for database management, and Bootstrap for responsive design."
              ghLink="https://github.com/Prashant7727/task-management-app"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Email-Verification"
              description="An application built to manage email verification processes using Node.js with Express.js for the backend and MongoDB for data storage."
              ghLink="https://github.com/Prashant7727/email-verfictaion-using-nodemailer"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Weather-Application"
              description="A weather application designed to provide current weather information and forecasts using modern web technologies. Developed with React.js for the frontend, Node.js and Express.js for the backend, and integrates with the OpenWeatherMap API for weather data."
              ghLink="https://github.com/Prashant7727/Weather"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Myntra Clone Using Html and Css"
              description="A clone of the Myntra e-commerce website designed using HTML and CSS to replicate its user interface and styling"
              ghLink="https://github.com/Prashant7727/Myntra_Clone-using-html-and-css"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
