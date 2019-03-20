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
import {welcomeTemplate, welcomeController} from './components/welcome/welcome.component';

export const mainState = {
  name: 'main',
  redirectTo: 'welcome',
  component: 'main'
};
////// TODO: switch to an actual home page
// export const mainState = {
//   name: 'main',
//   url: '/',
//   component: 'main'
// };

// default state: 'welcome' - 404
export const welcomeState = {
  parent: 'main',
  name: 'welcome',
  url: '/welcome',
  component: 'welcome'
};

export const aboutState = {
  parent: 'main',
  name: 'about',
  url: '/about',
  component: 'about'
};
