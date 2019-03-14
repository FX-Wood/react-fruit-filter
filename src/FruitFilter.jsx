import React, { Component } from 'react';
import './FruitFilter.css';
import FruitFilterer from './FruitFilterer'
import FruitList from './FruitList'

class FruitFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fruitArray: props.fruits,
      filterValue: ''
    }
  }
  render() {
    return (
      <div className="FruitFilter">
        <FruitFilterer filter={this.state.filterValue} />
        <FruitList fruits={this.state.fruitsToDisplay} />
      </div>
    );
  }
}

export default FruitFilter;
