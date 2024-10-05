import "./styles.scss"
import React from 'react'

function Techn() {

    const skills = [
        {
            type: "Languages",
            keywords: ["Javascript", "TypeScript", "HTML", "CSS", "C", "C++"]
        },
        {
            type: "Frame works",
            keywords: ["React.js", "Redux / Redux Toolkit", "Tailwind CSS", "Bootstrap / MUI", "Node.js", "Express.js", "MongoDB", "RDBMS", "WebSocket / Socket.io", "JWT Token", "Firebase", "RESTful API", "AJAX"]
        },
        {
            type: "Tools and others",
            keywords: ["Git / GitHub", "npm", "Postman", "Swagger", "Vercel", "SonarQube", "Sentry", "Stripe"]
        },
    ]
    return (
        <div className="tech-screens">
            <div className="tech-wrapper">
                <div className="title">
                    Languages and Tools
                </div>
                <div className="skills-lists">
                    {skills.map((ele) => (
                        <div className="type">
                            <div>{ele.type}: {" "}</div>
                            <div>{ele.keywords.map((item) => (
                                <span className="keywords">{item}, </span>
                            ))}</div>
                        </div>
                    ))}
                    <div><span className="type"></span><span></span></div>
                </div>

            </div>
        </div>
    )
}

export default Techn