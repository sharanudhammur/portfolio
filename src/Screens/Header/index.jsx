import React from 'react'
import "./styles.scss"

function Header({ activePage, handleSelectMenu }) {
    return (
        <div className='header-component'>
            <div className='header-wrapper'>
                <div className='menus'>
                    <div className={activePage === "home" && "active-menu"} onClick={() => handleSelectMenu("home")} >Home</div>
                    <div className={activePage === "about" && "active-menu"} onClick={() => handleSelectMenu("about")}>About</div>
                    <div className={activePage === "experience" && "active-menu"} onClick={() => handleSelectMenu("experience")}>Experience</div>
                    <div className={activePage === "tech" && "active-menu"} onClick={() => handleSelectMenu("tech")}>Skills</div>
                    <div className={activePage === "project" && "active-menu"} onClick={() => handleSelectMenu("project")}>Projects</div>
                    <div className={activePage === "footer" && "active-menu"} onClick={() => handleSelectMenu("footer")}>Contact</div>
                </div>
                <a target='_blank' href='https://drive.google.com/file/d/1X-n4hY0lyhgk739s55vJS4wyPFr7OvGz/view' rel="noopener noreferrer" className='resume-button'>Resume</a>
            </div>

        </div>
    )
}

export default Header