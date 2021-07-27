import React, { Component } from 'react';

//import axios
import axios from 'axios';

const Context = React.createContext();


export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const GET_DETAIL_ID = 'GET_DETAIL_ID';



const reducer = (state, action) => {
    switch (action.type) {
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload.id
                ),
                loading: action.payload.loadingInternal
            }
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [
                    action.payload,
                    ...state.contacts
                ]
            }
        case GET_DETAIL_ID: 
            return {
                ...state,
                ...state.contacts
            }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [
           
        ],
        dispatch: action => this.setState(state => reducer(state, action)),
        loading: false
    };

    componentDidMount(){
        this.setState({loading: true})
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            this.setState({loading: false})
            this.setState({ contacts: res.data });
        })
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                { this.props.children }
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
