import React from 'react'
import "./style.scss"
function Experience() {

    const exprience = [
        {
            from: "May 2023",
            to: "Present",
            posotion: "Senior Software Engineer",
            company: "CoffeeWeb Technologies"
        },
        {
            from: "Jun 2022",
            to: "Apr 2023",
            posotion: "Senior Software Engineer",
            company: "CoffeeWeb Technologies"
        },
        {
            from: "Jun 2022",
            to: "Jun 2022",
            posotion: "Senior Software Engineer",
            company: "Google Pvt Ltd"
        }
    ]

    return (
        <div className='exp-screen'>
            <div className='exp-screen-wrapper'>
                <div className='title'>Exprience</div>
                <div>
                    <div className='exp-list'>
                        {exprience.map((ele) => {
                            return (
                                <div className='each-exp'>
                                    <div className='bullet'></div>
                                    <div className='details'>
                                        <div className='duration'>
                                            <div>{ele.from}</div>
                                            <div>-</div>
                                            <div>{ele.to}</div>
                                        </div>
                                        <div className='position'>{ele.posotion}</div>
                                        <div className='company'>{ele.company}</div>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience