// 'use strict';
/*
* Title: app.module.js
*
* Description: root/app level module for the site
 *
 * Author: Ben Merchant
*/
'use strict';

import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ocLazyLoad from 'oclazyload';

import { MainComponent } from './main.component';
// import { ComponentsModule } from './components/components.module';
// import { SharedModule } from './shared/shared.module';
import primitive from './assets/styles/vendor/primitive/main.scss';
import styles from './main.scss';

import {mainState,welcomeState} from  './main.states';




export const BEN_DEV_MAIN = angular.module('bendev',[
  uiRouter,
  ocLazyLoad
]);

BEN_DEV_MAIN.config(['$uiRouterProvider', ($uiRouter) => {
  console.log('MAIN');
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
}]);






// bendev.config('config', config);
//
// config.$inject = ['uiRouter','$stateProvider'];
// function config(uiRouter, $stateProvider) {
//   const welcomeState = {
//     name: 'welcome',
//     url: '/welcome',
//     template: '<h3>Welcome to my professional website!</h3>'
//   };
//
//   const aboutState = {
//     name: 'about',
//     url: '/about',
//     template: '<h3>My name is Ben Merchant, and I love Javascript!</h3>'
//   };
//
//   $stateProvider.state(welcomeState);
//   $stateProvider.state(aboutState);
// };
