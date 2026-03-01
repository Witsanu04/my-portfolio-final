import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 120, // จำนวนเม็ดดาว
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          color: {
            value: "#ffffff", // เปลี่ยนเป็นสีขาวสว่างเหมือนดาว
          },
          line_linked: {
            enable: true, // เปิดเส้นเชื่อมโยงเบาๆ ให้ดูเหมือนกลุ่มดาว/โครงข่ายไฮเทค
            distance: 150,
            color: "#00d2ff", // เส้นเชื่อมเป็นสีฟ้า Cyber Blue
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none", // ให้ดาวลอยไปมาอิสระ ไม่ได้พุ่งไปทางขวาอย่างเดียว
            speed: 0.6, // ความเร็วช้าๆ นุ่มๆ เหมือนลอยในอวกาศ
            enable: true,
          },
          size: {
            value: 1.5, // ขนาดเม็ดดาว
            random: true, // สุ่มขนาดให้ดูสมจริง
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "grab", // เมื่อเอาเมาส์ไปวาง ดาวจะดึงดูดเข้าหาเมาส์ (ไฮเทคมาก)
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.8,
              },
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;