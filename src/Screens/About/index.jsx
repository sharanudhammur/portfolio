import React from "react";
import "./styles.scss";

function About() {
  return (
    <div className="about-screen">
      <div className="about-screen-wrapper">
        <div className="title">About me</div>
        <div>
          <div className="about-me">
            <div>
              <p>
                Hi, my name is <span className="highlight">Sharanabasappa</span>
                . I'm a
                <span className="highlight"> MERN Full Stack Developer </span>{" "}
                with over
                <span className="highlight">4 years</span> of experience
                building scalable, high-performance web applications.
              </p>
              <p>
                I specialize in technologies like{" "}
                <span className="highlight">React, Node.js, MongoDB,</span> and
                <span className="highlight"> Express.js</span>, with hands-on
                experience in
                <span className="highlight">
                  {" "}
                  Next.js, TypeScript,
                </span> and <span className="highlight">React Native</span>.
              </p>
              <p>
                Currently, I’m working as a{" "}
                <span className="highlight">Senior Software Engineer</span> at
                <span className="highlight"> CoffeeWeb Technologies</span>,
                where I contribute to a global trading web application providing
                real-time coffee industry data including live prices, news,
                insights, notifications, and much more
              </p>
              <span>Some key features I've built:</span>
              <ul>
                <li>Single-device sign-in</li>
                <li>Google Authentication for secure login</li>
                <li>Progressive Web App (PWA) support with Service Workers</li>
                <li>Firebase Push Notifications</li>
                <li>
                  Lightweight candlestick and line charts for historical data
                </li>
                <li>
                  Performance-focused enhancements (lazy loading, code
                  splitting, etc.)
                </li>
              </ul>
            </div>

            <div style={{ marginTop: "20px" }}>
              <span>Roles & Responsibilities</span>
              <ul>
                <li>
                  Develop scalable, component-based, responsive UIs using React
                  and modern CSS frameworks
                </li>
                <li>
                  Optimize app performance using lazy loading, code splitting,
                  and caching strategies
                </li>
                <li>
                  Design and build RESTful APIs with Node.js and Express.js
                </li>
                <li>Manage authentication using JWT and OAuth</li>
                <li>
                  Implement backend middleware and error-handling for
                  reliability
                </li>
                <li>
                  Design MongoDB schemas and handle database operations with
                  Mongoose
                </li>
                <li>
                  Use Git & GitHub for version control and team collaboration
                </li>
                <li>Perform API testing using Postman and Swagger</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
