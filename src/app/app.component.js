// 'use strict';
/*
* Title: app.component.js
*
* Description: define base for entire app
 *
 * Author: Ben Merchant
*/

export const AppComponent = {
  template: `
    <nav>
      Hello Navigation
    </nav>
    <div>
      <div ui-view="mainBody"></div>
    </div>
    <footer>
      &copy 2019 Ben Merchant
    </footer>
  `
};
