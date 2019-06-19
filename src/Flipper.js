import React, { Component } from 'react';
import './Flipper.css';
import Coin from './Coin';

class Flipper extends Component {
    static defaultProps = {
        sides: [
            {name: "Heads", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg"},
            {name: "Tails", url: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"}
        ],
        maxFlips: 10
    }

    constructor(props) {
        super(props);
        this.state = {
            currentSide: "",
            xHeads: 0,
            xTails: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin() {
        const randIdx = Math.floor( Math.random() * 2 );
        const flippedCoin = this.props.sides[randIdx];

        if(flippedCoin.name === "Heads"){
            this.setState(this.incrementHeads);
        } else {
            this.setState(this.incrementTails);
        }
    }

        
    incrementHeads(currState) {
        return {xHeads: currState.xHeads + 1, currentSide: "Heads"};
    }

    incrementTails(currState) {
        return {xTails: currState.xTails + 1, currentSide: "Tails"};
    }

    handleClick() {
        this.flipCoin();
    }

    render(){
        const side = this.props.sides.find(el => el.name === this.state.currentSide) || { url: "" };
        return (
            <div className="Flipper">
                <h1>Let's flip a coin!</h1>
                <Coin side={side.url} />
                {(this.state.xHeads + this.state.xTails) !== this.props.maxFlips && <button onClick={this.handleClick}>Flip</button>}
                <p>Out of {this.state.xHeads + this.state.xTails} there have been <b>{this.state.xHeads} heads</b> and <b>{this.state.xTails} tails</b></p>
            </div>
        );
    }
}

export default Flipper;