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
var store_1 = require("@ngrx/store");
var actions_1 = require("./actions");
var AppAddComponent = (function () {
    function AppAddComponent(fb, store) {
        this.fb = fb;
        this.store = store;
    }
    AppAddComponent.prototype.ngOnInit = function () {
        this.fg = this.fb.group({
            "title": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "image_url": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "recipe_by": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "description": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "ingredients": this.fb.array([
                this.initIngredient()
            ]),
            "directions": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "prep_time": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "cook_time": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "reviews": this.fb.array([])
        });
        this.addIngredient();
    };
    AppAddComponent.prototype.initIngredient = function () {
        return this.fb.group({
            "ingredient": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "qty": ["", forms_1.Validators.compose([forms_1.Validators.required])]
        });
    };
    AppAddComponent.prototype.addIngredient = function () {
        var control = this.fg.controls["ingredients"];
        control.push(this.initIngredient());
    };
    AppAddComponent.prototype.initReview = function () {
        return this.fb.group({
            "name": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "comments": ["", forms_1.Validators.compose([forms_1.Validators.required])]
        });
    };
    AppAddComponent.prototype.addRecipe = function () {
        this.store.dispatch(actions_1.RecipeActions.addRecipe(this.fg.value));
        console.log("added recipe", this.fg.value);
    };
    return AppAddComponent;
}());
AppAddComponent = __decorate([
    core_1.Component({
        selector: '',
        templateUrl: '/add',
        changeDetection: core_1.ChangeDetectionStrategy.Default
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        store_1.Store])
], AppAddComponent);
exports.AppAddComponent = AppAddComponent;
//# sourceMappingURL=app-add.component.js.map