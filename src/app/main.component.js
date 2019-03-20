// 'use strict';
/*
* Title: main.component.js
*
* Description: define base for entire app
 *
 * Author: Ben Merchant
*/
console.log('MainController');

class MainController {
  constructor(MainConfig, $state){
    this.emailAddress = MainConfig.emailAddress;
    this.$state = $state;
  }
};
MainController.$inject = ['MainConfig','$state'];

// main app component
export const main = {
  controller: MainController,
  template: `
    <nav><h1>Navigation</h1></nav>
    <main>
      <h1>Main Body</h1>
      <a ui-sref="welcome" ui-sref-active="active" ui-sref='welcome'>Welcome</a>
      <a ui-sref="about" ui-sref-active="active" ui-sref='about'>About</a>
      <ui-view></ui-view>
    </main>
    <footer><h1>Footer</h1></footer>
  `
};
