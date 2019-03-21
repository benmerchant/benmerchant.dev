// import image to place in html
import logoLightBlueImported from '../../assets/imgs/logos/logo_lightblue_knockout.png';

const logoLightBlueElement = new Image();
logoLightBlueElement.src = logoLightBlueImported;

export const navTemplate = `
<nav class="flex-row">
  <div class="flex-small">
    <img src='${logoLightBlueImported}' width='100' />
  </div>
  <div class="flex-small">
    <button ui-sref='home' ui-sref-active='Home'>Home</button>
    <button ui-sref='projects' ui-sref-active='Projects'>Projects</button>
    <button ui-sref='about' ui-sref-active='About'>About</button>
    <button ui-sref='blog' ui-sref-active='Blog'>Blog</button>
    <h3>{{$ctrl.name}}</h3>
    <button ng-click="$ctrl.togglePhrase()">Toggle Phrase!</button>
  </div>


  <br>

</nav>
`
;
