// import image to place in html
import logoLightBlueImported from '../../assets/imgs/logos/logo_lightblue_knockout.png';
import navStyles from './nav.scss';

const logoLightBlueElement = new Image();
logoLightBlueElement.src = logoLightBlueImported;

export const navTemplate = `
<nav class="dis-flex flex-100-wide">


  <div id="img-holder" class="dis-flex">
    <img src='${logoLightBlueImported}' />
  </div>


  <div class="dis-flex" >
      <button class="round-button" ui-sref='home' ui-sref-active='Home'>Home</button>
      <button class="round-button" ui-sref='projects' ui-sref-active='Projects'>Projects</button>
      <button class="round-button" ui-sref='about' ui-sref-active='About'>About</button>
      <button class="round-button" ui-sref='blog' ui-sref-active='Blog'>Blog</button>
  </div>



</nav>
`
;
// WHY DOES PRIMITIVE HAVE HORIZONTAL SPACING INCLUDED IN .VERTICAL-CENTER!?!?!
