import React, { Component } from 'react';

class FruitFilterer extends Component {
    render() {
        return (
            <ul>
                <input type="text" value={this.props.filterValue}/>
            </ul>
        )
    }
}

export default FruitFilterer