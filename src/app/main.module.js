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
import { NavverComponent } from './shared/navver/navver.component';
import { home } from './components/home/home.component';
import { about } from './components/about/about.component';
import { blog } from './components/blog/blog.component';
import { projects } from './components/projects/projects.component';

import primitive from './assets/styles/vendor/primitive/main.scss';
import styles from './main.scss';

// import {mainState,homeState,aboutState,blogState,projectsState,footerState} from  './main.states';
import {AllStates} from  './main.states';

// import {NAV_MODULE} from './shared/nav/nav.module';
import {HOME_MODULE} from './components/home/home.module';

console.log('MAIN - module definition');
export const BEN_DEV_MAIN = angular
        .module('bendev',[
          uiRouter,
          HOME_MODULE.name
        ]);

BEN_DEV_MAIN.config(['$uiRouterProvider', ($uiRouter) => {
  console.log('MAIN - config');
  $uiRouter.plugin(StickyStatesPlugin);
  // https://github.com/ui-router/sample-app-angularjs/blob/ac107905c6eba60aca4229f0648102c33b3ee128/app/main/main.module.js
  // Enable tracing of each STATE TRANSITION... (check the javascript console)
  // $uiRouter.trace.enable(1);



  // basically a 404
  const $urlService = $uiRouter.urlService;
  $urlService.rules.otherwise({state:'home'});

  const $stateRegistry = $uiRouter.stateRegistry;

  AllStates.forEach((state) => { $stateRegistry.register(state); });

  ////////// TURN VISUALIZER BACK ON //////////////

    // show ui-router visualizer
    // visualizer($uiRouter);

  /////////////////////////////////////////////////
}]);

// place this somewhere else. like a service module or something
// BEN_DEV_MAIN.service('MainConfig', MainConfig);

BEN_DEV_MAIN.component('main',main);
BEN_DEV_MAIN.component('home',home);
BEN_DEV_MAIN.component('about',about);
BEN_DEV_MAIN.component('blog',blog);
BEN_DEV_MAIN.component('projects',projects);
// not registering /navver nor /footer
