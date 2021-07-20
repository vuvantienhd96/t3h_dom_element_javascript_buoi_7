import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

export default class Contacts extends Component {
    
    render() {
        return (
            <Consumer>
                {
                    value => {
                        const { contacts } = value;
                        return (
                            <React.Fragment>
                                <h2 className="display-4 my-3">
                                    <span className="text-danger">Contacts List</span>
                                </h2>
                                {contacts.length > 0 && contacts.map(contact => <Contact 
                                            key={contact.id}
                                            contact={contact}
                                            /> )}

                                {
                                    contacts.length === 0 && <p className="text-danger d-flex justify-content-center"><i class="fas fa-exclamation-triangle"></i>No Data list</p>
                                }
                            </React.Fragment>
                        )
                        
                    }
                }
            </Consumer>
        )
    }
}
