import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../LandingPage';
import Header from '../Header';
import Home from '../Home';
import Images from '../Images';
import Sheets from '../Sheets';
import './App.scss';

const App = () => {
  useEffect(() => {
    // Clears the storage on component unmount
    return () => (localStorage.clear())
  }, [])

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/images' element={<Images />} />
          <Route path='/sheets' element={<Sheets />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
