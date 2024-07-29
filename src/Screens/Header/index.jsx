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
                <div className='resume-button'>Resume</div>
            </div>

        </div>
    )
}

export default Header