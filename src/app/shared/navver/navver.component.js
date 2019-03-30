import {NavverTemplate} from './navver.html'
console.log('navver.component');

class NavverController {
  constructor(){
    this.word = 'nelly';
  };
  $onInit(){
    console.log('THIS IS NAVIGATION');
    this.initialization = 'start it up';
  }; // end $onInit
};

NavverController.$inject = [];

export const NavverComponent = {
  controller: NavverController,
  template: NavverTemplate
};
