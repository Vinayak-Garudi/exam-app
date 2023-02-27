import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../../store/store'
import './Welcome.css'
import SpideyUpDown from '../../images/spidey-upside-down.webp'
import Avengers from '../../images/avengers.png'
import AvengersPhn from '../../images/avengers2.png'
import Venom from '../../images/venom.png'

const Welcome = () => {
    const dispatch = useDispatch()
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
                {
                    arrNum < welcomeArr.length - 1 ?
                        <button className='slide-btn' id='skip-id' onClick={() => dispatch(actions.toggleWelcome(false))}>Skip</button> : ""
                }
                {
                    arrNum == 0 ?
                        <div className="img-spidey">
                            <img src={SpideyUpDown} className="marvel-img" alt="" />
                        </div> : ""
                }
                {
                    arrNum == 0 ?
                        <div className="img-venom">
                            <img src={Venom} className="marvel-img" alt="" />
                        </div> : ""
                }
                {
                    arrNum == 1 ?
                        <div className="img-avengers">
                            <img style={{ "opacity": "0.6" }} src={Avengers} className="marvel-img" alt="" />
                        </div> : ""
                }
                {
                    arrNum == 1 ?
                        <div className="phn-avengers">
                            <img style={{ "opacity": "0.6" }} src={AvengersPhn} className="marvel-img" alt="" />
                        </div> : ""
                }

                <div className="welcome-content">
                    <div className="welcome-title">
                        {welcomeArr[arrNum].title}
                    </div>
                    <div className="welcome-desc">
                        {welcomeArr[arrNum].desc}
                    </div>
                    <div className="slide-container">
                        <button disabled={arrNum <= 0} onClick={() => setArrNum(arrNum - 1)} className='slide-btn'>Previous</button>
                        {
                            arrNum >= welcomeArr.length - 1 ?
                                <button disabled={!(arrNum >= welcomeArr.length - 1)} onClick={() => dispatch(actions.toggleWelcome(false))} className='slide-btn'>Get Started</button> :
                                <button disabled={arrNum >= welcomeArr.length - 1} onClick={() => setArrNum(arrNum + 1)} className='slide-btn'>Next</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome