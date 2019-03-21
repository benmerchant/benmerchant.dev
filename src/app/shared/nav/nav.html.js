// import image to place in html
import logoLightBlueImported from '../../assets/imgs/logos/logo_lightblue_knockout.png';

const logoLightBlueElement = new Image();
logoLightBlueElement.src = logoLightBlueImported;

export const navTemplate = `
<nav>
  <div width='33%'>
    <img src='${logoLightBlueImported}' width='100' />
  </div>
  <h1>Navigation - {{$ctrl.phrase}}</h1>
  <h3>{{$ctrl.name}}</h3>
  <button ng-click="$ctrl.togglePhrase()">Toggle Phrase!</button>
  <br>
  <button ui-sref='home' ui-sref-active='Home'>Home</button>
  <button ui-sref='projects' ui-sref-active='Projects'>Projects</button>
  <button ui-sref='about' ui-sref-active='About'>About</button>
  <button ui-sref='blog' ui-sref-active='Blog'>Blog</button>
</nav>
`
;
