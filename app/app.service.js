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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
var config_token_1 = require("./config_token");
var AppService = (function () {
    function AppService(http, config) {
        this.http = http;
        this.config = config;
    }
    AppService.prototype.GetRecipes = function () {
        return this.http.get(this.config.apiUrl + 'getlist')
            .map(function (data) { return data.json(); });
    };
    AppService.prototype.AddRecipe = function (recipe) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        console.log('ADDDD RECIPE', recipe);
        return this.http.post(this.config.apiUrl + 'addRecipe', JSON.stringify(recipe), { headers: headers })
            .map(function (data) { return data.json(); });
    };
    AppService.prototype.AddComments = function (comments) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', "application/json");
        return this.http.post(this.config.apiUrl + 'addComments', JSON.stringify({ test: "test" }), { headers: headers })
            .map(function (data) { return data.json(); });
    };
    AppService.prototype.SearchRecipe = function (searchText) {
        return this.http.get(this.config.apiUrl + 'getlist')
            .map(function (data) { return data.json(); });
    };
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(config_token_1.CONFIG_TOKEN)),
    __metadata("design:paramtypes", [http_1.Http, Object])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map