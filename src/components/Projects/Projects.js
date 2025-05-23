import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import your project images
import virtEconPoster from "../../Assets/Projects/virtEconPoster.jpg";
import editorImg from "../../Assets/Projects/editor.png"; // Replace this with your screenshot or remove if not needed
import belay from "../../Assets/Projects/Belay_landing.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Recent Work </strong>
        </h1>
        <p style={{ color: "white" }}>
A selection of projects that highlight my work as both a builder and founder — spanning software development, systems design, and venture-backed product leadership.        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={6} className="project-card">
  <ProjectCard
    imgPath={belay}
    isBlog={false}
    title="WithBelay – Equity Depreciation Insurance Platform"
    description="As Founder & CEO, I led the design and development of WithBelay: a web-based platform that protects retail stock portfolios against market downturns. I built the initial infrastructure, secured $6M in funding, and scaled the team to over 15 employees across 4 offices. Backed by Alpaca VC, Indicator Ventures, and LionBird."
    demoLink="https://www.withbelay.com"
  />
</Col>


          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={virtEconPoster}
              isBlog={false}
              title="Virtual Economist Chatbot"
              description="An advanced LLM-powered chatbot built for the Federal Reserve Bank of Philadelphia. Uses RAG architecture to deliver context-aware answers using live economic data (FRED API). Includes full AWS deployment pipeline with custom embedding, vector DB, and model hosting."
              ghLink="https://github.com/EmGeeDoubleU/VirtEconProject"
              demoLink="" // add demo URL if available
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={editorImg}
              isBlog={false}
              title="NBS_Editor – A VI-like Terminal Text Editor"
              description="Custom-built terminal text editor with modal editing, real-time file I/O, and `vi`-style navigation. Built in C with raw mode input, memory-mapped buffers, and low-level screen rendering logic."
              ghLink="https://github.com/EmGeeDoubleU/NBS_Editor"
              demoLink=""
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
