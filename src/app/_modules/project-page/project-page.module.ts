import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPageComponent } from './project-page/project-page.component';
import { HeaderFooterModule } from '../header-footer/header-footer.module';



@NgModule({
  declarations: [
    ProjectPageComponent
  ],
  imports: [
    CommonModule,
    HeaderFooterModule
  ]
})
export class ProjectPageModule { }
