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
import { StickyStatesPlugin } from '@uirouter/sticky-states';
import { DSRPlugin } from '@uirouter/dsr';
import { visualizer } from '@uirouter/visualizer';
// import ocLazyLoad from 'oclazyload';

import { main } from './main.component';
import { NavComponent } from './shared/nav/nav.component';
import { home } from './components/home/home.component';
import { about } from './components/about/about.component';
import { blog } from './components/blog/blog.component';
import { projects } from './components/projects/projects.component';

import primitive from './assets/styles/vendor/primitive/main.scss';
import styles from './main.scss';

// import {mainState,homeState,aboutState,blogState,projectsState,footerState} from  './main.states';
import {AllStates} from  './main.states';

import {NAV_MODULE} from './shared/nav/nav.module';
import {HOME_MODULE} from './components/home/home.module';

console.log('MAIN - module definition');
export const BEN_DEV_MAIN = angular
        .module('bendev',[
          uiRouter,
          NAV_MODULE.name,
          HOME_MODULE.name
        ]);

BEN_DEV_MAIN.config(['$uiRouterProvider', ($uiRouter) => {
  console.log('MAIN - config');
  $uiRouter.plugin(StickyStatesPlugin);
  // https://github.com/ui-router/sample-app-angularjs/blob/ac107905c6eba60aca4229f0648102c33b3ee128/app/main/main.module.js
  // Enable tracing of each TRANSITION... (check the javascript console)
  // This syntax `$trace.enable(1)` is an alternative to `$trace.enable("TRANSITION")`.
  // Besides "TRANSITION", you can also enable tracing for : "RESOLVE", "HOOK", "INVOKE", "UIVIEW", "VIEWCONFIG"
  // $uiRouter.trace.enable(1);

  // basically a 404
  const $urlService = $uiRouter.urlService;
  $urlService.rules.otherwise({state:'home'});

  const $stateRegistry = $uiRouter.stateRegistry;

  // $stateRegistry.register(mainState);
  // $stateRegistry.register(navState);
  // $stateRegistry.register(homeState);
  // $stateRegistry.register(aboutState);
  // $stateRegistry.register(blogState);
  // $stateRegistry.register(projectsState);
  AllStates.forEach((state) => {
    $stateRegistry.register(state);
  });

  // show ui-router visualizer

////////// TURN VISUALIZER BACK ON //////////////

  // visualizer($uiRouter);

/////////////////////////////////////////////////
}]);

// place this somewhere else. like a service module or something
// BEN_DEV_MAIN.service('MainConfig', MainConfig);

BEN_DEV_MAIN.component('main',main);
BEN_DEV_MAIN.component('nav',NavComponent);
BEN_DEV_MAIN.component('home',home);
BEN_DEV_MAIN.component('about',about);
BEN_DEV_MAIN.component('blog',blog);
BEN_DEV_MAIN.component('projects',projects);
// BEN_DEV_MAIN.component('footer',footer);
