/*
 * Title: ~/src/app/index.js
 *
 * Description: absolute starting place for my site.
              : webpack budling/es6 loader entry point
              : trying to be more like @ChristopherThielen & @toddmotto
 *
 * Author: Ben Merchant
*/
'use strict';
//// Import third party libraries
import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

// import my <feature>.modules
// import { MAIN_MODULE } from './main.module';

// Create THE main event. Top-level AngularJS Module: benMerchantDotDev
console.log('BEN_DEV_MAIN - module definition');
export const BEN_DEV_MAIN = angular.module('benMerchantDotDev',[uiRouter]);

BEN_DEV_MAIN.config([
  '$locationProvider',
  ($locationProvider) => {
    console.log('BEN_DEV_MAIN - config');
    $locationProvider.hashPrefix('');
  }
]);
