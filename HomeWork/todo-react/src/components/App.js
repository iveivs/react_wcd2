import List from './List'
import SearchInput from './SearchInput';
import Header from './Header';
import Footer from './Footer';
// import './App.css';

function App() {
  return (
    <div className="todo-app p-5" >
      <Header />
      <SearchInput/>
      <List />
      <Footer></Footer>
    </div>
  );
}

export default App;
