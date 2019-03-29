import {NavTemplate} from './nav.html'
console.log('nav.component');

class NavController {
  constructor(){
    this.word = 'nelly';
  };
  $onInit(){
    console.log('THIS IS NAVIGATION');
    this.initialization = 'start it up';
  }; // end $onInit
};

NavController.$inject = [];

export const NavComponent = {
  controller: NavController,
  template: NavTemplate
};
