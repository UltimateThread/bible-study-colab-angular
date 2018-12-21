import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isLoggedIn = false;
  showOverlay = false;
  loggedOutSubscription: any;

  constructor(
    private auth: AuthenticationService
    ) { }

  ngOnInit() {
    if (localStorage.getItem('currentBSCUser')) {
      // logged in so return true
      this.isLoggedIn = true;
    }

    // Subscribe to the event on the AuthenticationService to get notified when the user logs out
    this.loggedOutSubscription = this.auth.getEmittedValue()
      .subscribe((item: boolean) => {
        if (!item) {
          this.showOverlay = false;
        }
        this.isLoggedIn = item;
      });

    // Check if we have a BSC user token cached and automatically log in if so
    this.isLoggedIn = localStorage.getItem('currentBSCUser') ? true : false;
  }

  userSettingsDrawer() {
    this.showOverlay = !this.showOverlay;
  }
}
