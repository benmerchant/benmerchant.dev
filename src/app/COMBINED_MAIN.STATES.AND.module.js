// 'use strict';
/*
* Title: app.module.js
*
* Description: root/app level module for the site
 *
 * Author: Ben Merchant
*/
'use strict';


// put vendor libraries in a different folder
import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
// import { StickyStatesPlugin } from '@uirouter/sticky-states';
// import { DSRPlugin } from '@uirouter/dsr';
import { visualizer } from '@uirouter/visualizer';
// import ocLazyLoad from 'oclazyload';

// import { vegeta } from './main.component';
////////////////////import { home } from './components/home/home.component';
////////////////////import { about } from './components/about/about.component';
// import { ComponentsModule } from './components/components.module';
// import { SharedModule } from './shared/shared.module';
import primitive from './assets/styles/vendor/primitive/main.scss';
import styles from './main.scss';

///// commented out for combined STATES AND MODULE test
// import {mainState,homeState,aboutState} from  './main.states';

// import {mainTemplate, mainController} from './main.component';
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

const vegeta = {
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
      </nav>
      <div id=big-div>
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
////////////////////import {homeTemplate, homeController} from './components/home/home.component';
////////////////////import {aboutTemplate, aboutController} from './components/about/about.component';
////////////////////import {blogTemplate, blogController} from './components/blog/blog.component';

// const mainState = {
//   name: 'goku',
//   redirectTo: 'home',
//   component: 'vegeta'
// };

//// only State for now!!!!
const theOnlyState = {
  name: 'theOnly',
  url: '/hadToGiveThisSomeNameBecauseDoubleSlashesFail',
  template: `
    <h1>IS THIS STATE WORKING????</h1>
    <ui-view><ui-view>
  `
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
