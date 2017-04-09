import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';


import { Effect , Actions } from '@ngrx/effects';

import { AppService } from './app.service';
import { ActionTypes , RecipeActions } from './actions';

import { Router , ActivatedRoute } from '@angular/router';

@Injectable()
export class AppEffects {

constructor(
    private actions$: Actions,
    private router: Router,
    private route: ActivatedRoute,
    private service: AppService
) { }


  @Effect() recipes$ = this.actions$
        .ofType(ActionTypes.LOAD_RECIPE)
        .switchMap(() => this.service.GetRecipes() 
            .map(recipes => { console.log('EFFECTS' , recipes);return RecipeActions.loadRecipeSuccess(recipes)} )                 
        ); 
        
       
  @Effect() add$ = this.actions$
        .ofType(ActionTypes.ADD_RECIPE)
        .switchMap((action) => this.service.AddRecipe(action.payload) 
            .map(recipe => { console.log('EFFECTS' , recipe);return RecipeActions.addRecipeSuccess(recipe)} )                 
        ); 


    @Effect() addComments$ = this.actions$
        .ofType(ActionTypes.ADD_COMMENTS)
        .switchMap((action) => this.service.AddComments(action.payload) 
            .map(comments => { console.log('EFFECTS' , comments);return RecipeActions.addCommentsSuccess(comments)} )                 
        );    

}