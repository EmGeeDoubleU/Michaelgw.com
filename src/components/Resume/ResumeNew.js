import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>

        {/* Education */}
        <Row className="mb-4">
          <Col md={12} className="text-start">
            <h2 className="purple">Education</h2>
          </Col>
          <Col md={12}>
            <div className="mt-3">
              <Row className="align-items-start">
                <Col md={8}><h5 className="text-start"><strong>Drexel University</strong></h5></Col>
                <Col md={4} className="text-end">Philadelphia, PA<br /><em>Jun 2025</em></Col>
              </Row>
              <Row>
                <Col md={12} className="text-start ps-2">
                  <p><em><strong>B.S. in Software Engineering</strong></em></p>

                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Skills */}
        <Row className="mb-5">
          <Col md={12} className="text-start">
            <h2 className="purple">Skills</h2>
          </Col>
          <Col md={6}>
            <ul>
              <li><strong>Languages:</strong> Python, Java, C, JavaScript, SQL</li>
              <li><strong>Frameworks & Tools:</strong> React.js, Node.js, Express, Git</li>
            </ul>
          </Col>
          <Col md={6}>
            <ul>
              <li><strong>Cloud & Databases:</strong> AWS (EC2, S3, Elastic BeanStalks), PostgreSQL</li>
              <li><strong>Concepts:</strong> Data Structures, Distributed Systems, REST APIs,</li>
            </ul>
          </Col>
        </Row>

        {/* Work Experience */}
        <Row className="mb-3">
          <Col md={12} className="text-start">
            <h2 className="purple">Work Experience</h2>
          </Col>
        </Row>

        {/* WithBelay - Board Member */}
        <div className="mt-4">
          <Row className="align-items-start">
            <Col md={8}><h5 className="text-start"><strong>WithBelay</strong></h5></Col>
            <Col md={4} className="text-end">Philadelphia, PA<br /><em>March 2024 – Apr 2025</em></Col>
          </Row>
          <Row>
            <Col md={12} className="text-start ps-2">
              <p><em><strong>Board Member, Founder</strong></em></p>
              <ul>
                <li>Stepped down as CEO, promoting the COO to lead the company</li>
                <li>Took a position on the board to continue providing strategic guidance</li>
                <li>Facilitated a smooth leadership transition, ensuring continued company growth and stability</li>
              </ul>
            </Col>
          </Row>
        </div>

        {/* WithBelay - CEO */}
        <div className="mt-4">
          <Row className="align-items-start">
            <Col md={8}><h5 className="text-start"><strong>WithBelay</strong></h5></Col>
            <Col md={4} className="text-end"><em>Jan 2020 – March 2024</em></Col>
          </Row>
          <Row>
            <Col md={12} className="text-start ps-2">
              <p><em><strong>CEO, Founder</strong></em></p>
              <ul>
                <li>Raised $6M in funding with initial valuation of $28.5M through effective pitch decks</li>
                <li>Helped design the core infrastructure for the early platform, including architecture, pipelines, and cloud</li>
                <li>Negotiated and secured a deal with Lexington National for E&S product paper</li>
                <li>Setup the insurance agency and reinsurance captive subsidiaries</li>
                <li>Designed and set up options trading desks within the reinsurance captive to hedge risk</li>
                <li>Launched a D2C web platform for customers to buy equity depreciation insurance</li>
                <li>Collaborated with law firms to build the legal framework for equity depreciation insurance</li>
                <li>Established WOLF, a proprietary brokerage platform for stock trading</li>
                <li>Managed 15+ employees across 4 locations</li>
              </ul>
            </Col>
          </Row>
        </div>

        {/* CourseDog */}
        <div className="mt-4">
          <Row className="align-items-start">
            <Col md={8}><h5 className="text-start"><strong>CourseDog</strong></h5></Col>
            <Col md={4} className="text-end">New York City, NY<br /><em>July 2018 – Jun 2019</em></Col>
          </Row>
          <Row>
            <Col md={12} className="text-start ps-2">
              <p><em><strong>Software Engineer / Researcher</strong></em></p>
              <ul>
                <li>Co-led development of scheduling algorithm in Python</li>
                <li>Wrote Python scripts for data integration</li>
                <li>Developed core features of the course management system</li>
                <li>Performed competitive analysis to guide product improvements</li>
                <li>Tested system and maintained documentation</li>
              </ul>
            </Col>
          </Row>
        </div>

        {/* CHOP */}
        <div className="mt-4">
          <Row className="align-items-start">
            <Col md={8}><h5 className="text-start"><strong>Children’s Hospital of Philadelphia</strong></h5></Col>
            <Col md={4} className="text-end">Philadelphia, PA<br /><em>Part-Time | June 2017 – May 2019</em></Col>
          </Row>
          <Row>
            <Col md={12} className="text-start ps-2">
              <p><em><strong>Data Analyst (NTP/part-time)</strong></em></p>
              <ul>
                <li>Utilized MATLAB to analyze large clinical datasets</li>
                <li>Generated graphs and descriptions for research publications</li>
                <li>Interpreted data for strategic decision-making</li>
                <li>Suggested improvements to reduce cost and improve efficiency</li>
              </ul>
            </Col>
          </Row>
        </div>

        {/* Jitsik */}
        <div className="mt-4 mb-5">
          <Row className="align-items-start">
            <Col md={8}><h5 className="text-start"><strong>Jitsik</strong></h5></Col>
            <Col md={4} className="text-end">Philadelphia, PA<br /><em>Part-Time | May 2018 – Jul 2018</em></Col>
          </Row>
          <Row>
            <Col md={12} className="text-start ps-2">
              <p><em><strong>Intern – Software Developer</strong></em></p>
              <ul>
                <li>Built Unity-based VR driving environment</li>
                <li>Investigated headset and hardware-level tech issues</li>
                <li>Communicated complex tech to nontechnical users</li>
              </ul>
            </Col>
          </Row>
        </div>

      </Container>
    </Container>
  );
}

export default ResumeNew;
