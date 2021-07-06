
import './App.css';
import React, { Component } from 'react';
// components
import SumExample from './components/SumExample';

class App extends Component {
 
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {
      content: '',
      users: ''
    }
    this.handleUserChange = this.handleUserChange.bind(this);
  }
  
  a = 4 +5;
  value = "xin chao viet nam 1234";
  handleUserChange(){
    // something here
    //this.state.content = 'adad' // wrong 
    console.log('okokokok');
    this.setState(() => ({
      content: 'xin chao toi da bi setState'
    }))
  }

  handleUserChangeWithArrowfunction = () => {
    console.log('handleUserChangeWithArrowfunction');
    this.setState(() => ({
      users: 'userHere ok'
    }))
  }


  render() {
    return (
      <div>
        <a href="index.html">{ this.a } la ket qua </a>
        <p>hello world</p>
        <button onClick={this.handleUserChange}>Click me !</button>
        <p>{this.state.content} ....nothing</p>
        <button onClick={this.handleUserChangeWithArrowfunction}>Click me !</button>
        <p>{this.state.users} ....users___nothing</p>

        <SumExample 
          pramOne={ this.value } 
          pramTwo="Toi den tu England 12345"
          objectLink={ {link1: 'https://www.facebook.com/', link2: 'https://www.google.com/'} }
          link="https://www.facebook.com/"
          link1="https://www.facebook.com"
          link2="https://www.facebook.com"
        />

        <SumExample 
          pramOne="Hi lan" 
          pramTwo="Toi la tien"
          objectLink={ {link1: 'https://www.facebook.com/', link2: 'https://www.google.com/'} }
          link="https://www.google.com/"
        />
      </div>
    )
  }
}

export default App;
