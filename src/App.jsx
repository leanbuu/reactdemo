import React from 'react';
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Login from './components/page/Login';

import logo1 from './assets/logo1.png'

function App() {
  return (
    <div id="layout">
    <Header></Header>
      <main className='w-full flex flex-row m-1'>
        <div className='basis-1/3'><img width="auto" height="auto" src={logo1} alt="#"></img></div>
      <div className='basis-2/3 bg-white' width="auto"><Login></Login></div>
      </main>

    <Footer></Footer>
    </div>
  );
};

export default App;