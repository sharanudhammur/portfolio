import React from 'react'
import "./style.scss"

function Home() {

    const links = [
        {
            linkName : "LinkedIn",
            icon : "https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png"
        },
        {
            linkName : "LinkedIn",
            icon : "https://cdn-icons-png.flaticon.com/512/25/25231.png"
        },
        {
            linkName : "LinkedIn",
            icon : "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
        },
        {
            linkName : "LinkedIn",
            icon : "https://www.svgrepo.com/show/353196/mail-with-circle.svg"
        },
    ]
    return (
        <div className='home-screen'>
            <div className='home-screen-wrapper'>
                <div className='aboutme'>
                    <div className='firstname'>Sharanabasappa</div>
                    <div className='designation'>Software Engineer</div>
                    <div className='about'>I am a software engineer with expertise in full-stack web development. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.</div>
                    <div className='links'>
                        {links.map((ele) => {
                            return (
                                <div><img src={ele.icon} alt="" /></div>
                            )
                        })}
                    </div>
                    <div className='title'></div>
                </div>
                <div className='banner-image'><img src="https://dsbalico.netlify.app/photo.jpg" alt="" /></div>
            </div>
        </div>
    )
}

export default Home