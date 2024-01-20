import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  isSidebarCollapsed: boolean = true;

  constructor(private sharedService: SharedService) {
    this.sharedService.toggleCollapse.subscribe(() => {
      this.toggleSidebarCollapse();
    });
  }

  toggleSidebarCollapse() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
