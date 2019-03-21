// 'use strict';
/*
* Title: src\app\COMBINED_MAIN.STATES.AND.module.js
*
* Description: root/app level module for the site


  Bastardized version of this file. In the 01_refactorIndexMain branch
  Trying to find out why

  A. I'm getting an injector error regarding 'mainDirectiveProvider'
  B. when i attempted (in master branch) to change all instances of the word
      'main' to 'app' it switched to 'appDirectiveProvider' error.
      But, I couldn't figure out what actually triggered that!!!
 *
 * Author: Ben Merchant
*/
'use strict';


// put vendor libraries in a different folder
import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { visualizer } from '@uirouter/visualizer';
import primitive from './assets/styles/vendor/primitive/main.scss';
import styles from './main.scss';

class MainController {
  constructor($state){
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
MainController.$inject = ['$state'];
const vegeta = {
  controller: MainController,
  bindings: {name: '@'},
  template: `
    <h1>IS THIS STATE WORKING????</h1>
    <hr>
    <h1>home to my site!</h1>
    <button ui-sref='blog'>Home</button>
    <button ui-sref='about'>About</button>
    <button ui-sref='blog'>Blog</button>
    <hr>
    <ui-view><ui-view>
  `
};




//// only State for now!!!!
const topState = {
  name: 'top',
  url: '/top',
  redirectTo: 'home',
  controller: MainController,
  template: `
    <h1>Top State, Contain Entire Page!</h1>
    <a ui-sref='home' ui-sref-active='active' ui-sref='home'>home</a>
    <a ui-sref='about' ui-sref-active='active' ui-sref='about'>About</a>
    <a ui-sref='blog' ui-sref-active='active' ui-sref='blog'>Blog</a>
    <div style='border: 1rem solid blue;'>
      <ui-view><ui-view>
    </div>
  `
};
// default state: 'home' - 404
const homeState = {
  parent: 'top',
  name: 'home',
  url: '/home',
  template: '<h3>This is the home Template</h3>'
};

const aboutState = {
  parent: 'top',
  name: 'about',
  url: '/about',
  template: '<h3>This is the about Template</h3>'
};

const blogState = {
  parent: 'top',
  name: 'blog',
  url: '/blog',
  template: '<h3>This is the blog Template</h3>'
};

export const BEN_DEV_MAIN = angular.module('bendev',[uiRouter]);

BEN_DEV_MAIN.config(['$uiRouterProvider', ($uiRouter) => {

  $uiRouter.trace.enable(1);

  // basically a 404
  const $urlService = $uiRouter.urlService;
  $urlService.rules.otherwise({state:'home'});

  const $stateRegistry = $uiRouter.stateRegistry;


  $stateRegistry.register(topState);
  $stateRegistry.register(homeState);
  $stateRegistry.register(aboutState);
  $stateRegistry.register(blogState);

  console.log($stateRegistry);



////////// TURN VISUALIZER BACK ON //////////////

  visualizer($uiRouter);

/////////////////////////////////////////////////
}]);
