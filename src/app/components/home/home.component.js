import {homeTemplate} from './home.html'
console.log('home.component');



export const home = {
  controller: function() {
    this.phrase = 'Howdy!';

    // fun toggler to test functionality
    this.togglePhrase = function() {
        this.phrase = (this.phrase == 'Howdy!') ? 'JavaScript is fun!' : 'Howdy!'
    };
  },
  template: homeTemplate
};
