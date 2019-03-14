import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FruitFilter from './FruitFilter';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<FruitFilter fruits={fruitList} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

var fruitList = [
    'Acai', 
    'Aceola',
    'Apple',
    'Apricots',
    'Avocado',
    'Banana',
    'Blackberry',
    'Blueberries',
    'Camu Camu berry',
    'Cherries',
    'Coconut',
    'Cranberry',
    'Cucumber',
    'Currents',
    'Dates',
    'Durian',
    'Fig',
    'Goji berries',
    'Gooseberry',
    'Grapefruit',
    'Grapes',
    'Jackfruit',
    'Kiwi',
    'Kumquat',
    'Lemon',
    'Lime',
    'Lucuma',
    'Lychee',
    'Mango',
    'Mangosteen',
    'Melon',
    'Mulberry',
    'Nectarine',
    'Orange',
    'Papaya',
    'Passion Fruit',
    'Peach',
    'Pear',
    'Pineapple',
    'Plum',
    'Pomegranate',
    'Pomelo',
    'Prickly Pear',
    'Prunes',
    'Raspberries',
    'Strawberries',
    'Tangerine/Clementine',
    'Watermelon'
  ]