import React from 'react'
import "./styles.scss"

function Tech2() {

    const getColor = (ele) => {
        // return {
        //     backgroundColor: ele.bgColor,
        //     color: ele.color
        // }

        return {}
    }

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
        <div className='tech-screen2'>
            <div className='tech-screen-wrapper'>
                <div className='title'>Technologies and Tools</div>
                <div className='tech-cards'>
                    {skills.map((ele) => (
                        <div className='wrapper'>
                            <div className='tech-title'>{ele?.type}</div>
                            <div className='each-tech-type'>
                                <div className='tech-type-wrapper'>
                                    {ele?.keywords?.map((item) => {
                                        return (
                                            <div style={getColor(item)} className='tech-detail'>
                                                <div className='dot'></div>
                                                <div>{item}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tech2