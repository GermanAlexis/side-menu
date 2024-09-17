import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuComponent } from '../../../shared/components/side-menu/side-menu.component';
import ProjectsComponent from '../projects/projects.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [SideMenuComponent, ProjectsComponent, NavbarComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SummaryComponent {}
