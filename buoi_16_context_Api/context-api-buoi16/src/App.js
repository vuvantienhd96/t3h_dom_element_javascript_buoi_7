
import './App.css';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact'
import AddContact2 from './components/contacts/AddContact2'
import React, { Component } from 'react'

import { Provider } from './context';

function App() {
  return (
    <React.Fragment>
        <Provider>
          <Header branding='Contact Manager'/>
          <div className="container">
            <AddContact />
            {/* <AddContact2 /> */}
            <Contacts />
          </div>
        </Provider>
    </React.Fragment>
  );
}

export default App;
