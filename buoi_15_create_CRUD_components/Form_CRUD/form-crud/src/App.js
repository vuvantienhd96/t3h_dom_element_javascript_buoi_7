import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Contact from './components/Contact';
import Contacts from './components/Contacts';

import Header from './components/Header';


// Const & let
 let name = 'jone';
 name = 'hello' // work

 const unique = 'modal';
 const nums = [1, 2, 3, 4, 5];
 const fruits = ['Apples', 'Oranges', 'Banana']
 nums.push(6);
// Arraow function

//ForEach

// Map

// filter

const peoples = [
  {id: 1, name: 'tienvv'},
  {id: 2, name: 'diep'},
  {id: 3, name: 'lan'},
];

let people2 = peoples.filter(val => val.id !== 2);
console.log(people2);
// people2 = [
//   {id: 1, name: 'tienvv'},
//   {id: 3, name: 'lan'},
// ];

// spread
const arr2 = [1,2,3,4,5,6,7];
const arr3 = [...arr2, 11];
// console.log(arr3); [1,2,3,4,5,6,7, 11]
const arr4 = [...arr2.filter(x => x % 2 === 0), 444];
// console.log('arr4', arr4);
//
const newPerson = {
  name: 'tien',
  age: 25
}

const clonePerson = {
  ...newPerson,
  email: 'tienvv11@fsof.com.vn'
}

// console.log('newPerson', newPerson);
// console.log('clonePerson', clonePerson);

// destructuring
const profile = {
  name1: 'tienvv',
  add: {
    street: '40',
    city: 'hanoi', 
    bala: {
      sd: 'as'
    }
  },
  phoneNumber: ['096', '097']
}

// console.log(profile.name1 ); // tienvv
const { name1, phoneNumber } = profile; // tienvv
const { street } = profile.add; // 40
// console.log(phoneNumber[0]); // 096


// classes

// subclass

class App extends Component {
  c = 'sssssssssssss'

  render(){
    return (
      <React.Fragment>
        {/* <div>
        {
          fruits.map((val, i) => <p key={i}>{val.slice(0,-1).toLocaleUpperCase()}</p>)
        }
        </div>
        <p>filter element</p>
        {
          people2.map(val => <p key={val.id}>{ val.name }</p>)
        } */}
        <Header branding='Contact Manager'/>
          <div className="container">
            {/* <Contact  
              name='tienvv' 
              email="tienvv@somwthing.com" 
              phone="096-555-666"
              />
            <Contact  
              name='alicia' 
              email="alicia@somwthing.com" 
              phone="097-445-366"
              />
            <Contact  
              name='bryton' 
              email="bryton@somwthing.com" 
              phone="777-555-666"
              /> */}
            <Contacts />
          </div>
        </React.Fragment>
    )
  };
  
}

export default App;
