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
import {homeTemplate, homeController} from '../features/home/home.component';
import {aboutTemplate, aboutController} from '../features/about/about.component';
import {blogTemplate, blogController} from '../features/blog/blog.component';

console.log('main.states');
export const mainState = {
  name: 'main',
  redirectTo: 'home',
  component: 'main'
};

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

export const blogState = {
  parent: 'main',
  name: 'blog',
  url: '/blog',
  component: 'blog'
};


// export const AllStates = {
//   mainState : {
//     name: 'main',
//     redirectTo: 'home',
//     component: 'main'
//   },
//
//   // default state: 'home' - 404
//   homeState : {
//     parent: 'main',
//     name: 'home',
//     url: '/home',
//     component: 'home'
//   },
//
//   aboutState : {
//     parent: 'main',
//     name: 'about',
//     url: '/about',
//     component: 'about'
//   },
//
//   blogState : {
//     parent: 'main',
//     name: 'blog',
//     url: '/blog',
//     component: 'blog'
//   }
// };
//
// console.log(AllStates);
