// import { Route, Routes} from "react-router-dom";
import Form from '../Form';
import Header from '../Header';
import Tab from "../Tab";
import Edit from "../Edit";
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/tab" element={< Tab/>} />
          <Route path="/edit" element={< Edit/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
