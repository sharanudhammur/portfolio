

import React from 'react';
import './style.scss';

function Tech() {
    const skills = [
        {
            type: "Languages",
            keywords: ["JavaScript", "TypeScript", "HTML", "CSS", "C", "C++"]
        },
        {
            type: "Frameworks",
            keywords: ["React.js", "Redux / Redux Toolkit", "Tailwind CSS", "Bootstrap / MUI", "Node.js", "Express.js", "MongoDB", "RDBMS", "WebSocket / Socket.io", "JWT Token", "Firebase", "RESTful API", "AJAX"]
        },
        {
            type: "Tools & Others",
            keywords: ["Git / GitHub", "npm", "Postman", "Swagger", "Vercel", "SonarQube", "Sentry", "Stripe", "Figma", "Docker", "Kubernetes"]
        },
    ];

    return (
        <div className='tech-screen'>
            <div className='tech-screen-wrapper'>
                <div className='title'>Technologies and Tools</div>
                <div className='tech-cards'>
                    {skills.map((ele, index) => (
                        <div className='wrapper' key={index}>
                            <div className='tech-title'>{ele.type}</div>
                            <div className='each-tech-type'>
                                <div className='tech-type-wrapper'>
                                    {ele.keywords.map((item, idx) => (
                                        <div className='tech-detail' key={idx}>
                                            <div className='dot'></div>
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
