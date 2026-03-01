import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>

          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />

          {/* ส่วนที่มาแทน Days I Code - โชว์ความเชี่ยวชาญเฉพาะทาง */}
          <h1 className="project-heading" style={{ paddingBottom: "20px", paddingTop: "50px" }}>
            My <strong className="purple">Specialized Fields</strong>
          </h1>

          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col md={4} className="skill-card" style={{ textAlign: "center", padding: "20px" }}>
              <div style={{ border: "1px solid #c084f5", padding: "20px", borderRadius: "10px", height: "100%", background: "rgba(255, 255, 255, 0.05)" }}>
                <h3 className="purple">Mechanical Engineering</h3>
                <p>พื้นฐานช่างกลโรงงาน การออกแบบโครงสร้าง และการใช้งานเครื่องมืออุตสาหกรรม</p>
              </div>
            </Col>
            <Col md={4} className="skill-card" style={{ textAlign: "center", padding: "20px" }}>
              <div style={{ border: "1px solid #c084f5", padding: "20px", borderRadius: "10px", height: "100%", background: "rgba(255, 255, 255, 0.05)" }}>
                <h3 className="purple">Robotics & Control</h3>
                <p>พัฒนาระบบอัตโนมัติด้วย Arduino, เซนเซอร์ และการออกแบบวงจร PCB </p>
              </div>
            </Col>
            <Col md={4} className="skill-card" style={{ textAlign: "center", padding: "20px" }}>
              <div style={{ border: "1px solid #c084f5", padding: "20px", borderRadius: "10px", height: "100%", background: "rgba(255, 255, 255, 0.05)" }}>
                <h3 className="purple">Software Dev</h3>
                <p>การเขียนโปรแกรมควบคุมระบบด้วยภาษา C และการประมวลผลข้อมูลด้วย Python และพื้นฐานภาษา ladder</p>
              </div>
            </Col>
          </Row>

        </Container>
      </Container>
    </>
  );
}

export default About;