import Navbar from './Navbar'
import Home from './Home'
import Create from './Create';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
        <div className="app">
          < Navbar/>
          <main className="main">
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/create" element={<Create/>}></Route>
              <Route path="/blogs/:id" element={<BlogDetails />}></Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
      </div>
    </Router>
  );
}

export default App;
