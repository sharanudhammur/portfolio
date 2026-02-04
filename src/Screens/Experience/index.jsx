<<<<<<< HEAD
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
=======
// import React from "react";
// import "./styles.scss";
// function Experience() {
//   const exprience = [
//     {
//       from: "Sep 2025",
//       to: "Present",
//       posotion: "Senior Software Engineer",
//       company: "TekSystems (Schneider Electric)",
//       points: [
//         "Developing a high-performance 3D modeling tool using Three.js, enabling users to create and manipulate Busway Runs interactively.",
//         "Ensured high code quality by implementing SonarQube, achieving 89% code coverage and maintaining only 0.7% code duplication.",
//       ],
//     },
//     {
//       from: "May 2023",
//       to: "Present",
//       posotion: "Senior Software Engineer",
//       company: "CoffeeWeb Technologies",
//       points: [
//         "Led a team of 4–5 developers, improving project delivery efficiency by 20%.",
//         "Reduced page load time by 30% through code splitting, lazy loading, and image optimization.",
//         "Developed a real-time Forex data visualization module using WebSockets and Lightweight Charts, showcasing live price fluctuations and historical trends with interactive timeline filtering.",
//         "Implemented push notifications and real-time data updates using Firebase and WebSocket to enhance user engagement.",
//         "Implemented single-device sign-in, restricting users to one active session at a time for improved security.",
//         "Built RESTful APIs using Node.js and Express.js to enable seamless frontend–backend communication.",
//         "Designed and maintained cron jobs and background tasks for automated and scheduled data processing.",
//       ],
//     },

//     {
//       from: "Jun 2022",
//       to: "Apr 2023",
//       posotion: "Software Engineer",
//       company: "IT Plus I Softwares Pvt Ltd",
//       points: [
//         "Demonstrated strong problem-solving skills by consistently identifying and resolving complex technical challenges.",
//         "Implemented error boundaries and global API error handling with consistent fallback messaging, improving application stability and user experience.",
//         "Developed a Progressive Web App (PWA) with offline capabilities and efficient caching strategies.",
//         "Utilized SonarQube for code quality analysis to ensure maintainability and adherence to best coding practices.",
//         "Monitored and optimized API performance, improving response times and overall reliability.",
//         "Implemented JWT-based authentication and authorization for secure API access.",
//       ],
//     },
//   ];

//   return (
//     <div className="exp-screen">
//       <div className="exp-screen-wrapper">
//         <div className="title">Exprience</div>
//         <div>
//           <div className="exp-list">
//             {exprience.map((ele) => {
//               return (
//                 <div className="each-exp">
//                   <div className="left">
//                     <div className="bullet">.</div>
//                     <div className="line"></div>
//                   </div>
//                   <div className="details">
//                     <div className="duration">
//                       <div>{ele.from}</div>
//                       <div>-</div>
//                       <div>{ele.to}</div>
//                     </div>
//                     <div className="company-and-designation">
//                       <div className="designation">{ele.posotion}</div>
//                       <div className="pipe">-</div>
//                       <div className="company">{ele.company}</div>
//                     </div>
//                     {/* <div className='position'></div> */}
//                     <ul className="points">
//                       {ele.points?.map((point) => (
//                         <li>{point}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Experience;

import React from "react";
import "./styles.scss";
import TitleComponent from "../../Components/TitleComponent";

function Experience() {
  const experience = [
    {
      from: "Sep 2025",
      to: "Present",
      posotion: "Senior Software Engineer",
      company: "TekSystems (Schneider Electric)",
      points: [
        "Developing a high-performance 3D modeling tool using Three.js, enabling users to create and manipulate Busway Runs interactively",
        "Ensured high code quality by implementing SonarQube, achieving 89% code coverage and maintaining only 0.7% code duplication",
      ],
    },
    {
      from: "May 2023",
      to: "Present",
      posotion: "Senior Software Engineer",
      company: "CoffeeWeb Technologies",
      points: [
        "Led a team of 4–5 developers at CoffeeWeb, improving project delivery efficiency by 20%",
        "Reduced page load time by 30% through code splitting, lazy loading, and image optimization",
        "Developed a real-time Forex data visualization module using WebSockets and Lightweight Charts, displaying live price fluctuations and historical trends with interactive timeline filtering",
        "Implemented push notifications and real-time data updates using Firebase and WebSocket",
        "Implemented single-device sign-in, restricting user access to one active session at a time for enhanced security",
        "Built RESTful APIs with Node.js and Express.js for seamless frontend-backend communication",
        "Designed and maintained cron jobs and background tasks for automated data processing",
      ],
    },
    {
      from: "Jun 2022",
      to: "Apr 2023",
      posotion: "Software Engineer",
      company: "IT Plus I Softwares Pvt Ltd",
      points: [
        "Developed a Progressive Web App (PWA) with offline capabilities and efficient caching strategies",
        "Implemented global API error handling with consistent fallback messaging, improving UX and application stability",
        "Monitored and optimized API performance, improving response times and overall reliability",
        "Implemented JWT-based authentication and authorization for secure API access",
      ],
    },
    {
      from: "Sep 2020",
      to: "Oct 2021",
      posotion: "Trainee Engineer",
      company: "SLN Engineering Works",
      points: [
        "Ensured product quality through inspections, defect analysis, and process improvements.",
      ],
    },
  ];

  return (
    <section className="experience">
      <div className="experience-wrapper">
        <TitleComponent>Experience</TitleComponent>

        <div className="timeline">
          {experience.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-marker" />

              <div className="card">
                <div className="date">
                  {exp.from} – {exp.to}
                </div>

                <div className="role">
                  {exp.posotion}
                  <span className="company"> @ {exp.company}</span>
                </div>

                <ul className="points">
                  {exp.points.map((point, i) => (
                    <li key={i} className="desc">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
>>>>>>> ef3c20d (UI change)
