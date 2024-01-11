import React from 'react';
import {Route, Routes} from 'react-router-dom';

// Import Component and Pages
import Navigation from "./Navigation";
import HomePageWrapper from "../pages/HomePage";
import AddPage from '../pages/AddPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

// utlis
import { putAccessToken, getLogged, loggedOut } from '../utils/api';

class ContactApp extends React.Component {
  constructor() {
    super();
    this.state = {
      authedUser : null, 
      initializingCanceling: true, 
    }
    this.onSuccessAuthLogin = this.onSuccessAuthLogin.bind(this);
    this.loggedOutHandler = this.loggedOutHandler.bind(this);
  }

  async componentDidMount() {
    if(localStorage.getItem('accessToken')) {
      const { data } = await getLogged();
      this.setState({
        authedUser : data,
        initializingCanceling: false,
      })
    }
    this.setState({
      initializingCanceling: false,
    })
  }

  loggedOutHandler(){
    loggedOut();
    this.setState({
      authedUser : null,
      initializingCanceling: false,
    })
  }

  async onSuccessAuthLogin(accessToken) {
    putAccessToken(accessToken);
    const { data } = await getLogged();
    this.setState(() => {
      return ({
        
        authedUser: data, 
      })
    })
  }

  render() {
    if(this.state.initializingCanceling) {
      return null;
    }

    return (
      <div className="contact-app">
        <header className='contact-app__header'>
          <h1>Aplikasi Kontak</h1>
          {this.state.authedUser && <Navigation logoutHandler={this.loggedOutHandler} userName={this.state.authedUser.name}/>} 
        </header>
        {this.state.authedUser === null ?
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage onSuccessLoginHandler={this.onSuccessAuthLogin}/>}/>
            <Route path="/register" element={<RegisterPage />}/>
          </Routes> 
        </main>
        :
        <main>
          <Routes>
            <Route path="/" element={<HomePageWrapper/>}/>
            <Route path="/add" element={<AddPage/>}/>
          </Routes>   
        </main>
      }
      </div>
    );
  }
}

export default ContactApp;