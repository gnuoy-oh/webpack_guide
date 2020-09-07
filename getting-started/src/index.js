// ES6
import _ from 'lodash';
// ES5 으로 하면,
// var _ = require('lodash');

function component() {
  var element = document.createElement('div');

  // loadsh is required for the next line to work
  element.innerHTML = _.join(['Hello', 'webpack'], '');
  // element.innHTML = 'Hello webpack';

  return element;

}

document.body.appendChild(component());
