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
    this.name = 'Ben Merchant';
    this.phrase = 'Howdy!';

    // fun toggler to test functionality
    this.togglePhrase = function() {
        this.phrase = (this.phrase == 'Howdy!') ? 'JavaScript is fun!' : 'Howdy!'
    };



  };
  // $onInit() {
  //   this.emailAddress = MainConfig.emailAddress;
  //   this.$state = $state;
  //   this.name = 'Ben Merchant';
  //   this.phrase = 'Howdy!';
  //
  //   // fun toggler to test functionality
  //   this.togglePhrase = function() {
  //       this.phrase = (this.phrase == 'Howdy!') ? 'JavaScript is fun!' : 'Howdy!'
  //   };
  // };
  isActive(glob) {
   return this.$state.includes(glob);
};
};
MainController.$inject = ['MainConfig','$state'];

// main app component
export const main = {
  controller: MainController,
  bindings: {name: '@'},
  template: `
    <div id="the-container">
      <nav>
        <h1>Navigation - {{$ctrl.phrase}}</h1>
        <h3>{{$ctrl.name}}</h3>
        <button ng-click="$ctrl.togglePhrase()">Toggle Phrase!</button>
      </nav>
      <main>
        <h1>Main Body</h1>
        <a ui-sref='welcome' ui-sref-active='active' ui-sref='welcome'>Welcome</a>
        <a ui-sref='about' ui-sref-active='active' ui-sref='about'>About</a>

        <div ui-view='welcome' ng-show='$ctrl.isActive("welcome.**")'></div>
        <div ui-view='about' ng-show='$ctrl.isActive("about.**")'></div>
      </main>
      <footer><h1>Footer</h1></footer>
    </div>
  `
};
