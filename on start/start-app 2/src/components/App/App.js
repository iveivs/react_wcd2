import Header from './../Header';
import UserLogin from './../UserLogin';
import UserGreeting from './../UserGreeting';
import List from './../List';
import Footer from './../Footer';
import "./App.css"
import somePicture from './BS272.jpeg'

const App = () => {
    const isLoggedIn = true
    const someLastname = "Smith"
    return (
        <div className='app'>
            <img src={somePicture} alt="pic" />
            {isLoggedIn ? <UserGreeting name="John !!!" lastname={someLastname} /> : <UserLogin />}
            <UserLogin />
            <Header />
            <List ></List>
            <Footer />
        </div>
    )
}

export default App