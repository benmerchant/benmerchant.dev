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
    <ui-view><ui-view>
  `
};

//// only State for now!!!!
const theOnlyState = {
  name: 'theOnly',
  url: '/hadToGiveThisSomeNameBecauseDoubleSlashesFail',
  // component: 'vegeta',
  controller: MainController,
  template: `
    <h1>IS THIS STATE WORKING????</h1>
    <ui-view><ui-view>
  `,
  redirectTo: 'home'
};
// default state: 'home' - 404
const homeState = {
  parent: 'theOnly',
  name: 'home',
  url: '/home',
  // component: 'home',
  template: '<h3>This is the home Template</h3>'
};

// const aboutState = {
//   parent: 'goku',
//   name: 'about',
//   url: '/about',
//   component: 'about'
// };
//
// const blogState = {
//   parent: 'goku',
//   name: 'blog',
//   url: '/blog',
//   component: 'blog'
// };



console.log('MAIN - module definition');
export const BEN_DEV_MAIN = angular.module('bendev',[
  uiRouter
  // ,
  // ocLazyLoad
]);

BEN_DEV_MAIN.config(['$uiRouterProvider', ($uiRouter) => {
  console.log('MAIN - config');
  // https://github.com/ui-router/sample-app-angularjs/blob/ac107905c6eba60aca4229f0648102c33b3ee128/app/main/main.module.js
  // Enable tracing of each TRANSITION... (check the javascript console)
  // This syntax `$trace.enable(1)` is an alternative to `$trace.enable("TRANSITION")`.
  // Besides "TRANSITION", you can also enable tracing for : "RESOLVE", "HOOK", "INVOKE", "UIVIEW", "VIEWCONFIG"
  $uiRouter.trace.enable(1);

  // basically a 404
  const $urlService = $uiRouter.urlService;
  $urlService.rules.otherwise({state:'home'});

  const $stateRegistry = $uiRouter.stateRegistry;


  $stateRegistry.register(theOnlyState);
  $stateRegistry.register(homeState);











  // $stateRegistry.register(mainState);

  // $stateRegistry.register(aboutState);
  console.log($stateRegistry);

  // register these plugins to our main module
  ///////////////////////////$uiRouter.plugin(StickyStatesPlugin);
  ///////////////////////////$uiRouter.plugin(DSRPlugin);
  // show ui-router visualizer

////////// TURN VISUALIZER BACK ON //////////////

  visualizer($uiRouter);

/////////////////////////////////////////////////
}]);

// place this somewhere else. like a service module or something
// BEN_DEV_MAIN.service('MainConfig', MainConfig);

// BEN_DEV_MAIN.component('bendev',vegeta);
// BEN_DEV_MAIN.component('home',home);
// BEN_DEV_MAIN.component('about',about);
