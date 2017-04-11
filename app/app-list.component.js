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
var store_1 = require("@ngrx/store");
var actions_1 = require("./actions");
var auth_service_1 = require("./services/auth.service");
var AppListComponent = (function () {
    function AppListComponent(store, auth) {
        this.store = store;
        this.auth = auth;
    }
    AppListComponent.prototype.ngOnInit = function () {
        this.store.dispatch(actions_1.RecipeActions.loadRecipe());
    };
    AppListComponent.prototype.addComment = function (comments) {
        alert('comment added');
        this.store.dispatch(actions_1.RecipeActions.addComments(comments));
    };
    AppListComponent.prototype.showAddComment = function () {
        this.blnAddComment = true;
    };
    return AppListComponent;
}());
AppListComponent = __decorate([
    core_1.Component({
        selector: '',
        templateUrl: '/list',
        changeDetection: core_1.ChangeDetectionStrategy.Default
    }),
    __metadata("design:paramtypes", [store_1.Store,
        auth_service_1.Auth])
], AppListComponent);
exports.AppListComponent = AppListComponent;
//# sourceMappingURL=app-list.component.js.map