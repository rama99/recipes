import { Action } from '@ngrx/store';

export const ActionTypes = {

LOAD_RECIPE:'LOAD_RECIPE',
LOAD_RECIPE_SUCCESS: 'LOAD_RECIPE_SUCCESS',

ADD_RECIPE:'ADD_RECIPE',
ADD_RECIPE_SUCCESS:'ADD_RECIPE_SUCCESS',

SEARCH_RECIPE:'SEARCH_RECIPE',
SEARCH_RECIPE_SUCCESS:'SEARCH_RECIPE_SUCCESS',

ADD_COMMENTS:'ADD-COMMENTS',
ADD_COMMENTS_SUCCESS:'ADD_COMMENTS_SUCCESS',

}

export class RecipeActions {

static loadRecipe(): Action {

    return {
        type:ActionTypes.LOAD_RECIPE,
        payload:{}
    }
}

static loadRecipeSuccess(recipes): Action {

    return {
        type: ActionTypes.LOAD_RECIPE_SUCCESS,
        payload:recipes.data
    }
}

static addRecipe(recipe:any): Action {
    return {
        type:ActionTypes.ADD_RECIPE,
        payload:recipe
    }
}

static addRecipeSuccess(recipe:any):Action {
    return {
        type:ActionTypes.ADD_RECIPE_SUCCESS,
        payload:recipe.data
    }
}

static addComments(comment:any): Action {
    return {
        type: ActionTypes.ADD_COMMENTS,
        payload:comment
    }
}

static addCommentsSuccess(comment:any): Action {
    return {
        type:ActionTypes.ADD_COMMENTS_SUCCESS,
        payload:comment.data
    }
}

}