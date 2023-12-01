import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

// import './index.css';
// import App from './App';



// вариант 1
// const UserLogin = () => {
//   const isLoggedIn = true
//   const logIn = <p>Hello, User</p>
//   const notLogIn =  <a href="#">Log in</a>
//   return isLoggedIn ? logIn : notLogIn
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

