import React from 'react'
import "./style.scss"

function Project() {

    const project = [
        {
            name: "First project",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sed, molestias praesentium distinctio hic tenetur illum esse adipisci official",
            img: "https://react-portfolio-v1.netlify.app/static/media/project3.03535c34c110b7ea292b.jpg",
            link: "",
            githubLink: "",
            tech: "React Node"
        },
        {
            name: "First project",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sed, molestias praesentium distinctio hic tenetur illum esse adipisci official",
            img: "https://react-portfolio-v1.netlify.app/static/media/project2.5fae296d371cc56cd98a.jpg",
            link: "",
            githubLink: "",
            tech: "React Node"
        },
        {
            name: "First project",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sed, molestias praesentium distinctio hic tenetur illum esse adipisci official",
            img: "https://react-portfolio-v1.netlify.app/static/media/project4.a7b7ed11daa072b234eb.jpg",
            link: "",
            githubLink: "",
            tech: "React Node"
        },
    ]
    return (
        <div className='project-screen'>
            <div className='project-screen-wrapper'>
                <div className='title'>Exprience</div>
                <div className='project-list'>
                    {project.map((ele) => {
                        return (
                            <div className='project-card'>
                                <img src={ele.img} alt="" />
                                <div className='project-detail'>
                                    <div className='name'>{ele.name}</div>
                                    <div className='desc'>{ele.desc}</div>
                                    <div className='tech'></div>
                                    <div className=''></div>
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