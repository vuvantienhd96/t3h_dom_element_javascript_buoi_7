import React, { Component } from 'react';
import Contact from './Contact';

export default class Contacts extends Component {
    constructor(){
        super();
        // initial state
        this.state = {
            contacts: [
                {
                    id: 1,
                    name: 'tienvv',
                    email: 'tienvv@somthing.com',
                    phone: '666-444-111'
                },
                {
                    id: 2,
                    name: 'alicia',
                    email: 'alicia@somthing.com',
                    phone: '333-244-111'
                },
                {
                    id: 3,
                    name: 'Bryton1',
                    email: 'Bryton@somthing.com',
                    phone: '166-555-333'
                }
            ]
        }
    }
    render() {
        const { contacts } = this.state;
        return (
            <div>
                {contacts.map(contact => <Contact 
                                            key={contact.id}
                                            name={contact.name} 
                                            email={contact.email} 
                                            phone={contact.phone}
                                        /> )}
            </div>
        )
    }
}
