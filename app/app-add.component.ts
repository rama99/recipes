import { Component , ChangeDetectionStrategy , OnInit } from '@angular/core';
import { FormBuilder , FormControl , FormGroup , FormArray , Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Ingredient , Review , Recipe } from './reducer';
import { ActionTypes , RecipeActions } from './actions';

@Component({
    selector:'',
    templateUrl:'/add',
    changeDetection: ChangeDetectionStrategy.Default
})

export class AppAddComponent implements OnInit {

    private fg:FormGroup;

    constructor(
        private fb:FormBuilder,
        public store:Store<{}>
    ) { }

    ngOnInit() {

      this.fg =  this.fb.group({
            "title" : ["" , Validators.compose([Validators.required])],
            "image_url" : ["" , Validators.compose([Validators.required])],
            "recipe_by" : ["" , Validators.compose([Validators.required])],
            "description": ["" , Validators.compose([Validators.required])],

            "ingredients": this.fb.array([
                this.initIngredient()
            ]),

            "directions": ["" , Validators.compose([Validators.required])],

            "prep_time": ["" , Validators.compose([Validators.required])],
            "cook_time": ["" , Validators.compose([Validators.required])],

            "reviews": this.fb.array([
                //this.initReview()
            ])

        });

        this.addIngredient();
    }

    initIngredient() {

        return this.fb.group({
            "ingredient": ["" , Validators.compose([Validators.required]) ],
            "qty": ["" , Validators.compose([Validators.required])]
        });
    }

    addIngredient() {

      const control =  <FormArray>this.fg.controls["ingredients"];
      control.push(this.initIngredient())
    }

    initReview() {

        return this.fb.group({
            "name": ["" , Validators.compose([ Validators.required])],
            "comments": ["" , Validators.compose([Validators.required])]
        })
    }

    addRecipe() {

        this.store.dispatch(RecipeActions.addRecipe(this.fg.value));
        console.log("added recipe" , this.fg.value);
    }

}