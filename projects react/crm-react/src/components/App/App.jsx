// import { Route, Routes} from "react-router-dom";
import Form from '../Form';
import Header from '../Header';
import Tab from "../Tab";
import Edit from "../Edit";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


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
