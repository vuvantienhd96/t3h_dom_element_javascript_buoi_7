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

    // deleteContact được gọi và được bind một cái id với phương thức bind của javascript
    deleteContact = (id) => {
        // lấy được ra parammater id

        // lấy ra giá trị state ban đầu
        const { contacts } = this.state;

        // lọc và tạo ra mảng newContacts mới với các id khác id mình click vô element
        const newContacts = contacts.filter(contact => contact.id !== id); // trả về một mảng mới không chứa id click

        // set lai state của component contacts
        this.setState({
            contacts: newContacts 
        });

    }

    // khi data được update nó sẽ fill lại và render ra data mới
    render() {
        const { contacts } = this.state;
        return (
            <div>
                {contacts.map(contact => <Contact 
                                            key={contact.id}
                                            contact={contact}
                                            // props deleteClickHandler được khai báo ở đây
                                            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                                        /> )}
            </div>
        )
    }
}
