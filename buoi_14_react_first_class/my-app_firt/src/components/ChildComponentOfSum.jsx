import React, { Component } from 'react'

export default class ChildComponentOfSum extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div style={{border: '1px solid black', padding: '10px'}}>
                this is ChildComponentOfSum
                {this.props.value}
            </div>
        )
    }
}
