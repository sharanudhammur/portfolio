import React from 'react'
import "./styles.scss"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
// import { ReactComponent as DotImage } from "../../Assets/Images/DotImage.svg";
// import {component}
// import { UnFilledHeartIcon, FilledHeartIcon, CoffeeWebLogo, devEnvLogo } from 'Assets/Icons'

function Home() {

    const links = [
        {
            linkName: "Instagram",
            icon: "https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png",
            icon2: <FaInstagram />,
            url: ""
        },
        {
            linkName: "Github",
            icon: "https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png",
            icon2: <FaGithub />,
                url: ""
        },
        {
            linkName: "LinkedIn",
            icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
            icon2: <FaLinkedin />,
                url: "https://www.linkedin.com/in/sharanudhammur/"
        },
        {
            linkName: "mail",
            icon: "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png",
            icon2: <IoMdMail />,
                url: "https://www.linkedin.com/in/sharanudhammur/"
        },
        {
            linkName: "Twitter",
            icon: "https://www.svgrepo.com/show/353196/mail-with-circle.svg",
            icon2: <FaSquareXTwitter />,
                url: ""
        },
    ]
    return (
        <div className='home-screen'>
            <div className='home-screen-wrapper'>
                <div className='aboutme'>
                        <img className='immm' src="https://media.licdn.com/dms/image/v2/D5603AQGkuCjAMtroqA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726069489970?e=1735776000&v=beta&t=HruD_-wTKiH1f4pyy4IVqS-8h3bAKBB1Ti8YInGH4FQ" alt="" />
                    <div className='Hey_there'>Hey there!, I'm-</div>
                    <div className='firstname'>Sharan</div>
                    {/* <div className='designation'>MERN stack Developer</div> */}
                    <div className='about'><span style={{ color: "black" }}>Senior Software Engineer.</span> A self-taught developer with an
                        interest in Computer Science.</div>
                        {/* <button className='title' style={{backgroundColor:"#3CCF91", color:"white", width:"170px", border:"0", borderRadius:"4px", padding:"10px 0px", fontSize:"18px"}}>Resume</button> */}
                    <div className='links'>
                        {links.map((ele) => {
                            return (
                                <a className='link-icon' href={ele.url} target='_blank' rel="noopener noreferrer">
                                    {/* <img src={ele.icon} alt="" /> */}
                                    {ele.icon2}
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div className='banner-image'><img src="https://dsbalico.netlify.app/photo.jpg" alt="" /></div>
            </div>
        </div>
    )
}

export default Home