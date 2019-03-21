// import <nav> & <footer>
import {navTemplate} from './shared/nav/nav.html';
import {footerTemplate} from './shared/footer/footer.html';

export const mainTemplate = `
  <div id="the-container" class='container'>
    ${navTemplate}
    <div id='big-div' class="flex-row">
      <span id='title' class="flex-100-wide bg-light-bluish text-center">
        <h1>Main Body</h1>
      </span>

      <div ui-view class="flex-100-wide text-center"></div>


      <div class="flex-100-wide text-center" ui-view='home' ng-show='$ctrl.isActive("home.**")'>
        home state div - (hardcoded in main.component)
      </div>

      <div class="flex-100-wide text-center" ui-view='projects' ng-show='$ctrl.isActive("projects.**")'>
        Projects state div - (hardcoded in main.component)
      </div>

      <div class="flex-100-wide text-center" ui-view='about' ng-show='$ctrl.isActive("about.**")'>
        About state div - (hardcoded in main.component)
      </div>

      <div class="flex-100-wide text-center" ui-view='blog' ng-show='$ctrl.isActive("blog.**")'>
        blog state div - (hardcoded in main.component)
      </div>
      
    </div>
    ${footerTemplate}
  </div>
`;
