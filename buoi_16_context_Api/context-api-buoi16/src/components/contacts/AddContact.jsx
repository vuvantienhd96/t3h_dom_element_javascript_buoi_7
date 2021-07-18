import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Consumer, ADD_CONTACT } from './../../context';
import TextInputGroup from './../layout/TextInputGroup'


// controlerComponent
export default class AddContact extends Component {

    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            phone: '',
            errors: {}
        }
    }
    
    // onNameChange = (e) => this.setState({ name: e.target.value });
    // onEmailChange = (e) => this.setState({ email: e.target.value });
    // onPhoneChange = (e) => this.setState({ phone: e.target.value });
    onChange = e => this.setState({ [ e.target.name ] : e.target.value });
    onSubmit = (dispatch, e) => {
        // ngăn chặn sự click user
        e.preventDefault();
        // get state đã được onchange
        const { name, email, phone } = this.state;

        // check for Erros
        if(name === '') {
            this.setState({errors: { name: 'Name is required' }})
            return;
        }
        if(email === '') {
            this.setState({errors: { email: 'email is required' }})
            return;
        }
        if(phone === '') {
            this.setState({errors: { phone: 'phone is required' }})
            return;
        }

        const newContact = {
            id: uuidv4(),
            name,
            email,
            phone
        }
        // cachs viết ở trên giống với việc viết như ở dưới
        // const newContact = {
        //     name : name,
        //     email: email,
        //     phone: phone
        // }
        dispatch({type: ADD_CONTACT, payload: newContact });

        // clear value has been pass into input
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })
    }

    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                    <div className="card mb-3">
                        <div className="card-header">Add Contact</div>
                        <div className="card-body">
                            <form onSubmit={ this.onSubmit.bind(this, dispatch) } >
                                <TextInputGroup 
                                    type="text"
                                    name="name"
                                    plaholder="Enter Name..."
                                    value={name}
                                    onChange={this.onChange}
                                    error={errors.name}
                                    label="Name"

                                />
                                <TextInputGroup 
                                    type="text"
                                    name="email"
                                    plaholder="Enter Email..."
                                    value={email}
                                    onChange={this.onChange}
                                    error={errors.email}
                                    label="Email"
                                />
                                <TextInputGroup 
                                    type="text"
                                    name="phone"
                                    plaholder="Enter Phone..."
                                    value={phone}
                                    onChange={this.onChange}
                                    error={errors.phone}
                                    label="Phone"
                                />
                                <input 
                                    type="submit" 
                                    value="Add Contact" 
                                    className="btn btn-light btn-block"
                                    />
                            </form>
                        </div>
                    </div>
                    )
                }}
            </Consumer>
        );
    }
}
