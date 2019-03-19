/*
 * Title: index.js
 *
 * Description: trying out web pack
 *
 * Author: Ben Merchant
*/

import _ from 'lodash';
import printPhone from './different';
import '../styles/main.css';

printPhone();

function helloThere() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'there.'], ' ');
  element.classList.add('bg-red');
  return element;
};

document.body.appendChild(helloThere());
