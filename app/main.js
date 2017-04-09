"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./polyfills.ts");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
//import { environment } from './environments/environment';
var app_module_1 = require("./app.module");
/*if (environment.production) {
  enableProdMode();
}*/
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map