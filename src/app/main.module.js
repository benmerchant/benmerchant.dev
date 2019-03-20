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
// misguided attempt to grap the modules the hard way....
// import {StickyStatesPlugin} from './node_modules/@uirouter/core/_bundles/ui-router-core/sticky-states';
// import {DSRPlugin} from './node_modules/@uirouter/core/_bundles/ui-router-core/dsrplugin';
// import { StickyStatesPlugin,DSRPlugin,visualizer } from '../../node_modules/@uirouter/core/_bundles/ui-router-core.js';
import { StickyStatesPlugin } from '@uirouter/sticky-states';
import { DSRPlugin } from '@uirouter/dsr';
import { visualizer } from '@uirouter/visualizer';
import ocLazyLoad from 'oclazyload';

import { main } from './main.component';
import { welcome } from './components/welcome/welcome.component';
import { about } from './components/about/about.component';
// import { ComponentsModule } from './components/components.module';
// import { SharedModule } from './shared/shared.module';
import primitive from './assets/styles/vendor/primitive/main.scss';
import styles from './main.scss';

import {mainState,welcomeState,aboutState} from  './main.states';

// this needs to go somewhere else
import {MainConfig} from './mainConfig.service';



console.log('MAIN - module definition');
export const BEN_DEV_MAIN = angular.module('bendev',[
  uiRouter,
  ocLazyLoad
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
  $urlService.rules.otherwise({state:'welcome'});

  const $stateRegistry = $uiRouter.stateRegistry;
  $stateRegistry.register(mainState);
  $stateRegistry.register(welcomeState);
  $stateRegistry.register(aboutState);

  // register these plugins to our main module
  $uiRouter.plugin(StickyStatesPlugin);
  // $uiRouter.plugin(DSRPlugin);
  // // show ui-router visualizer
  // visualizer($uiRouter);
}]);

// place this somewhere else. like a service module or something
BEN_DEV_MAIN.service('MainConfig', MainConfig);

BEN_DEV_MAIN.component('bendev',main);
BEN_DEV_MAIN.component('welcome',welcome);
BEN_DEV_MAIN.component('about',about);
