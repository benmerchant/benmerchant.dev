// 'use strict';
/*
* Title: main.component.js
*
* Description: define base for entire app
 *
 * Author: Ben Merchant
*/
console.log('app.component');

class MainController {
  constructor($state){
    // this.emailAddress = MainConfig.emailAddress;
    this.$state = $state;
    this.name = 'Ben Merchant';
    this.phrase = 'Howdy!';

    // fun toggler to test functionality
    this.togglePhrase = function() {
        this.phrase = (this.phrase == 'Howdy!') ? 'JavaScript is fun!' : 'Howdy!'
    };
  };
  isActive(glob) {
   return this.$state.includes(glob);
  };
};
// MainController.$inject = ['MainConfig','$state'];
MainController.$inject = ['$state'];

// app component
export const main = {
  controller: MainController,
  bindings: {name: '@'},
  template: `
    <div id="the-container">
      <nav>
        <h1>Navigation - {{$ctrl.phrase}}</h1>
        <h3>{{$ctrl.name}}</h3>
        <button ng-click="$ctrl.togglePhrase()">Toggle Phrase!</button>
        <br>
        <a ui-sref='home' ui-sref-active='active' ui-sref='home'>home</a>
        <a ui-sref='about' ui-sref-active='active' ui-sref='about'>About</a>
        <button ui-sref='home' ui-sref-active='Home'>Home</button>
        <button ui-sref='about' ui-sref-active='About'>About</button>
        <button ui-sref='blog' ui-sref-active='Blog'>Blog</button>
      </nav>
      <div id='big-div'>
        <h1>Main Body</h1>

        <div ui-view></div>
        <div ui-view='home' ng-show='$ctrl.isActive("home.**")'>
          home state div - (hardcoded)
        </div>
        <div ui-view='about' ng-show='$ctrl.isActive("about.**")'>
          About state div - (hardcoded)
        </div>
      </div>
      <footer><h1>Footer</h1></footer>
    </div>
  `
};
