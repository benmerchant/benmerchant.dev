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
import {home} from './components/home/home.component';
import {nav} from './shared/nav/nav.component';
import {aboutTemplate, aboutController} from './components/about/about.component';
import {blogTemplate, blogController} from './components/blog/blog.component';
import {projectsTemplate, projectsController} from './components/projects/projects.component';
import { StickyStatesPlugin } from '@uirouter/sticky-states';
import { DSRPlugin } from '@uirouter/dsr';

const mainState = {
  name: 'main',
  redirectTo: 'home',
  component: 'main'
};

const navState = {
  // parent: 'main',
  name: 'nav',
  // redirectTo: 'main',
  component: 'nav'
};

// default state: 'home' - 404
const homeState = {
  parent: 'main',
  name: 'home',
  url: '/home',
  component: 'home'
};

const aboutState = {
  parent: 'main',
  name: 'about',
  url: '/about',
  component: 'about'
};

const blogState = {
  parent: 'main',
  name: 'blog',
  url: '/blog',
  component: 'blog'
};

const projectsState = {
  parent: 'main',
  name: 'projects',
  url: '/projects',
  component: 'projects'
};
//https://github.com/ui-router/dsr/blob/master/examples/angularjs-webpack/app/router.config.js
export const AllStates = [
  mainState,
  navState,
  homeState,
  aboutState,
  blogState,
  projectsState
];
