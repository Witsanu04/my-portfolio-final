import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer and Robotics Engineering Student",
          "Arduino & Automation Enthusiast",
          "PCB Designer",
          "Front-End Developer",
          "Automation systems",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
