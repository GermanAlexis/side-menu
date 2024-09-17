import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  isAuthenticated = input<boolean>(false);

  signIn = output();
  signOn = output();

  title = input<string>('Apx');
  subTitle = input<string>('Corp');
}
