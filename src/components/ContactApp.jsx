import React from 'react';
import {Route, Routes} from 'react-router-dom';

// Import Component and Pages
import Navigation from "./Navigation";
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';

class ContactApp extends React.Component {

  render() {
    return (
      <div className="contact-app">
        <header className='contact-app__header'>
          <h1>Aplikasi Kontak</h1>
          <Navigation />
        </header>
        <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/add" element={<AddPage/>}/>

        </Routes>   
        </main>
      </div>
    );
  }
}

export default ContactApp;