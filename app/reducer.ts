import  { Action  } from '@ngrx/store';
import  { ActionTypes } from './actions';

export interface Ingredient {
    ingredient:string;
    qty:string;
}

export interface Review {
    name:string;
    comments:string;
}

export interface Recipe {
    id: string;
    title:string;
    image_url:string;
    recipe_by:string;
    description:string;
    ingredients:Ingredient[],
    directions:string;
    prep_time:number;
    cook_time:number;
    reviews:Review[]
}

export interface State  {
    recipes:Recipe[],
    current_page:number
}

let initialState:State = {
    recipes:[],
    current_page:0
}

export function reducer(state:State = initialState , action:Action ) {

    switch(action.type) 
    {
        case ActionTypes.LOAD_RECIPE_SUCCESS:
            console.log('LOGGGGG' , action.payload);
            return Object.assign({} , state , {recipes: action.payload });
        case ActionTypes.ADD_RECIPE_SUCCESS:
            return state; 
        case ActionTypes.ADD_COMMENTS_SUCCESS:
            return state;    
        default:
            return state;
    }
}