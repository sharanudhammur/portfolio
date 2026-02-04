import  { useEffect, useState } from "react";
import "./styles.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import ProfilePic from "../../Assets/Images/image3.jpeg";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const [_hovered, setHovered] = useState(false);

  const links = [
    // { linkName: "Instagram", icon2: <FaInstagram />, url: "" },
    {
      linkName: "Github",
      icon2: <FaGithub />,
      url: "https://github.com/sharanudhammur",
    },
    {
      linkName: "LinkedIn",
      icon2: <FaLinkedin />,
      url: "https://www.linkedin.com/in/sharanudhammur/",
    },
    {
      linkName: "Mail",
      icon2: <IoMdMail />,
      url: "mailto:sharandhammur@gmail.com",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home-screen">
      <div className="home-screen-wrapper">
          {window.innerWidth < 768 && <div className="logo" style={{fontSize:"70px"}}>{"{👨🏾‍💻}"}</div>}
        <div className="aboutme">
          <img
            className={`immm ${isVisible ? "slide-in" : ""}`}
            src={ProfilePic}
            alt="Profile"
          />
          <div className="Hey_there">Hi, I'm Sharan!</div>
          <div className="firstname">MERN FullStack Developer</div>
          <div className="about-me-description">
            {/* <span style={{ color: "black" }}>
              Senior Full Stack Mern Developer with over 5 year of experence
            </span>
            <div>
              in designing , developnig, and maintainingn scalable web
              applications.
            </div> */}
            <span style={{ color: "black" }}>
              {/* Senior Full Stack Mern Developer with over 5 year of experience */}
              Senior Full-Stack MERN Developer with 5+ years of experience
            </span>
            <div>
              in building scalable, high-performance web applications using
            </div>
            <div>React, Next.js, Node.js, Express.js and MongoDB.</div>
          </div>
          <div
            className="resume-button"
            onClick={() => setShowMobile((prev) => !prev)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              cursor: "pointer",
              position: "relative",
              display: "inline-block",
              marginBottom: "20px",
            }}
          >
            Contact Me
            {showMobile && (
              <span
                className={`mobile-number fade-in`}
                style={{
                  marginLeft: "15px",
                  fontWeight: "500",
                  color: "#ff5757",
                  transition: "opacity 0.5s, transform 0.5s",
                  opacity: 1,
                  transform: "translateY(0)",
                  position: "absolute",
                  left: "110%",
                  top: "10%",
                  whiteSpace: "nowrap",
                  background: "#fff",
                  borderRadius: "6px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  padding: "4px 12px",
                  // zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ color: "#444" }}>+91 8088-117092</span>
              </span>
            )}
          </div>
          {/* <a
            target="_blank"
            href="https://drive.google.com/file/d/1X-n4hY0lyhgk739s55vJS4wyPFr7OvGz/view"
            rel="noopener noreferrer"
            className="resume-button"
            style={{ marginBottom: "20px" }}
          >
            Download Resume
          </a> */}
          <div className="links">
            {links.map((ele) => (
              <a
                key={ele.linkName}
                className="link-icon"
                href={ele.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ele.icon2}
              </a>
            ))}
          </div>
        </div>
        {window.innerWidth >= 768 && <div className="logo">{"{👨🏾‍💻}"}</div>}
      </div>
    </div>
  );
}

export default Home;
