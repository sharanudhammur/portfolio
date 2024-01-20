import React from 'react'
import "./style.scss"

function Footer() {
    const links = [
        {
            name: "linkedIn",
            link: "",
            icon: "",
        },
        {
            name: "Github",
            link: "",
            icon: "",
        },
        {
            name: "linkedIn",
            link: "",
            icon: "",
        },
    ]
    return (
        <div className='footer-screen'>
            <div className='footer-screen-wrapper'>
                <div className='title'>Connect</div>
                <div className='links'>
                    {links.map((ele) => {
                        return (
                            <div>
                                {ele.name}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer