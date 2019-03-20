// 'use strict';
/*
* Title: main.component.js
*
* Description: define base for entire app
 *
 * Author: Ben Merchant
*/
console.log('main.component');

class MainController {
  constructor(MainConfig, $state){
    this.emailAddress = MainConfig.emailAddress;
    this.$state = $state;
  };
  $onInit() {
    this.name = 'Ben Merchant';
  };
};
MainController.$inject = ['MainConfig','$state'];

// main app component
export const main = {
  controller: MainController,
  bindings: {name: '@'},
  template: `
    <nav>
      <h1>Navigation</h1>
      <h3>{{$ctrl.name}}</h3>
    </nav>
    <main>
      <h1>Main Body</h1>
      <a ui-sref='welcome' ui-sref-active='active' ui-sref='welcome'>Welcome</a>
      <a ui-sref='about' ui-sref-active='active' ui-sref='about'>About</a>

      <div ui-view='welcome'></div>
      <div ui-view='about'></div>
    </main>
    <footer><h1>Footer</h1></footer>
  `
};
