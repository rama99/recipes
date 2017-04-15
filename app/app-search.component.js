"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var auth_service_1 = require("./services/auth.service");
var app_service_1 = require("./app.service");
var AppSearchComponent = (function () {
    function AppSearchComponent(auth, service) {
        this.auth = auth;
        this.service = service;
        this.search = new forms_1.FormControl();
    }
    ;
    AppSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recipes = this.search.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(function (search) { return _this.service.SearchRecipe(search); })
            .map(function (data) { return data.data; });
    };
    return AppSearchComponent;
}());
AppSearchComponent = __decorate([
    core_1.Component({
        selector: '',
        templateUrl: '/search'
    }),
    __metadata("design:paramtypes", [auth_service_1.Auth,
        app_service_1.AppService])
], AppSearchComponent);
exports.AppSearchComponent = AppSearchComponent;
//# sourceMappingURL=app-search.component.js.map