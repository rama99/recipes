import { Injectable , Inject  } from '@angular/core';
import { Http , Headers , RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { CONFIG_TOKEN } from './config_token';


@Injectable()
export class AppService {

    constructor( private http:Http ,
                 @Inject(CONFIG_TOKEN) private config:any
                ) { }

    GetRecipes():Observable<any> {
        
        return this.http.get( this.config.apiUrl + 'getlist')
                           .map( (data) => data.json());
    }

    AddRecipe(recipe) {

      let headers:Headers = new Headers();
      headers.append("Content-Type" , "application/json");
      console.log('ADDDD RECIPE' , recipe);
      return this.http.post(this.config.apiUrl + 'addRecipe' , JSON.stringify(recipe) , { headers: headers })
                      .map( data => data.json());

    }

    AddComments(comments) {

        let headers:Headers = new Headers();
        headers.append('Content-Type' , "application/json");

        return this.http.post(this.config.apiUrl + 'addComments' , JSON.stringify({test:"test"}) , {headers: headers })
                    .map( data => data.json());
    }

    SearchRecipe(searchText) {

            return this.http.get('')
                            .map( data => data.json());
    }

}