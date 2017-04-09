"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionTypes = {
    LOAD_RECIPE: 'LOAD_RECIPE',
    LOAD_RECIPE_SUCCESS: 'LOAD_RECIPE_SUCCESS',
    ADD_RECIPE: 'ADD_RECIPE',
    ADD_RECIPE_SUCCESS: 'ADD_RECIPE_SUCCESS',
    SEARCH_RECIPE: 'SEARCH_RECIPE',
    SEARCH_RECIPE_SUCCESS: 'SEARCH_RECIPE_SUCCESS',
    ADD_COMMENTS: 'ADD-COMMENTS',
    ADD_COMMENTS_SUCCESS: 'ADD_COMMENTS_SUCCESS',
};
var RecipeActions = (function () {
    function RecipeActions() {
    }
    RecipeActions.loadRecipe = function () {
        return {
            type: exports.ActionTypes.LOAD_RECIPE,
            payload: {}
        };
    };
    RecipeActions.loadRecipeSuccess = function (recipes) {
        return {
            type: exports.ActionTypes.LOAD_RECIPE_SUCCESS,
            payload: recipes.data
        };
    };
    RecipeActions.addRecipe = function (recipe) {
        return {
            type: exports.ActionTypes.ADD_RECIPE,
            payload: recipe
        };
    };
    RecipeActions.addRecipeSuccess = function (recipe) {
        return {
            type: exports.ActionTypes.ADD_RECIPE_SUCCESS,
            payload: recipe.data
        };
    };
    RecipeActions.addComments = function (comment) {
        return {
            type: exports.ActionTypes.ADD_COMMENTS,
            payload: comment
        };
    };
    RecipeActions.addCommentsSuccess = function (comment) {
        return {
            type: exports.ActionTypes.ADD_COMMENTS_SUCCESS,
            payload: comment.data
        };
    };
    return RecipeActions;
}());
exports.RecipeActions = RecipeActions;
//# sourceMappingURL=actions.js.map