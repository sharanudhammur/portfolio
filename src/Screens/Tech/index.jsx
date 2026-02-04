import React from "react";
import "./styles.scss";
<<<<<<< HEAD
=======
import TitleComponent from "../../Components/TitleComponent";
>>>>>>> ef3c20d (UI change)

function Tech() {
  const skills = [
    {
      type: "Languages",
<<<<<<< HEAD
      keywords: ["JavaScript", "TypeScript", "HTML", "CSS", "SASS", "C", "C++"]
=======
      keywords: ["JavaScript", "TypeScript", "HTML", "CSS", "SASS", "C", "C++"],
>>>>>>> ef3c20d (UI change)
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
<<<<<<< HEAD
        "oAuth"
      ]
=======
        "oAuth",
      ],
>>>>>>> ef3c20d (UI change)
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
<<<<<<< HEAD
        "Stripe"
      ]
    }
=======
        "Stripe",
      ],
    },
>>>>>>> ef3c20d (UI change)
  ];

  return (
    <div className="tech-screen">
      <div className="tech-screen-wrapper">
<<<<<<< HEAD
        <div className="title">Technologies and Tools</div>
=======
        <TitleComponent>Technologies and Tools</TitleComponent>
>>>>>>> ef3c20d (UI change)
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
