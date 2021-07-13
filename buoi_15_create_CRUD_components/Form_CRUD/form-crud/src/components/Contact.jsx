import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './contact.scss';

// uncontroler component là gì
export default class Contact extends Component {
    
    state ={
        showInfoItem: false
    }

    onShowClick(id, e) {
        this.setState({ showInfoItem: !this.state.showInfoItem });
    }

    // được gọi khi phát sinh sự kiện onClick và thực thi
    onDeleClick = () => {
        // do something
        // gọi lại props.deleteClickHandler từ thằng cha và kêu gọi thực thi nó
        this.props.deleteClickHandler();
    }
    

    render() {
        const { name, email, phone, id} = this.props.contact;
        const { showInfoItem } = this.state;
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

                    {/* icon delete from child */}
                    {/* lắng nghe sự kiện click từ thằng con với sự kiện onClick */}
                    <i onClick={this.onDeleClick} className="fas fa-times custum-icon_times" />
                </h4>
                {
                    showInfoItem && 
                    <ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Number: {phone}</li>
                    </ul>
                }
                
            </div>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
}