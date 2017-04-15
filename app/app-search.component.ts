import { Component , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Recipe } from './reducer';

import { Auth  } from './services/auth.service';
import { AppService } from './app.service';

@Component({
    selector:'',
    templateUrl:'/search'
})

export class AppSearchComponent implements OnInit {

    search:FormControl  = new FormControl();;
    recipes:Observable<Recipe[]>;

    constructor( private auth:Auth ,
                 private service:AppService) { }

    ngOnInit() {

     this.recipes =   this.search.valueChanges
                          .debounceTime(400)
                          .distinctUntilChanged()
                          .switchMap( (search) =>  this.service.SearchRecipe(search) ) 
                          .map( (data) => data.data);
    }

}