import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiWindows11,
  SiArduino,
  SiGithub,
  SiApple, // ใช้ SiApple สำหรับโลโก้ Mac/Apple
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 />
        <p style={{ fontSize: "20px" }}>Windows</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApple />
        <p style={{ fontSize: "20px" }}>Mac OS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: "20px" }}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
        <p style={{ fontSize: "20px" }}>Arduino IDE</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p style={{ fontSize: "20px" }}>Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: "20px" }}>Postman</p>
      </Col>
    </Row>
  );
}

export default Toolstack;