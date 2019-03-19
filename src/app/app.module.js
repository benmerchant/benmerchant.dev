// 'use strict';
/*
* Title: app.module.js
*
* Description: root/app level module for the site
 *
 * Author: Ben Merchant
*/

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';
import './app.scss';

export const AppModule = angular
  .module('bendev', [
    uiRouter,
    ComponentsModule,
    SharedModule
  ])
  .component('bendev', AppComponent)
  .name;
