"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_list_component_1 = require("./app-list.component");
var app_add_component_1 = require("./app-add.component");
var app_search_component_1 = require("./app-search.component");
var app_service_1 = require("./app.service");
var config_token_1 = require("./config_token");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var effects_2 = require("./effects");
var reducer_1 = require("./reducer");
var auth_guard_service_1 = require("./auth-guard.service");
var angular2_jwt_1 = require("angular2-jwt");
var auth_service_1 = require("./services/auth.service");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent, app_list_component_1.AppListComponent, app_add_component_1.AppAddComponent, app_search_component_1.AppSearchComponent],
        providers: [app_service_1.AppService,
            { provide: config_token_1.CONFIG_TOKEN, useValue: { apiUrl: 'http://localhost:3000/' } },
            angular2_jwt_1.AUTH_PROVIDERS,
            auth_service_1.Auth,
            auth_guard_service_1.AuthGuard
        ],
        imports: [platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            material_1.MdButtonModule,
            material_1.MdCheckboxModule,
            material_1.MaterialModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forRoot([
                { path: '', component: app_list_component_1.AppListComponent },
                { path: 'add',
                    canActivate: [auth_guard_service_1.AuthGuard],
                    component: app_add_component_1.AppAddComponent },
                { path: 'search', component: app_search_component_1.AppSearchComponent }
            ]),
            store_1.StoreModule.provideStore({
                recipes: reducer_1.reducer
            }),
            effects_1.EffectsModule.run(effects_2.AppEffects)
        ],
        exports: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map