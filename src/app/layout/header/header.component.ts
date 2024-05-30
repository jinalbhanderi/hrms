import { Component } from '@angular/core';
import { BroadcastService } from 'src/app/core/services/broadcast.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public modalOpen: boolean = false;
  // currentRoute!: string;

  // constructor(private broadcastService: BroadcastService) {}

  // ngOnInit() {
  //   this.currentRoute = this.broadcastService.getCurrentRoute(); // Retrieve current route from service
  //   this.broadcastService.routeChanged$.subscribe((route) => {
  //     this.currentRoute = route;
  //   });
  // }
  currentRoute!: string;
  routeParts!: string[];

  constructor(private broadcastService: BroadcastService) {}

  ngOnInit() {
    this.updateRoute(this.broadcastService.getCurrentRoute());
    this.broadcastService.routeChanged$.subscribe((route) => {
      this.updateRoute(route);
    });
  }

  private updateRoute(route: string): void {
    this.currentRoute = route;
    this.routeParts = route.split('/').filter((part) => part); // Split and filter out empty parts
  }

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }
}
