import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './contact.scss';

import { Consumer } from '../../context';
import { DELETE_CONTACT } from '../../context'

// Router
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// uncontroler component là gì
export default class Contact extends Component {
    
    state ={
        showInfoItem: false
    }

    onShowClick(id, e) {
        this.setState({ showInfoItem: !this.state.showInfoItem });
    }

    onDeleClick = (id, dispatch) => {
        dispatch({type: DELETE_CONTACT, payload: id});
    }

    render() {
        const { name, email, phone, id} = this.props.contact;
        const { showInfoItem } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="container-card card card-body mb-3">
                            <h4>
                                {name}
                                <i onClick={this.onShowClick.bind(this, id)} 
                                            className="pl-2 pb-2 fas fa-sort-down custum-icon_sort"
                                />
                                <i onClick={() => this.setState({ showInfoItem: !this.state.showInfoItem })} 
                                            className="pl-2 pb-2 fas fa-plus custum-icon_plus"
                                />

                                <i onClick={this.onDeleClick.bind(this, id, dispatch)} className="fas fa-times custum-icon_times" />
                            </h4>
                            {
                                showInfoItem && 
                                <ul className="list-group">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Number: {phone}</li>
                                    <li className="list-group-item"><Link to={`/detail/${id}`} className="nav-link">Click me !</Link></li>
                                </ul>
                            }
                        </div>
                    )
                }}
            </Consumer>
            
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}