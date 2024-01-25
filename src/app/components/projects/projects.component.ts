import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project.model';
import {collapseAnimation, fadeInOnEnterAnimation} from "angular-animations";
import { ActiveColumnDirective } from '../../utils/active-column.directive';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    fadeInOnEnterAnimation({
      duration: 400,
      delay: 120
    }),
    fadeInOnEnterAnimation({
      anchor: 'enter',
      duration: 750
    }),
    collapseAnimation()
  ],
})
export class ProjectsComponent {
  isSidebarCollapsed: boolean = true;
  projects: Project[] = [];
  tableColumns: string[] = ['Nombre', 'Descripción', 'Creador', 'Fecha de creación', 'Actualizado', 'Permiso', ''];
  translatedColumn: Record<string, string> = {
    'Nombre': 'name',
    'Descripción': 'description',
    'Creador': 'creator',
    'Fecha de creación': 'createdDate',
    'Actualizado': 'updatedDate',
    'Permiso': 'permission'
  }
  currentSortField: string = '';
  isSortAscending: boolean = true;

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
        "creator": "Vera",
        "createdDate": "2023-10-25",
        "updatedDate": "2023-10-25",
        "permission": "Admin"
      },
      {
        "id": 2,
        "name": "Castile-La Mancha",
        "description": "Descripción del proyecto",
        "creator": "Mario",
        "createdDate": "2023-09-25",
        "updatedDate": "2023-10-25",
        "permission": "Admin"
      },
      {
        "id": 3,
        "name": "Atacama",
        "description": "Descripción del proyecto",
        "creator": "Hernadez",
        "createdDate": "2023-02-25",
        "updatedDate": "2023-04-25",
        "permission": "Visor"
      },
      {
        "id": 4,
        "name": "Proyecto004",
        "description": "Descripción del proyecto",
        "creator": "Gabriela",
        "createdDate": "2024-01-02",
        "updatedDate": "2024-01-25",
        "permission": "Admin"
      },
      {
        "id": 5,
        "name": "Proyecto005",
        "description": "Descripción del proyecto",
        "creator": "Sebastian",
        "createdDate": "2022-10-25",
        "updatedDate": "2022-11-25",
        "permission": "Sin permiso"
      },
      {
        "id": 6,
        "name": "Proyecto003",
        "description": "Descripción del proyecto",
        "creator": "Roberto",
        "createdDate": "2022-12-22",
        "updatedDate": "2023-12-25",
        "permission": "Admin"
      }
    ];
  }

  editProject(project: Project) {

  }

  downloadProject(project: Project) {

  }

  deleteProject(project: Project) {

  }


  paginate(event: any): void {

  }

  sort(field: string): void {
    if (field === this.currentSortField) {
      this.isSortAscending = !this.isSortAscending;
    } else {
      this.isSortAscending = true;
    }

    this.currentSortField = field;

    this.projects.sort((a: Project, b: Project) => {
      const aValue = a[field as keyof Project];
      const bValue = b[field as keyof Project];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return this.isSortAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      } else if (typeof aValue === 'number' && typeof bValue === 'number') {
        return this.isSortAscending ? aValue - bValue : bValue - aValue;
      } else {
        // Handle other data types or mixed types if necessary
        return 0;
      }
    });
  }

  getPropertyValue(project: Project, key: string): any {
    return project[key as keyof Project];
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
