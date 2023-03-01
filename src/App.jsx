import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store/store';
import { useEffect } from 'react';
import { auth } from './Firebase';

function App() {
  const dispatch = useDispatch()

  const userName = useSelector(state => state.allSlice.user)
  const isLogin = useSelector(state => state.allSlice.isLogin)
  console.log("userName", userName, isLogin)

  // to check auth status
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(actions.addCred(user.displayName))
        dispatch(actions.handleLogin())
        dispatch(actions.toggleWelcome(false))
        if (userName && userName.length > 0) {
          dispatch(actions.nameReqd(false))
        }
        else if (!userName || userName.length === 0) {
          dispatch(actions.nameReqd(true))
        }
      }
      else {
        dispatch(actions.handleLogout())
      }
    });
  }, [isLogin])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
