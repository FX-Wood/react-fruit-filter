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
    let filterValue = e.target.value.toLowerCase()
    this.setState((state, props) => {
      return {
        fruitArr: props.fruits.filter(fruit => fruit.includes(filterValue)),
        filterValue: filterValue
      }
    })
  }
  render() {
    return (
      <div className="FruitFilter">
        <FruitFilterer filter={this.state.filterValue} onChange={this.handleFilterChange} />
        <FruitList fruits={this.state.fruitArr} />
      </div>
    );
  }
}

export default FruitFilter;
