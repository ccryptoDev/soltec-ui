import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isSidebarCollapsed: boolean = false;

  constructor(private sharedService: SharedService) {}

  onToggleCollapse() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    this.sharedService.toggleCollapse.emit();
  }
}
