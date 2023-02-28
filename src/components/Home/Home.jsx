import React, { useEffect } from 'react'
import Welcome from '../Welcome/Welcome'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../../store/store'
import Auth from '../Auth/Auth'

const Home = () => {
    const dispatch = useDispatch()
    const welcome = useSelector(state => state.allSlice.welcome)
    const isLogin = useSelector(state => state.allSlice.isLogin)

    useEffect(() => {
        dispatch(actions.toggleWelcome(true))
    }, [])
    return (
        <>
            {
                !welcome && isLogin ?
                    <div className="home-container">
                        Home
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

        </>
    )
}

export default Home