
import './App.css';
import Contacts from './components/Contacts';
import Header from './components/Header';
import React, { Component } from 'react'

import { Provider } from './context';

function App() {
  return (
    <React.Fragment>
        <Provider>
          <Header branding='Contact Manager'/>
          <div className="container">
            <Contacts />
          </div>
        </Provider>
    </React.Fragment>
  );
}

export default App;
