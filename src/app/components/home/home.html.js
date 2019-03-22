import navStyles from './home.scss';
export const homeTemplate =
  `
  <div class='home-container flex-100-wide'>
    <h3>
      Welcome to my site.
    </h3>
  </div>
  <div id="icon-arena">
    <i class="fab fa-angular"></i>
    <i class="fab fa-aws"></i>
    <i class="fab fa-node-js"></i>
  </div>
  <div class='home-container flex-100-wide'>
    <h3>
      {{$ctrl.phrase}}
    </h3>
    <button ng-click="$ctrl.togglePhrase()">Toggle Phrase!</button>
  </div> <!-- # end .home-container -->
  `
;
