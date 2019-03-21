// import image to place in html
import logoLightBlueImported from '../../assets/imgs/logos/logo_lightblue_knockout.png';
import navStyles from './nav.scss';

const logoLightBlueElement = new Image();
logoLightBlueElement.src = logoLightBlueImported;

export const navTemplate = `
<nav class="flex-row">


  <div class="flex-small">
    <img src='${logoLightBlueImported}' width='100' />
  </div>


  <div class="flex-small flex-row vertical-center just-even" >
      <button class="round-button" ui-sref='home' ui-sref-active='Home'>Home</button>
      <button class="round-button" ui-sref='projects' ui-sref-active='Projects'>Projects</button>
      <button class="round-button" ui-sref='about' ui-sref-active='About'>About</button>
      <button class="round-button" ui-sref='blog' ui-sref-active='Blog'>Blog</button>
  </div>


  <br>

</nav>
`
;
