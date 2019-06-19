import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    render(){
        return <img className={`Coin ${this.props.side === "" && "none"}`} src={this.props.side} alt="Coin"/>
    }
}

export default Coin;