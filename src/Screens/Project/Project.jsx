import React from 'react'
import "./style.scss"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";

function Project() {

    const project = [
        {
            name: "Chat GPT",
            desc: "A powerful Markdown editor and parser built using Next.js, leveraging SCSS for styling and the Monaco Editor for an enhanced editing experience.",
            img: "https://react-portfolio-v1.netlify.app/static/media/project3.03535c34c110b7ea292b.jpg",
            link: "",
            githubLink: "",
            tech: ["React Node", "Nodejs", "HTML", "CSS", "JavsScript","CSS", "React", "Nodejs", "HTML", "CSS", "JavsScript"]
        },
        {
            name: "OpenAI GPT",
            desc: "A recommendation algorithm that uses OpenAI GPT and function calling feature to get a realtime recommendation system based on user's previous preferences",
            img: "https://react-portfolio-v1.netlify.app/static/media/project2.5fae296d371cc56cd98a.jpg",
            link: "",
            githubLink: "",
            tech: ["React Node", "React Node", "Nodejs", "HTML", "CSS", "JavsScript","CSS", "React", "Nodejs", "HTML", "CSS", "JavsScript"]
        },
        {
            name: "Web Scrapper",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sed, molestias praesentium distinctio hic tenetur illum esse adipisci official",
            img: "https://react-portfolio-v1.netlify.app/static/media/project4.a7b7ed11daa072b234eb.jpg",
            link: "",
            githubLink: "",
            tech: ["React Node", "React Node", "Nodejs", "HTML", "CSS", "JavsScript","CSS", "React", "Nodejs", "HTML", "CSS", "JavsScript"]
        },
        {
            name: "Calculators",
            desc: "Calculator made using Html, CSS and JavaScript which can perform all the basic math operations.",
            img: "https://react-portfolio-v1.netlify.app/static/media/project4.a7b7ed11daa072b234eb.jpg",
            link: "",
            githubLink: "",
            tech: ["ReactJS", "HTML", "CSS", "JavsScript",]
        },
    ]
    return (
        <div className='project-screen'>
            <div className='project-screen-wrapper'>
                <div className='title'>Projects</div>
                <div className='project-list'>
                    {project.map((ele) => {
                        return (
                            <div className='project-card'>
                                <img src={ele.img} alt="" />
                                <div className='project-detail'>
                                    <div className='name'>{ele.name}</div>
                                    <div className='desc'>{ele.desc}</div>
                                    <div className='techs'>
                                        {ele?.tech?.map((item) => (
                                            <span className='tech'>
                                                <div className='dot'></div>
                                                <div className='tech-name'>
                                                    {item}
                                                </div>
                                            </span>
                                        ))}
                                    </div>
                                    <div className='options'>
                                        <div className='live'><IoOpenOutline />Live</div>
                                        <div className='git'><FaGithub />GitHub</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Project