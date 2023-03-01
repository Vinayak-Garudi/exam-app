import React, { useEffect, useState } from 'react'
import Welcome from '../Welcome/Welcome'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../../store/store'
import Auth from '../Auth/Auth'
import { auth } from '../../Firebase'
import { updateProfile } from 'firebase/auth'

const Home = () => {
    const dispatch = useDispatch()
    const welcome = useSelector(state => state.allSlice.welcome)
    const isLogin = useSelector(state => state.allSlice.isLogin)
    const nameReqd = useSelector(state => state.allSlice.nameReqd)
    const user = useSelector(state => state.allSlice.user)

    const [userName, setUserName] = useState("")

    function confirmUserName() {
        updateProfile(auth.currentUser, {
            displayName: userName
        }).then(() => {
            dispatch(actions.nameReqd(false))
        }).catch((error) => {
            console.log("username error")
        });
    }

    useEffect(() => {
        dispatch(actions.toggleWelcome(true))
    }, [])
    return (
        <>
            {
                !welcome && isLogin && !nameReqd ?
                    <div className="home-container">
                        Hello {user}
                    </div> : ""
            }
            {
                !welcome && !isLogin ?
                    <Auth /> : ""
            }
            {
                welcome ?
                    <Welcome /> : ""
            }
            {
                !welcome && isLogin && nameReqd ?
                    <div className="enter-name">
                        <div className="enter-name-div">What should we call you?</div>
                        <div className="name-ip-div">
                            <input onChange={e => setUserName(e.target.value)} type="text" className='name-ip' />
                        </div>
                        <div className="name-confirm-div">
                            <button onClick={confirmUserName} className="name-confirm-btn">Confirm</button>
                        </div>
                    </div> : ""
            }

        </>
    )
}

export default Home