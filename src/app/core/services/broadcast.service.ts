import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BroadcastService {
  private routeChangedSource = new Subject<string>();
  routeChanged$: Observable<string> = this.routeChangedSource.asObservable();

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let currentRoute = event.url;
        currentRoute = currentRoute.startsWith('/')
          ? currentRoute.substring(1)
          : currentRoute; // Remove leading slash
        localStorage.setItem('currentRoute', currentRoute); // Store current route in Local Storage
        this.routeChangedSource.next(currentRoute);
      }
    });
  }

  getCurrentRoute(): string {
    let currentRoute = localStorage.getItem('currentRoute') || ''; // Retrieve current route from Local Storage
    currentRoute = currentRoute.startsWith('/')
      ? currentRoute.substring(1)
      : currentRoute; // Remove leading slash
    return currentRoute;
  }
}
