import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pages-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProjectsComponent {}
