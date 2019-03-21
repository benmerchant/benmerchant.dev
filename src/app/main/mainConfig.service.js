/*
 * Title: main.config.js
 *
 * Description: service to store and retrieive user prefs in session storage
 *
 * Author: Ben Merchant
     CTRL+C'd from: git/@christopherthielen
     Code: https://github.com/ui-router/sample-app-angularjs/blob/ac107905c6eba60aca4229f0648102c33b3ee128/app/global/appConfig.service.js
*/
console.log('mainConfig.service');
// right now, all it does is set the email emailAddress to undefined
// going through each item individually
export class MainConfig {
  constructor() {
      this.emailAddress = undefined;
  }
};
// commenting out all references to this file for now. Not doing anything
