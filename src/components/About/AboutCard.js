import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            สวัสดีครับผมชื่อ <span className="purple">วิษณุ สัจจธรรม (ฟิว) </span>
            <br />
            ปัจจุบันผมเป็นนักศึกษาชั้นปีที่2
            <span className="purple"> สาขาวิศวกรรมคอมพิวเตอร์และหุ่นยนต์</span> มหาวิทยาลัยกรุงเทพ
            <br />
            <br />
            ผมมีพื้นฐานด้านช่างกลโรงงานจากวิทยาลัยเทคนิคกำแพงเพชรซึ่งช่วยให้ผมเข้าใจทั้งงาน 
            <span className="purple"> Hardware </span> และ <span className="purple"> Automation </span> เป็นอย่างดี
            <br />
            <br />
            นอกจากเรื่องการเขียนโปรแกรมแล้ว กิจกรรมอื่นๆ ที่ผมชอบทำคือ:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> เล่นฟุตบอล
            </li>
            <li className="about-activity">
              <ImPointRight /> ชอบศึกษาโปรเจคต่างๆ
            </li>
            <li className="about-activity">
              <ImPointRight /> ศึกษาเทคโนโลยีระบบหุ่นยนต์ใหม่ๆ
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "มุ่งมั่นพัฒนาเทคโนโลยีเพื่อสร้างความเปลี่ยนแปลงที่จับต้องได้"{" "}
          </p>
          <footer className="blockquote-footer">Witsanu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;