import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Header } from './Pages/Partials/Header/index';
import { Footer } from './Pages/Partials/Footer/index';
import { Main } from './Pages/Main/index';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Main/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
