// 'use strict';
/*
* Title: app.module.js
*
* Description: root/app level module for the site
 *
 * Author: Ben Merchant
*/



//// still havent used these 2
import { StickyStatesPlugin } from '@uirouter/sticky-states';
import { DSRPlugin } from '@uirouter/dsr';

/// good for dev
import { visualizer } from '@uirouter/visualizer';

//// nor this one
import ocLazyLoad from 'oclazyload';

import { main } from './main.component';
import { home } from './components/home/home.component';
import { about } from './components/about/about.component';
import { blog } from './components/blog/blog.component';
// import { ComponentsModule } from './components/components.module';
// import { SharedModule } from './shared/shared.module';
import primitive from './assets/styles/vendor/primitive/main.scss';
import styles from './main.scss';

import {mainState,homeState,aboutState,blogState} from  './main.states';

// this needs to go somewhere else
// import {MainConfig} from './mainConfig.service';




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

  $stateRegistry.register(mainState);
  $stateRegistry.register(homeState);
  $stateRegistry.register(aboutState);
  $stateRegistry.register(blogState);
  console.log($stateRegistry);

  // register these plugins to our main module
  ///////////////////////////$uiRouter.plugin(StickyStatesPlugin);
  ///////////////////////////$uiRouter.plugin(DSRPlugin);
  // show ui-router visualizer

////////// TURN VISUALIZER BACK ON //////////////

  // visualizer($uiRouter);

/////////////////////////////////////////////////
}]);

// place this somewhere else. like a service module or something
// BEN_DEV_MAIN.service('MainConfig', MainConfig);

BEN_DEV_MAIN.component('main',main);
BEN_DEV_MAIN.component('home',home);
BEN_DEV_MAIN.component('about',about);
BEN_DEV_MAIN.component('blog',blog);
