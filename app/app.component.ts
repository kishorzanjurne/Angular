import { Component } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, RouterEvent, NavigationCancel, NavigationError } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  showLoadingIndicatior ;
  constructor(private _router: Router) {
    this._router.events.subscribe((routerEvent: Event) => {

      if (routerEvent instanceof NavigationStart) {
        console.log("navigastion")
        this.showLoadingIndicatior = true;
      }

      if (routerEvent instanceof NavigationEnd) {
        this.showLoadingIndicatior = false;
      }

    });
  }
}
