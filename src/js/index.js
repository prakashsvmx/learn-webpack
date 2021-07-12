/* eslint-disable no-console */
import '../main.scss';
import _ from 'lodash';

console.log('Hello from Webpack.. Dev server');

const foo = (name) => {
  console.log(`Hello.. ${name}`);
};

foo('Test');

console.log(_.join(['index', 'module', 'loaded'], ' '));

const messedArray = ['A', 'B', 'C', 1];

console.log(messedArray);
