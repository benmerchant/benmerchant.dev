// 'use strict';
/*
* Title: main.module.js
*
* Description: huge refactor for v 0.4
 *
 * Author: Ben Merchant
*/

// import features
import {main} from './main.component';
import {home} from '../features/home/home.component';
import {about} from '../features/about/about.component';
import {blog} from '../features/blog/blog.component';
// this really seems like an anti-pattern...
// passing the componenets around different places
// import {AllStates} from './main.states';
import {mainState, homeState, aboutState, blogState} from './main.states';


// create the module for the main page
// this will be like a frame for every other page
// most notably, we need to grab modules for our <nav> and <footer>
console.log('Main.Module - module definition');
export const MainModule = angular.module('main',[]);

MainModule.config(['$uiRouterProvider',($uiRouter) => {
  console.log('Main.Module - config');

  const $stateRegistry = $uiRouter.stateRegistry;
  // register states with the UI Router
  $stateRegistry.register(mainState);
  $stateRegistry.register(homeState);
  $stateRegistry.register(aboutState);
  $stateRegistry.register(blogState);

}]);

MainModule.component('main',main);
MainModule.component('home',home);
MainModule.component('about',about);
MainModule.component('blog',blog);
