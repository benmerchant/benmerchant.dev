/*
 * Title: home.module.js
 *
 * Description: control the flow of data to and from the back end
 *
 * Author: Ben Merchant
*/

import {Globalvars} from '../miscHelpers/Globalvars.service';
import {HomeService} from './home.service';

export const HOME_MODULE = angular.module('home',[]);


HOME_MODULE.service('HomeService', HomeService);
HOME_MODULE.service('Globalvars', Globalvars);
