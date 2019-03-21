// import <nav> & <footer>
import {navTemplate} from './shared/nav/nav.html';
import {footerTemplate} from './shared/footer/footer.html';

export const mainTemplate = `
  <div id="the-container" class='container'>
    ${navTemplate}
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
    ${footerTemplate}
  </div>
`;
