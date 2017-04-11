import { Component , ChangeDetectionStrategy , OnInit } from '@angular/core';
import { FormBuilder , FormControl , FormGroup , FormArray , Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Ingredient , Review , Recipe } from './reducer';
import { ActionTypes , RecipeActions } from './actions';

import { Auth  } from './services/auth.service';

@Component({
    selector:'',
    templateUrl:'/add',
    changeDetection: ChangeDetectionStrategy.Default
})

export class AppAddComponent implements OnInit {

    private fg:FormGroup;
    errorMessage:string;
    

    constructor(
        private fb:FormBuilder,
        public store:Store<{}>,
        private auth:Auth
    ) { }

    ngOnInit() {

      this.errorMessage = "";

      this.fg =  this.fb.group({
            "title" : ["" , Validators.compose([Validators.required , Validators.maxLength(50)])],
            "image_url" : ["" , Validators.compose([Validators.required , Validators.maxLength(50)])],
            "recipe_by" : ["" , Validators.compose([Validators.required , Validators.maxLength(50)])],
            "description": ["" , Validators.compose([Validators.required , Validators.maxLength(100)])],

            "ingredients": this.fb.array([
                this.initIngredient()
            ]),

            "directions": ["" , Validators.compose([Validators.required , Validators.maxLength(1000)])],

            "prep_time": ["" , Validators.compose([Validators.required , Validators.maxLength(10) , Validators.pattern(/^\d+$/)])],
            "cook_time": ["" , Validators.compose([Validators.required , Validators.maxLength(10) , Validators.pattern(/^\d+$/)])],

            "reviews": this.fb.array([
                //this.initReview()
            ])

        });

       /// this.addIngredient();
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
        // check if form is Valid
        if(this.fg.invalid) 
        {
            console.log('Invalid Form');
            this.errorMessage = "Please enter values for  all Required Fields";
        }
        else 
        {
            this.store.dispatch(RecipeActions.addRecipe(this.fg.value));
            console.log("added recipe" , this.fg.value);
        }
        
    }

}