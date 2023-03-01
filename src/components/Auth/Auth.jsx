import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { actions } from '../../store/store';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Auth = () => {

  const auth = getAuth()

  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [showPwd, setShowPwd] = useState(false)
  const [loading, setLoading] = useState(false)

  // function handleLogin() {
  //   try {
  //     setLoading(true)
  //     SignInFunction(email, pwd)
  //     console.log("login scucessful")
  //     dispatch(actions.nameReqd(false))
  //     dispatch(actions.handleLogin())
  //   }
  //   catch {
  //     console.log("login failed")
  //     setLoading(false)
  //   }
  // }

  // sign in
  function handleLogin() {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, pwd)
      .then((userCredential) => {
        dispatch(actions.nameReqd(false))
        dispatch(actions.handleLogin())
        // const user = userCredential.user;
      })
      .catch((error) => {
        setLoading(false)
      });
  }

  // function handleSignup() {
  //   // try {
  //   //   setLoading(true)
  //   //   let signupPromise = new Promise(function(resolve,reject) {
  //   //     signUpFunction(email, pwd)
  //   //   })
  //   //   console.log("signup scucessful")
  //   //   SignInFunction(email, pwd)
  //   //   dispatch(actions.nameReqd(true))
  //   //   dispatch(actions.handleLogin())
  //   // }
  //   // catch {
  //   //   console.log("signup failed")
  //   //   setLoading(false)
  //   // }

  //   signUpFunction(email, pwd)
  // }

  // sign up
  function handleSignup() {
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, pwd)
      .then((res) => {
        dispatch(actions.nameReqd(true))
        dispatch(actions.handleLogin())
      })
      .catch((error) => {
        console.log(error.message)
        setLoading(false)
      });
  }

  function toggleShowPwd() {
    if (!showPwd) {
      setShowPwd(true)
    }
    else {
      setShowPwd(false)
    }
  }

  console.log("showpwd", showPwd)

  return (
    <>
      <div className="auth-container">
        <div className="auth-content">
          <div className="auth-head">Continue by authenticating yourself</div>
          <div className="auth-email">
            <input onChange={(e) => setEmail(e.target.value)} type="email" className='auth-ip' />
          </div>
          <div className="auth-pwd">
            <input onChange={e => setPwd(e.target.value)} type={showPwd ? "text" : "password"} className='auth-ip' />
          </div>
          <div className="show-pwd-div">
            <input onClick={toggleShowPwd} type="checkbox" className='show-pwd' />
            <div className="show-pwd-text">Show Password</div>
          </div>
          {
            loading ?
              <div className="loading">Please wait...</div> : ""
          }
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