export const homeTemplate =
  `
  <div class='home-container flex-100-wide'>
    <h3>
      home to my site!
    </h3>
  </div>
  <div class='home-container flex-100-wide'>
    <h3>
      {{$ctrl.phrase}}
    </h3>
    <button ng-click="$ctrl.togglePhrase()">Toggle Phrase!</button>
  </div> <!-- # end .home-container -->
  `
;
