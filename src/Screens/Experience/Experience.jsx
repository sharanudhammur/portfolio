import React from 'react'
import "./style.scss"
function Experience() {

    const exprience = [
        {
            from: "May 2023",
            to: "Present",
            posotion: "Senior Software Engineer",
            company: "CoffeeWeb Technologies",
            points: [
                "Implemented thorough testing and quality assurance procedures to maintain the application's reliability and stability.",
                "Implemented Firebase Cloud Messaging (FCM) for push notifications, enhancing real-time communication and user engagement in mobile applications",
                "Implemented WebSocket technology for real-time data delivery, enhancing user experience and interaction.",
                "Actively participated in code reviews, ensuring code quality and sharing valuable feedback with team members.",
            ]
        },
        {
            from: "Jun 2022",
            to: "Apr 2023",
            posotion: "Senior Software Engineer",
            company: "CoffeeWeb Technologies",
            points: [
                "Leveraged React.js to build dynamic and interactive user interfaces, utilizing components, state management, and lifecycle methods to create efficient web applications.",
                "Demonstrated a best approach to problem-solving, consistently identifying and resolving complex technical challenges.",
                "optimizing website performance and loading speed through techniques like code splitting, lazy loading, and image optimization"
            ]
        },
        {
            from: "Jun 2022",
            to: "Jun 2022",
            posotion: "Senior Software Engineer",
            company: "Google Pvt Ltd",
            points: [
                "Applied knowledge of HTML, CSS, and JavaScript to create interactive and visually appealing web experiences."
            ]
        }
    ]

    return (
        <div className='exp-screen'>
            <div className='exp-screen-wrapper'>
                <div className='title'>Exprience</div>
                <div>
                    <div className='exp-list'>
                        {exprience.map((ele) => {
                            return (
                                <div className='each-exp'>
                                    <div className='left'>
                                        <div className='bullet'>.</div>
                                        <div className='line'></div>
                                    </div>
                                    <div className='details'>
                                        <div className='duration'>
                                            <div>{ele.from}</div>
                                            <div>-</div>
                                            <div>{ele.to}</div>
                                        </div>
                                        <div className='company'>{ele.company}</div>
                                        <div className='position'>{ele.posotion}</div>
                                        <ul className='points'>{ele.points?.map((point) => (
                                            <li>{point}</li>
                                        ))}</ul>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience