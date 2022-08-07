import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPageComponent } from './project-page/project-page.component';
import { HeaderFooterModule } from '../header-footer/header-footer.module';
import { ProjectCardLargeComponent } from './project-card-large/project-card-large.component';
import { ProjectlistComponent } from 'src/app/__projectlist/projectlist.component';
import { ProjectlistModule } from 'src/app/__projectlist/projectlist.module';



@NgModule({
  declarations: [
    ProjectPageComponent,
    ProjectCardLargeComponent
  ],
  imports: [
    CommonModule,
    HeaderFooterModule,
    ProjectlistModule,
    
  ],
  providers:[
    ProjectlistComponent
  ]
})
export class ProjectPageModule { }
