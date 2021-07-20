import React, { Component } from 'react'

// components
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact'
import AddContact2 from './components/contacts/AddContact2'
import About from './components/pages/About'
import NotFoundPage from './components/pages/NotFoundPage'
import DetailContact from './components/pages/DetailContact'

// css
import './App.css';

// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from './context';

function App() {
  return (
    <React.Fragment>
        <Provider>
          <Router>
            <Header branding='Contact Manager'/>
            <div className="container">
              {/* <AddContact /> */}
              {/* <AddContact2 /> */}
              {/* <Contacts /> */}
              <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/addcontact" component={AddContact}/>
                <Route exact path="/detail/:id" component={DetailContact}/>
                <Route component={NotFoundPage}/>
              </Switch>
            </div>
          </Router>
        </Provider>
    </React.Fragment>
  );
}

export default App;
