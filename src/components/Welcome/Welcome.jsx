import React, { useState } from 'react'
import './Welcome.css'

const Welcome = () => {
    const [arrNum, setArrNum] = useState(0)
    const welcomeArr = [
        {
            title: "Welcome Pal..!",
            desc: "You got a mission to do! To prove yourself a true MARVEL NERD!!!"
        },
        {
            title: "What to do",
            desc: "You have to answer the quiz questions and move to higher levels. Each level you complete you get a new batch accorging to your performance."
        },
        {
            title: "",
            desc: "So give your best and get exciting rewards!!!"
        }
    ]
    return (
        <>
            <div className="welcome-container">
                <div className="welcome-content">
                    <div className="welcome-title">
                        {welcomeArr[arrNum].title}
                    </div>
                    <div className="welcome-desc">
                        {welcomeArr[arrNum].desc}
                    </div>

                    <div className="slide-container">
                        <button className='slide-btn'>Previous</button>
                        <button className='slide-btn'>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome