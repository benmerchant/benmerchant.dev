import {homeTemplate} from './home.html'
console.log('home.component');

class HomeController {
  constructor(HomeService) {
    this.HomeService = HomeService;
  };
  $onInit(){
    console.log('$onInit() class HomeController');
    this.phrase = 'Howdy!';


    this.phraseArray = this.HomeService.getStaticArray((results) => {
      console.log('this.HomeService.getStaticArray');
      this.phraseArray = results.phrases.map((individualPhraseObj) => {
        return individualPhraseObj.human_sentence;
      });
      this.dragonBallZ = Math.floor(Math.random()*(this.phraseArray.length));
      console.log(this.phraseArray);
      this.displayPhrase = this.phraseArray[this.dragonBallZ];
      console.log(this.displayPhrase);
      // fun toggler to test functionality
      this.togglePhrase = function() {
          this.newDBZ = Math.floor(Math.random()*(this.phraseArray.length));
          this.phrase = (this.phrase === 'Howdy!') ? 'JavaScript is fun!' : 'Howdy!';
          this.displayPhrase = (this.newDBZ!==this.dragonBallZ) ? this.phraseArray[this.newDBZ] : 'This can never happen';
      };
    });



  }; // end $onInit
};
HomeController.$inject = ['HomeService'];

export const home = {
  controller: HomeController,
  template: homeTemplate
};
