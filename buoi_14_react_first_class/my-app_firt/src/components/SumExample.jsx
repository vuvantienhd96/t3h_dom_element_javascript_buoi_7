import React, { Component } from 'react';

import ChildComponentOfSum from './ChildComponentOfSum'

class SumExample extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    
    render(){
        const { link1, link2} = this.props.objectLink;
        return (
            <div>
                <div style={{color: 'red'}}>{this.props.pramOne}</div>
                <div style={{color: 'blue'}}>{this.props.pramTwo}</div>
                <ChildComponentOfSum value={this.props.pramTwo}/> 
                <a href={link1}>Mylink1 </a>
                <a href={this.props.objectLink.link2}>Mylink2 </a>
            </div>
        )
    }
}

export default SumExample;