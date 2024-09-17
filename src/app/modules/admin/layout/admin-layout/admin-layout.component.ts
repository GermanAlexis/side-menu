import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../../../shared/components/side-menu/side-menu.component';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent, NavbarComponent],
  templateUrl: './admin-layout.component.html',
})
export default class AdminLayoutComponent {
  isAuthenticated = signal(false);

  signIn() {
    this.isAuthenticated.set(true);
  }

  signOut() {
    this.isAuthenticated.set(false);
  }
}
