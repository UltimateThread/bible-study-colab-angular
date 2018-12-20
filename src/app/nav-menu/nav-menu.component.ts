import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isLoggedIn: boolean = true;
  showOverlay: boolean = false;

  userSettingsDrawer(){
      this.showOverlay = !this.showOverlay;
  }
}
