import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// ✅ เช็กชื่อไฟล์ใน Assets/Projects/ ให้ตรงเป๊ะนะครับ
import parkingImg from "../../Assets/Projects/leaf.png"; 
import segmentImg from "../../Assets/Projects/7Segment.jpg"; 
import Inverted from "../../Assets/Projects/InvertedOptimal.jpg";
import Pcb from "../../Assets/Projects/Pcbdashboard.jpg";
import Students from "../../Assets/Projects/StudentsSociaMedia.jpg";

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
          
          {/* โปรเจกต์ที่ 1: วิดีโอ (อย่าลืมแก้ไฟล์ ProjectCards.js ตามที่ผมบอกรอบที่แล้วด้วยนะ) */}
          <Col md={4} className="project-card">
            <ProjectCard
              youtubeId="s7hrVn0H4_E"
              imgPath={parkingImg} // ใส่สำรองไว้กันเหนียว
              isBlog={false}
              title="Smart Parking Barrier System"
              description="ระบบไม้กั้นที่จอดรถอัตโนมัติที่ทำงานด้วยเซนเซอร์ตรวจจับวัตถุ (Ultrasonic Sensor) เมื่อมีรถเคลื่อนที่เข้ามาในระยะที่กำหนดระบบจะสั่งการให้ Servo Motor ยกไม้กั้นขึ้นโดยอัตโนมัติ"
              canvaLink="https://www.canva.com/design/DAG1Xlk1ncY/-hvWC32OIt9b19D_FSqoSg/edit?classId=2d956b7f-0959-4b73-83b3-8efdf107e86c&assignmentId=bbfba2aa-afc8-4cd5-bd68-1f72eeae80fd&submissionId=d16476c9-8ca7-4040-e4bb-58d688ccb6c1" 
            />
          </Col>

          {/* โปรเจกต์ที่ 2: รูปภาพ 7-Segment */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={segmentImg}
              isBlog={false}
              title="7-Segment Display System"
              description="โปรเจกต์ควบคุมการแสดงผลตัวเลขด้วย 7-Segment โดยใช้การเขียนโปรแกรมภาษา C และการออกแบบวงจรไฟฟ้าเพื่อแสดงค่าจากเซนเซอร์"
            />
          </Col>

          {/* โปรเจกต์ที่ 3: ช่องเปล่า */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Inverted} 
              isBlog={false}
              title="InvertedOptimal"
              description="คืออัลกอริทึมทางทฤษฎีที่ทำงานตรงข้ามกับOptimalโดยสิ้นเชิงหรือเรียกอีกชื่อว่าPessimalAlgorithmหลักการคือแอบดูอนาคตแล้วจงใจเลือกลบข้อมูลที่เราจำเป็นต้องใช้เร็วที่สุดทิ้งไปทันที"
              canvaLink="https://www.canva.com/design/DAG6EtYwv-0/EtU_aWPIK0HmEll2i3lojQ/edit?classId=71a61e87-1751-49d6-a0be-26c7e1ed4dce&assignmentId=4cd0eea0-ef2c-4a4b-817b-3f1ec8dd9d64&submissionId=0f5b2f51-cdf7-1073-2434-2c629bee4645"
              ghLink="https://github.com/Witsanu04/invertedoptimalsim"
            />
          </Col>

          {/* โปรเจกต์ที่ 4: ช่องเปล่า */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pcb} 
              isBlog={false}
              title="Pcbdashboard"
              description="เป็นการออกแบบวงจรไฟฟ้าแล้วเก็บข้อมูลโชว์บนDashboard"
            />
          </Col>
          {/* โปรเจกต์ที่ 5 ช่องเปล่า */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Students} 
              isBlog={false}
              title="StudentsSociaMedia"
              description="จุดประสงค์หลักของโปรแกรมนี้คือการทำนายและจำแนกความเสี่ยงในการติดโซเชียลมีเดียของนักเรียนโดยใช้ข้อมูลเชิงพฤติกรรม (เวลาเล่น, เวลานอน, สุขภาพจิต) เพื่อสร้างโมเดลที่สามารถระบุระดับความเสี่ยง (ต่ำ กลาง สูง) ของนักเรียนแต่ละคนได้ รวมถึงค้นหาปัจจัยสำคัญที่ขับเคลื่อนให้เกิดการเสพติด"
              canvaLink="https://www.canva.com/design/DAG6RWPugBA/SJcGuVnlkmQ4xiami-CR-w/edit?classId=2d956b7f-0959-4b73-83b3-8efdf107e86c&assignmentId=6332b309-1fd1-43b9-b836-4fc1d385a456&submissionId=6e2185ea-6581-c53c-b2ab-e0a19061b105"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;