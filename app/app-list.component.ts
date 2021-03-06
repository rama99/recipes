import { Component , ChangeDetectionStrategy , OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ActionTypes , RecipeActions } from './actions';

import { AppService } from './app.service';

import { Auth  } from './services/auth.service';

@Component({
    selector:'',
    templateUrl:'/list',
    changeDetection: ChangeDetectionStrategy.Default
    
})

export class AppListComponent {

    blnAddComment:boolean;
    
    constructor(
        private store:Store<{}>,
        private auth:Auth
    ) { }

    ngOnInit() {        
        this.store.dispatch(RecipeActions.loadRecipe());
    }

    addComment(comments) {
        
        alert('comment added');
        this.store.dispatch(RecipeActions.addComments(comments));
    }

    showAddComment() {
        this.blnAddComment = true;
    }

}