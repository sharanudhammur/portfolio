import React from 'react'
import "./styles.scss"
function Experience() {

    const exprience = [
        {
            from: "May 2023",
            to: "Present",
            posotion: "Senior Software Engineer",
            company: "CoffeeWeb Technologies",
            points: [
                // "Implemented thorough testing and quality assurance procedures to maintain the application's reliability and stability.",
                // "Implemented Firebase Cloud Messaging (FCM) for push notifications, enhancing real-time communication and user engagement in mobile applications",
                // "Implemented WebSocket technology for real-time data delivery, enhancing user experience and interaction.",
                // "Actively participated in code reviews, ensuring code quality and sharing valuable feedback with team members.",
                "Developed and implemented lazy loading and infinite scrolling features, enhancing page load speeds and overall user experience.",
                "Ensured responsive design across various devices, providing a seamless interface for both mobile and desktop users.",
                "Implemented Firebase push notifications and real-time updates with WebSocket, enhancing user engagement.",
                "Built a Progressive Web App (PWA) that leveraged service workers to enable offline functionality and effective caching strategies.",
                "Implemented Google Auth and single sign-on (SSO) solutions to streamline user authentication and improve security.",
                "Conducted thorough code reviews to maintain high code quality and foster best practices within the development team.",
                "Built RESTful APIs using Node.js and Express.js to facilitate smooth communication between frontend and backend systems.",
                "Designed and implemented efficient MongoDB schemas, incorporating indexing and aggregation for faster query performance",
                "Integrated JWT (JSON Web Tokens) for authentication and authorization, enhancing security for user data and API access."
            ]
        },
        {
            from: "Jun 2022",
            to: "Apr 2023",
            posotion: "Software Engineer",
            company: "IT Plus I Softwares Pvt Ltd",
            points: [
                // "Leveraged React.js to build dynamic and interactive user interfaces, utilizing components, state management, and lifecycle methods to create efficient web applications.",
                // "Demonstrated a best approach to problem-solving, consistently identifying and resolving complex technical challenges.",
                // "optimizing website performance and loading speed through techniques like code splitting, lazy loading, and image optimization",
                "Demonstrated strong problem-solving skills by consistently identifying and resolving complex technical challenges.",
                "Implemented error boundaries for error caching, enhancing user experience by gracefully handling errors in the UI.",
                "Utilized SonarQube for code quality analysis, ensuring maintainability and adherence to best coding practices.",
                "Optimized website performance and loading speed with code splitting, lazy loading, and image optimization techniques.",
                "Improved application performance by applying advanced React concepts, such as memoization and component optimization.",

                "Optimized website loading speed through techniques such as code splitting, lazy loading, and image optimization."
            ]
        },
        // {
        //     from: "Jun 2022",
        //     to: "Jun 2022",
        //     posotion: "Senior Software Engineer",
        //     company: "Google Pvt Ltd",
        //     points: [
        //         "Applied knowledge of HTML, CSS, and JavaScript to create interactive and visually appealing web experiences."
        //     ]
        // }
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
                                        <div className='company-and-designation'>
                                            <div className='designation'>
                                                {ele.posotion}
                                            </div>
                                            <div className='pipe'>-</div>
                                            <div className="company">
                                                {ele.company}
                                            </div>
                                        </div>
                                        {/* <div className='position'></div> */}
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