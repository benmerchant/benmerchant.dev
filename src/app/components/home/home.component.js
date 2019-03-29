import {homeTemplate} from './home.html'
console.log('home.component');

class HomeController {
  constructor(HomeService) {
    this.HomeService=HomeService;
  };
  $onInit(){
    this.phrase = 'Howdy!';

    // fun toggler to test functionality
    this.togglePhrase = function() {
        this.phrase = (this.phrase == 'Howdy!') ? 'JavaScript is fun!' : 'Howdy!'
    };

    this.HomeService.getStaticArray((results) =>{
      this.phraseArray = results;
      console.log('HomeService inside HomeController');
      console.log(this.phraseArray);
    });

  }; // end $onInit
};
HomeController.$inject = ['HomeService'];

export const home = {
  controller: HomeController,
  template: homeTemplate
};
