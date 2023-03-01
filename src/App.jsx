import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { actions } from './store/store';
import { useEffect } from 'react';
import { auth } from './Firebase';

function App() {
  const dispatch = useDispatch()

  // to check auth status
  // const auth = getAuth()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(actions.handleLogin())
        dispatch(actions.toggleWelcome(false))
      }
      else {
        dispatch(actions.handleLogout())
      }
    });
  }, [])

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
