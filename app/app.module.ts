import { NgModule , OpaqueToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppListComponent } from './app-list.component';
import { AppAddComponent } from './app-add.component';
import { AppSearchComponent } from './app-search.component';

import { AppService } from './app.service';

import { CONFIG_TOKEN } from './config_token';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppEffects } from './effects';
import { reducer as recipeReducer } from './reducer';

import { AuthGuard } from './auth-guard.service';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { Auth } from './services/auth.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule , MaterialModule } from '@angular/material';

@NgModule({

    declarations:[AppComponent , AppListComponent , AppAddComponent , AppSearchComponent],
    providers:[AppService ,
     { provide: CONFIG_TOKEN, useValue: { apiUrl: 'http://localhost:3000/' } },
       AUTH_PROVIDERS,
       Auth,
       AuthGuard
    ],
    imports:[ BrowserModule ,
              BrowserAnimationsModule ,
              MdButtonModule ,
              MdCheckboxModule ,
              MaterialModule ,
              HttpModule,
              FormsModule,
              ReactiveFormsModule,
              RouterModule.forRoot([
                  {path:'' , component:AppListComponent},
                  {path:'add' , 
                  canActivate:[AuthGuard] ,
                   component: AppAddComponent},
                  {path:'search' , component: AppSearchComponent  }
              ]) ,
            StoreModule.provideStore(
                  {
                      recipes:recipeReducer
                  }
              ),
     EffectsModule.run(AppEffects)
    ] ,
    exports:[],   
    bootstrap:[AppComponent]
})

export class AppModule { }