import { Component } from '@angular/core';

import { Auth  } from './services/auth.service';

@Component({
    selector:'',
    templateUrl:'/search'
})

export class AppSearchComponent {

    constructor(private auth:Auth) { }

}