import { Component } from '@angular/core';

import { Auth  } from './services/auth.service';

@Component({
selector:'app-root',
templateUrl: '/main'
})

export class AppComponent {

constructor(private auth:Auth) { }

}