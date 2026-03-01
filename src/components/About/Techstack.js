import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiCss3,
  SiHtml5,
  SiBootstrap,
  SiArduino,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* ภาษาหลักที่คุณถนัด */}
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <p style={{ fontSize: "20px" }}>C / C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{ fontSize: "20px" }}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
        <p style={{ fontSize: "20px" }}>Arduino</p>
      </Col>

      {/* ภาษาที่คุณใช้ทำเว็บไซต์นี้ (Web Development) */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p style={{ fontSize: "20px" }}>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <p style={{ fontSize: "20px" }}>CSS3</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "20px" }}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: "20px" }}>React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <p style={{ fontSize: "20px" }}>Bootstrap</p>
      </Col>

      {/* เครื่องมือจัดการโค้ด */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{ fontSize: "20px" }}>Git</p>
      </Col>
    </Row>
  );
}

export default Techstack;