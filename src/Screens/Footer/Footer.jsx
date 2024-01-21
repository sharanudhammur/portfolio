import React from 'react'
import "./style.scss"
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function Footer() {
    const links = [
        {
            name: "GitHub",
            link: "https://github.com/sharanudhammur",
            icon: <FaGithub />
        },
        {
            name: "LinkedIn",
            link: "",
            icon: <FaLinkedin />
        },
        {
            name: "Twitter",
            link: "",
            icon: <FaSquareXTwitter />
        },
        {
            name: "Mail",
            link: "",
            icon: <IoMdMail />
        },
    ]
    return (
        <div className='footer-screen'>
            <div className='footer-screen-wrapper'>
                <div className='title'>Let's Get in Touch: Ways to Connect with Me</div>
                <div className='desc'>Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at danielshan.balico@gmail.com. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Finally, if you prefer to connect on social media, you can connect with me using the social media links below.</div>
                <div className='links'>
                    {links.map((ele) => {
                        return (
                            <div className='link'>
                                {ele.icon}
                                <a href={ele.link} target='_blank' rel="noreferrer">
                                    {ele.name}
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer