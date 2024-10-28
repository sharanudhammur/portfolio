import React from 'react'
import "./styles.scss"

function Header() {
    return (
        <div className='header-component'>
            <div className='header-wrapper'>

                {/* <div className='logo'>
                    S
                </div> */}
                <div className='menus'>
                    <div>Home</div>
                    <div>About</div>
                    <div>Projects</div>
                    <div>Contact</div>
                </div>
                <a target='_blank' href='https://drive.google.com/file/d/1X-n4hY0lyhgk739s55vJS4wyPFr7OvGz/view' rel="noopener noreferrer" className='resume-button'>Resume</a>
            </div>

        </div>
    )
}

export default Header