import { Component } from '@angular/core';

import { Router, RouterOutlet } from '@angular/router';
import { fadeAnimation } from './app-routing.animations';

@Component({
  selector    : 'app-root',
  templateUrl : './app.component.html',
  styleUrls   : ['./app.component.scss'],
  animations: [ fadeAnimation ]
})
export class AppComponent {
  constructor(private router: Router) {
    console.log('COMPONENT APP');
  }

  /** */
  prepareRoute(outlet: RouterOutlet) {
    // return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
