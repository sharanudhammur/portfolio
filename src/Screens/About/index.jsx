import React from "react";
import "./styles.scss";
import TitleComponent from "../../Components/TitleComponent";

function About() {
const deliveries = [
  "Led a team of 4–5 developers, improving delivery efficiency by 20%",
  "Reduced page load time by 30% using lazy loading and code splitting",
  "Improved application performance using React techniques like lazy loading and code splitting",
  "Built real-time Forex data visualization using WebSockets",
  "Developed lightweight candlestick and line charts for historical data",
  "Implemented single-device sign-in with Google Authentication and JWT",
  "Integrated Firebase Push Notifications to improve user engagement",
  "Developed PWAs with offline support and caching strategies",
  "Maintained high code quality using SonarQube metrics",
];


const responsibilities = [
  "Develop scalable, component-based, and responsive user interfaces using React",
  "Optimize frontend performance using lazy loading, code splitting, and caching strategies",
  "Design, develop, and maintain RESTful APIs using Node.js and Express.js",
  "Implement authentication and authorization using JWT and OAuth",
  "Build backend middleware and centralized error handling for application reliability",
  "Design MongoDB schemas and manage database operations using Mongoose",
  "Ensure API security, validation, and performance optimization",
  "Collaborate using Git and GitHub for version control and team workflows",
  "Perform API testing and documentation using Postman and Swagger",
];



  return (
    <section className="about">
      <div className="about-wrapper">
        <TitleComponent>About</TitleComponent>

        <div className="content">
          {/* Intro Card */}
          <div className="card">
            <div className="desc marginBottom">
              I’m <span className="highlight">Sharanabasappa</span>, a{" "}
              <span className="highlight">
                Senior Full-Stack MERN Developer
              </span>{" "}
              with <span className="highlight">over 5 years of experience</span>{" "}
              designing, developing, and maintaining scalable, high-performance
              web applications.
            </div>

            <div className="desc marginBottom">
              Proven expertise in{" "}
              <span className="highlight">
                JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js,
                MongoDB
              </span>{" "}
              with hands-on experience in{" "}
              <span className="highlight">
                Redux Toolkit, REST APIs, Firebase, JWT/OAuth, PWA, CI/CD, and
                WebSockets
              </span>
              .
            </div>

            <div className="desc marginBottom">
              Currently a <span className="highlight">Senior Software Engineer</span>{" "}
              at <span className="highlight">TEKsystems</span>, supporting{" "}
              <span className="highlight">Schneider Electric</span> on
              enterprise-scale platforms.
            </div>

            <div className="desc marginBottom">
              Specialized in{" "}
              <span className="highlight">performance optimization</span>,
              achieving <span className="highlight">30–40%</span> improvements in
              application speed and API efficiency.
            </div>

            <div className="desc marginBottom">
              Experienced in{" "}
              <span className="highlight">
                responsive design and real-time WebSocket
              </span>{" "}
              integrations with a focus on secure, scalable solutions.
            </div>

            <div className="desc">
              Actively mentor junior developers and improve{" "}
              <span className="highlight">
                code quality, team efficiency, and user engagement
              </span>
              .
            </div>
          </div>

          {/* Contributions Card */}
          <div className="card">
            <h4>What I’ve Delivered</h4>
            <ul>
              {deliveries.map((item, index) => (
                <li key={index} className="desc">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Responsibilities Card */}
          <div className="card">
            <h4>Roles & Responsibilities</h4>
            <ul>
              {responsibilities.map((item, index) => (
                <li key={index} className="desc">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
