import React, { useEffect, useState } from 'react';
import "./styles.scss";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import ProfilePic from "../../Assets/Images/image3.jpeg";

function Home() {
    const [isVisible, setIsVisible] = useState(false);

    const links = [
        { linkName: "Instagram", icon2: <FaInstagram />, url: "" },
        { linkName: "Github", icon2: <FaGithub />, url: "" },
        { linkName: "LinkedIn", icon2: <FaLinkedin />, url: "https://www.linkedin.com/in/sharanudhammur/" },
        { linkName: "Mail", icon2: <IoMdMail />, url: "https://www.linkedin.com/in/sharanudhammur/" },
        { linkName: "Twitter", icon2: <FaSquareXTwitter />, url: "" },
    ];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className='home-screen'>
            <div className='home-screen-wrapper'>
                <div className='aboutme'>
                    <img className={`immm ${isVisible ? 'slide-in' : ''}`} src={ProfilePic} alt="Profile" />
                    <div className='Hey_there'>Hey there!, I'm-</div>
                    <div className='firstname'>Sharanabasappa</div>
                    <div className='about'>
                        <span style={{ color: "black" }}>Senior Software Engineer.</span> A self-taught MERN Stack developer
                    </div>
                    <div className='links'>
                        {links.map((ele) => (
                            <a key={ele.linkName} className='link-icon' href={ele.url} target='_blank' rel="noopener noreferrer">
                                {ele.icon2}
                            </a>
                        ))}
                    </div>
                    <a target='_blank' href='https://drive.google.com/file/d/1X-n4hY0lyhgk739s55vJS4wyPFr7OvGz/view' rel="noopener noreferrer" className='resume-button'>Resume</a>
                </div>
            </div>
        </div>
    );
}

export default Home;
