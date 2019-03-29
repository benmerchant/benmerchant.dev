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

export const mainState = {
  name: 'main',
  redirectTo: 'home',
  component: 'main'
};

export const navState = {
  // parent: 'main',
  name: 'nav',
  // redirectTo: 'main',
  component: 'nav'
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

export const projectsState = {
  parent: 'main',
  name: 'projects',
  url: '/projects',
  component: 'projects'
};
