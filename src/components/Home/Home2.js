import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Witsanu_Profile.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai"; // เพิ่ม AiFillInstagram ตรงนี้
import { FaFacebookF } from "react-icons/fa";
import { SiLine } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              ผมชื่อ <b className="purple">วิษณุ สัจจธรรม (ฟิว)</b> นักศึกษาจาก <b className="purple">มหาวิทยาลัยกรุงเทพ</b> 🤖
              <br />
              <br />
              กำลังศึกษาอยู่ชั้นปีที่ 2 สาขา 
              <i><b className="purple"> วิศวกรรมคอมพิวเตอร์และหุ่นยนต์ </b></i>
              <br />
              <br />
              ผมมีความเชี่ยวชาญพื้นฐานในภาษา 
              <i><b className="purple"> C และ Python </b></i> 
              รวมถึงการพัฒนาโปรเจกต์ด้วย 
              <i><b className="purple"> Arduino System Control </b></i>
              <br />
              <br />
              ผลงานที่ผ่านมาของผมมีทั้งการออกแบบวงจร <b className="purple">PCB Design</b> และระบบจำลอง <b className="purple">Smart Parking</b>
              <br />
              <br />
              ผมมุ่งมั่นที่จะพัฒนาทักษะด้าน <b className="purple">Automation</b> และเรียนรู้เทคโนโลยีใหม่ๆ อยู่เสมอครับ
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ borderRadius: "50%", maxHeight: "300px" }} />
            </Tilt>
          </Col>
        </Row>
        
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p> Feel free to <span className="purple">connect </span>with me </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Witsanu04"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/vios.golf"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dekgarfield/" 
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://line.me/ti/p/witsanu.satj" 
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiLine />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;