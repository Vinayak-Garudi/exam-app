import React, { useEffect } from 'react'
import Welcome from '../Welcome/Welcome'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../../store/store'

const Home = () => {
    const dispatch = useDispatch()
    const welcome = useSelector(state => state.allSlice.welcome)

    useEffect(() => {
        dispatch(actions.toggleWelcome(true))
    }, [])
    return (
        <>
            {
                !welcome ?
                    <div className="home-container">
                        Home
                    </div> :
                    <Welcome />
            }
        </>
    )
}

export default Home