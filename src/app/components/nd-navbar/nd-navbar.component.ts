import { Component, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';


@Component({
  selector    : 'nd-navbar',
  templateUrl : './nd-navbar.component.html',
  styleUrls   : ['./nd-navbar.component.scss'],
})
export class NdNavbarComponent implements OnInit, AfterViewInit {
  public normalLight: boolean;

  constructor() {
    this.normalLight = false;
  }
  ngOnInit() {}


  /** */
  @HostBinding('class.normal-light') get isNormalLight() {
    return this.normalLight;
  };


  /** */
  ngAfterViewInit() {
    // https://netbasal.com/reactive-sticky-header-in-angular-12dbffb3f1d3
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
    );
    scroll$.subscribe(ev => {
      this.normalLight = ev > 150;
      // console.log(ev, this.normalLight);
    });
  }
}
