import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    CustomInputComponent,
    SidebarComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [
    CustomInputComponent,
    SidebarComponent,
    LayoutComponent,
  ],
})
export class SharedModule {}
