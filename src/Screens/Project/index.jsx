import React from 'react'
import "./styles.scss"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";

function Project() {

    const project = [
        {
            name: "Chat GPT",
            desc: "A powerful Markdown editor and parser built using Next.js, leveraging SCSS for styling and the Monaco Editor for an enhanced editing experience.",
            img: "https://m-img.org/spai/w_924+q_lossless+ret_img+to_webp/matomo.org/wp-content/uploads/2022/10/Chewy-Homepage.png",
            link: "",
            githubLink: "",
            tech: ["React Node", "Nodejs", "HTML", "CSS", "JavsScript","CSS", "React", "Nodejs", "HTML", "CSS", "JavsScript"]
        },
        {
            name: "OpenAI GPT",
            desc: "A recommendation algorithm that uses OpenAI GPT and function calling feature to get a realtime recommendation system based on user's previous preferences",
            img: "https://www.searchenginejournal.com/wp-content/uploads/2019/10/skype-home-page-example-5dbbf8645cb39.jpg",
            link: "",
            githubLink: "",
            tech: ["React Node", "React Node", "Nodejs", "HTML", "CSS", "JavsScript","CSS", "React", "Nodejs", "HTML", "CSS", "JavsScript"]
        },
        {
            name: "Web Scrapper",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sed, molestias praesentium distinctio hic tenetur illum esse adipisci official",
            img: "https://img.freepik.com/free-vector/flat-design-abstract-geometric-real-estate-landing-page_23-2149127010.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1727913600&semt=ais_hybrid",
            link: "",
            githubLink: "",
            tech: ["React Node", "React Node", "Nodejs", "HTML", "CSS", "JavsScript","CSS", "React", "Nodejs", "HTML", "CSS", "JavsScript"]
        },
        {
            name: "Web Scrapper",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sed, molestias praesentium distinctio hic tenetur illum esse adipisci official",
            img: "https://img.freepik.com/free-vector/business-concept-landing-page_23-2148276812.jpg",
            link: "",
            githubLink: "",
            tech: ["React Node", "React Node", "Nodejs", "HTML", "CSS", "JavsScript","CSS", "React", "Nodejs", "HTML", "CSS", "JavsScript"]
        },
        {
            name: "Calculators",
            desc: "Calculator made using Html, CSS and JavaScript which can perform all the basic math operations.",
            img: "https://img.freepik.com/free-psd/flat-design-interior-design-template_23-2150031565.jpg",
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