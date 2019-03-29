import {homeTemplate} from './home.html'
console.log('home.component');

class HomeController {
  constructor(HomeService) {
    this.HomeService = HomeService;
  };
  $onInit(){
    console.log('$onInit() class HomeController');
    this.phrase = 'Howdy!';

    // fun toggler to test functionality
    this.togglePhrase = function() {
        this.phrase = (this.phrase == 'Howdy!') ? 'JavaScript is fun!' : 'Howdy!'
    };
    this.phraseArray = this.HomeService.getStaticArray((results) => {
      console.log('this.HomeService.getStaticArray');
      this.phraseArray = results;
      console.log(this.phraseArray);
    });


  }; // end $onInit
};
HomeController.$inject = ['HomeService'];

export const home = {
  controller: HomeController,
  template: homeTemplate
};
