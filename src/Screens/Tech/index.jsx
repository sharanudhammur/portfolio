import React from "react";
import "./styles.scss";
import TitleComponent from "../../Components/TitleComponent";

function Tech() {
  const skills = [
    {
      type: "Languages",
      keywords: ["JavaScript", "TypeScript", "HTML", "CSS", "SASS", "C", "C++"],
    },
    {
      type: "Frameworks",
      keywords: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux / Redux Toolkit",
        "Tailwind CSS",
        "Bootstrap / MUI",
        "jQuery",
        "WebSocket / Socket.io",
        "Firebase",
        "JWT Token",
        "Firebase",
        "RESTful API",
        "AJAX",
        "oAuth",
      ],
    },
    {
      type: "Tools & Others",
      keywords: [
        "Git / GitHub",
        "npm",
        "Postman",
        "Swagger",
        "Vercel",
        "SonarQube",
        "Sentry",
        "Stripe",
      ],
    },
  ];

  return (
    <div className="tech-screen">
      <div className="tech-screen-wrapper">
        <TitleComponent>Technologies and Tools</TitleComponent>
        <div className="tech-cards">
          {skills.map((ele, index) => (
            <div className="wrapper" key={index}>
              <div className="tech-title">{ele.type}</div>
              <div className="each-tech-type">
                <div className="tech-type-wrapper">
                  {ele.keywords.map((item, idx) => (
                    <div className="tech-detail" key={idx}>
                      <div className="dot"></div>
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tech;
