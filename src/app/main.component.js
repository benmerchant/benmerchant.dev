// 'use strict';
/*
* Title: main.component.js
*
* Description: define base for entire app
 *
 * Author: Ben Merchant
*/

import {mainTemplate} from './main.html';

console.log('main.component');

class MainController {
  constructor($state){
    // this.emailAddress = MainConfig.emailAddress;
    this.$state = $state;
    this.name = 'Ben Merchant';
    
  };
  isActive(glob) {
   return this.$state.includes(glob);
  };
};
// MainController.$inject = ['MainConfig','$state'];
MainController.$inject = ['$state'];

// main component
export const main = {
  controller: MainController,
  bindings: {name: '@'},
  template: mainTemplate
};
