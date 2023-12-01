import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

const name = 'John'
const dayNumber = 10
const month = "november"
const arr = [1,2,3,4,5]
const person = {
  name: 'Piter',
  age: 30
}

const url = 'https://webcademy.ru'
const someClassName = 'green'

const headingStyle = {
  color: 'coral',
  fontSize: '32px',
  fontFamily: 'sans-serif'
}

const someScript = "<script>alert('Some Error')</script>"

const bolean = true

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 className='green'>Hello, {name}</h1>

    <h2 style={headingStyle}>Some Text</h2>

    <label htmlFor="name">Enter your name</label>

    <input type="text" id='name' />

    <p className={someClassName}>Today is {dayNumber} of {month}</p>

    <p>{arr[0]}</p>

    <p>name: {person.name}, age: {person.age} </p>

    <p><a href={url}>Go to Webcademy</a></p>

    <p>{someScript}</p>

    <p>Function result: {Math.random()}</p>

    <p>logical expression: {bolean ? 'that\'s is true' : 'that\'s is false'}</p>
  </div>
);


console.log('TEST');
