'use strict';

const _= require('lodash');

const packageTwo = (array) => `The total is ${_.reduce(array, (acc, number) => acc + number + 1)}`;

module.exports = packageTwo;
