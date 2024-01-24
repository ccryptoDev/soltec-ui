import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { MatIconModule } from '@angular/material/icon';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [
    CustomInputComponent,
    PageHeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [
    CustomInputComponent,
    PageHeaderComponent
  ],
})
export class SharedModule {}
