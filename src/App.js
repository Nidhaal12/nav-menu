import React from 'react';
import './App.css';
import Comp from './Comp'

let menu = [
  {
    text: 'Home',
    active: true,
    link: '#',
  },

  {
    text: 'Service',
    active: false,
    link: '#',
    sub: ['For entrepreneurs', 'For students', 'For hobbyists'],
  },

  {
    text: 'Contact',
    active: false,
    link: '#',

  }


]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Comp menu={menu} />
      </header>
    </div>
  );
}




export default App;