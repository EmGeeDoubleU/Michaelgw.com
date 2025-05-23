import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Michael Warshowsky</span> from <span className="purple">Philadelphia, PA</span>.
            <br />
            I'm an experienced founder and builder who loves open-source collaboration and working on products that make an impact.
            <br />
            After years in the startup world, I decided to go back and finish my degree in Software Engineering at Drexel University.
            <br />
            <br />
            When I’m not writing code or architecting systems, I’m probably deep in a history book or wandering through a museum.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Museums & History
            </li>
            <li className="about-activity">
              <ImPointRight /> Board Games
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
