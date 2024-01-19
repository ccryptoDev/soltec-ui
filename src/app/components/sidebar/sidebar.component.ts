import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() toggleCollapse = new EventEmitter<void>();
  isSidebarCollapsed: boolean = false;

  constructor() {}

  onToggleCollapse() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    this.toggleCollapse.emit();
  }
}
