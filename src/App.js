// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Test from './Test';
import Home from './home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
