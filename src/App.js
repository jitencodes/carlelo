import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Footer, Header} from './components';
import { Home} from './pages';
const App = () => {
  return <div className='overflow-hidden'>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    <Footer/>
    </Router>
  </div>;
};

export default App;
