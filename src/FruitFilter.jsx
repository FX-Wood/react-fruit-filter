import React, { Component } from 'react';
import './FruitFilter.css';
import FruitFilterer from './FruitFilterer'
import FruitList from './FruitList'

class FruitFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fruitArr: props.fruits,
      filterValue: ''
    }
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }
  handleFilterChange(e) {
    e.preventDefault()
    this.setState(state => {
      return {
        fruitArr: state.fruitArr.filter( fruit => fruit.contains(e.target.value.toLowerCase())),
        filterValue: e.target.value
      }
    })
  }
  render() {
    return (
      <div className="FruitFilter">
        <FruitFilterer filter={this.state.filterValue} />
        <FruitList fruits={this.state.fruitArr} />
      </div>
    );
  }
}

export default FruitFilter;
