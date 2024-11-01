import React from 'react'
import "./styles.scss"

function Header({ scrollToHome, scrollToAbout, scrollToExperience, scrollToTech, scrollToProject, scrollToFooter }) {
    return (
        <div className='header-component'>
            <div className='header-wrapper'>
                <div className='menus'>
                    <div onClick={scrollToHome}>Home</div>
                    <div onClick={scrollToAbout}>About</div>
                    <div onClick={scrollToExperience}>Experience</div>
                    <div onClick={scrollToTech}>Skills</div>
                    <div onClick={scrollToProject}>Projects</div>
                    <div onClick={scrollToFooter}>Contact</div>
                </div>
                {/* <a target='_blank' href='https://drive.google.com/file/d/1X-n4hY0lyhgk739s55vJS4wyPFr7OvGz/view' rel="noopener noreferrer" className='resume-button'>Resume</a> */}
            </div>

        </div>
    )
}

export default Header