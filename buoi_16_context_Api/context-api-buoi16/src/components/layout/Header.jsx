import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Header extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    render() {
        const { branding } = this.props;
        return (
            <div>
                <nav className="
                    navbar 
                    navbar-expand-sm 
                    navbar-dark bg-danger
                    mb-3 py-0">
                    <div className="container">
                        <a href="/" className="navbar-brand">{branding}</a>
                        <div>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a href="/" className="nav-link">Home</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </div>
        )
    }
}

Header.defaultProps = {
    branding: 'My app'
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}

const headingStyle = {
    color: 'red', 
    fontSize:'3rem'
}