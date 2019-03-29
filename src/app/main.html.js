// import <nav> & <footer>
import {NavTemplate} from './shared/nav/nav.html';
import {footerTemplate} from './shared/footer/footer.html';

export const mainTemplate = `
  <div id="the-container" class='dis-flex flex-100-wide'>
    ${NavTemplate}
    <div id='big-div' class="dis-flex flex-100-wide">
      <span id='title' class="dis-flex flex-100-wide bg-light-bluish text-center">
        <h1>Ben Merchant dot dev</h1>
      </span>

      <div ui-view class="flex-100-wide text-center dis-flex x-center"></div>


      <div class="dis-flex flex-100-wide x-center" ui-view='home' ng-show='$ctrl.isActive("home.**")'>
        home state div - (hardcoded in main.component)
      </div>

      <div class="dis-flex flex-100-wide x-center" ui-view='projects' ng-show='$ctrl.isActive("projects.**")'>
        Projects state div - (hardcoded in main.component)
      </div>

      <div class="dis-flex flex-100-wide x-center" ui-view='about' ng-show='$ctrl.isActive("about.**")'>
        About state div - (hardcoded in main.component)
      </div>

      <div class="dis-flex flex-100-wide x-center" ui-view='blog' ng-show='$ctrl.isActive("blog.**")'>
        blog state div - (hardcoded in main.component)
      </div>

    </div>
    ${footerTemplate}
  </div>
`;
