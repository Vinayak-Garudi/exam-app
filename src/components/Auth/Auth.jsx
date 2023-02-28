import React, { useState } from 'react'
import { signUpFunction, SignInFunction } from '../../Firebase';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../store/store';

const Auth = () => {

  const dispatch = useDispatch()

  const isLogin = useSelector(state => state.allSlice.isLogin)

  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")

  function handleLogin() {
    try {
      SignInFunction(email, pwd)
      console.log("login scucessful")
      dispatch(actions.handleLogin())
    }
    catch {
      console.log("login failed")
    }
  }

  function handleSignup() {
    try {
      signUpFunction(email, pwd)
      console.log("signup scucessful")
      handleLogin()
    }
    catch {
      console.log("signup failed")
    }
  }

  return (
    <>
      <div className="auth-container">
        <div className="auth-content">
          <div className="auth-head">Continue by authenticating yourself</div>
          <div className="auth-email">
            <input onChange={(e) => setEmail(e.target.value)} type="email" className='email-ip' />
          </div>
          <div className="auth-pwd">
            <input onChange={e => setPwd(e.target.value)} type="password" className='pwd-ip' />
          </div>
          <div className="auth-btns">
            <button onClick={handleLogin} className="login-btn">Log in</button>
            <button onClick={handleSignup} className="signup-btn">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth