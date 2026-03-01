import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { SiCanva } from "react-icons/si"; // อย่าลืมลง npm install react-icons นะครับ
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.youtubeId ? (
        <div style={{ paddingBottom: "56.25%", position: "relative", height: 0, overflow: "hidden" }}>
          <iframe
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            src={`https://www.youtube.com/embed/${props.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${props.youtubeId}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <Card.Img 
            variant="top" 
            src={props.imgPath} 
            alt="card-img" 
            style={{ height: "180px", width: "auto", maxWidth: "100%", objectFit: "contain" }} 
          />
        </div>
      )}
      
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
          {/* ✅ ถ้ามี ghLink ให้โชว์ปุ่ม GitHub */}
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp; GitHub
            </Button>
          )}

          {/* ✅ ถ้ามี canvaLink ให้โชว์ปุ่ม Canva */}
          {props.canvaLink && (
            <Button 
              variant="primary" 
              href={props.canvaLink} 
              target="_blank"
              style={{ backgroundColor: "#00c4cc", borderColor: "#00c4cc" }} // สีฟ้าแบบ Canva
            >
              <SiCanva /> &nbsp; Canva
            </Button>
          )}

          {/* ✅ ถ้ามี demoLink (ปุ่มเดิม) */}
          {!props.isBlog && props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;