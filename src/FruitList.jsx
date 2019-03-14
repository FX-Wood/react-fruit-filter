import React, { Component } from 'react';

class FruitList extends Component {
    render() {
        return (
            this.props.fruits.map((fruit, i) => <li key={i} >{fruit}</li> )
        )
    }
}

export default FruitList;