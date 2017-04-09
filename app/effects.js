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
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/catch");
var effects_1 = require("@ngrx/effects");
var app_service_1 = require("./app.service");
var actions_1 = require("./actions");
var router_1 = require("@angular/router");
var AppEffects = (function () {
    function AppEffects(actions$, router, route, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.route = route;
        this.service = service;
        this.recipes$ = this.actions$
            .ofType(actions_1.ActionTypes.LOAD_RECIPE)
            .switchMap(function () { return _this.service.GetRecipes()
            .map(function (recipes) { console.log('EFFECTS', recipes); return actions_1.RecipeActions.loadRecipeSuccess(recipes); }); });
        this.add$ = this.actions$
            .ofType(actions_1.ActionTypes.ADD_RECIPE)
            .switchMap(function (action) { return _this.service.AddRecipe(action.payload)
            .map(function (recipe) { console.log('EFFECTS', recipe); return actions_1.RecipeActions.addRecipeSuccess(recipe); }); });
        this.addComments$ = this.actions$
            .ofType(actions_1.ActionTypes.ADD_COMMENTS)
            .switchMap(function (action) { return _this.service.AddComments(action.payload)
            .map(function (comments) { console.log('EFFECTS', comments); return actions_1.RecipeActions.addCommentsSuccess(comments); }); });
    }
    return AppEffects;
}());
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], AppEffects.prototype, "recipes$", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], AppEffects.prototype, "add$", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], AppEffects.prototype, "addComments$", void 0);
AppEffects = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [effects_1.Actions,
        router_1.Router,
        router_1.ActivatedRoute,
        app_service_1.AppService])
], AppEffects);
exports.AppEffects = AppEffects;
//# sourceMappingURL=effects.js.map