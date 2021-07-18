import React, { Component } from 'react';

const Context = React.createContext();


export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';


const reducer = (state, action) => {
    switch (action.type) {
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            }
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [
                    action.payload,
                    ...state.contacts
                ]
            }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
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
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                { this.props.children }
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
