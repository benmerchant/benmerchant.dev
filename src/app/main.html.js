// import image to place in html
import logoLightBlueImported from './assets/imgs/logos/logo_lightblue_knockout.png';

const logoLightBlueElement = new Image();
logoLightBlueElement.src = logoLightBlueImported;

export const mainTemplate = `
  <div id="the-container">
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
    <div id='big-div'>
      <h1>Main Body</h1>

      <div ui-view></div>
      <div ui-view='home' ng-show='$ctrl.isActive("home.**")'>
        home state div - (hardcoded in main.component)
      </div>
      <div ui-view='projects' ng-show='$ctrl.isActive("projects.**")'>
        Projects state div - (hardcoded in main.component)
      </div>
      <div ui-view='about' ng-show='$ctrl.isActive("about.**")'>
        About state div - (hardcoded in main.component)
      </div>
      <div ui-view='blog' ng-show='$ctrl.isActive("blog.**")'>
        blog state div - (hardcoded in main.component)
      </div>
    </div>
    <footer><h1>Footer</h1></footer>
  </div>
`;
