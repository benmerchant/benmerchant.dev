/*
 * Title: main.states.js
 *
 * Description: parent state for entire site.
 *
 * Author: Ben Merchant
    CTRL+C'd from: git/@christopherthielen
    Code: https://github.com/ui-router/sample-app-angularjs/blob/ac107905c6eba60aca4229f0648102c33b3ee128/app/main/app.states.js
*/
import {mainTemplate, mainController} from './main.component';
import {homeTemplate, homeController} from './components/home/home.component';

export const mainState = {
  name: 'main',
  redirectTo: 'home',
  component: 'main'
};
////// TODO: switch to an actual home page
// export const mainState = {
//   name: 'main',
//   url: '/',
//   component: 'main'
// };

// default state: 'home' - 404
export const homeState = {
  parent: 'main',
  name: 'home',
  url: '/home',
  component: 'home'
};

export const aboutState = {
  parent: 'main',
  name: 'about',
  url: '/about',
  component: 'about'
};
