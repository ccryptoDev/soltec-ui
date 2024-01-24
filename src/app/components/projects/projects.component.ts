import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [];
  isSidebarCollapsed: boolean = true;
  displayedColumns: string[] = ['Nombre', 'Descripción', 'Creador', 'Fecha de creación', 'Actualizado', 'Permiso', 'actions'];
  dataSource: MatTableDataSource<Project> = new MatTableDataSource<Project>([]);

  constructor(private sharedService: SharedService, private projectsService: ProjectsService) {
    this.sharedService.toggleCollapse.subscribe(() => {
      this.toggleSidebarCollapse();
    });
  }

  ngOnInit(): void {
    // this.projectsService.getProjects().subscribe((projects) => {
    //   this.projects = projects;
    // });
    this.projects = [
      {
        "id": 1,
        "name": "Atacama",
        "description": "Descripción del proyecto",
        "creator": "Diego Pérez",
        "createdDate": "2023-10-25",
        "updatedDate": "2023-10-25",
        "permission": "Admin"
      },
      {
        "id": 2,
        "name": "Atacama",
        "description": "Descripción del proyecto",
        "creator": "Diego Pérez",
        "createdDate": "2023-10-25",
        "updatedDate": "2023-10-25",
        "permission": "Admin"
      },
      {
        "id": 3,
        "name": "Atacama",
        "description": "Descripción del proyecto",
        "creator": "Diego Pérez",
        "createdDate": "2023-10-25",
        "updatedDate": "2023-10-25",
        "permission": "Admin"
      }
    ];
    this.dataSource = new MatTableDataSource<Project>(this.projects);
  }

  editProject(project: Project) {

  }

  downloadProject(project: Project) {

  }

  deleteProject(project: Project) {

  }

  getCellValue(project: Project, column: string): string {
    if (column === 'actions') {
      return '';
    }
    return (project as any)[column];
  }

  sortData(event: Event): void {

  }


  paginate(event: any): void {

  }

  sortByColumn(column: string): void {
    // this.dataSource.sort = this.sort;
  }

  onSearch(key: string) {

  }

  onFilter() {

  }

  onCreate() {

  }

  toggleSidebarCollapse() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
