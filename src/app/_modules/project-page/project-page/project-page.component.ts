import { Component, OnInit } from '@angular/core';
import { ProjectlistComponent } from 'src/app/__projectlist/projectlist.component';


@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  projects:Array<any> = [];

  
  constructor(projectlist: ProjectlistComponent) {  
    this.projects = projectlist.getList();
  }
 
  

  ngOnInit(): void {
    
  }
  projectsToText(index:number){
    return JSON.stringify(this.projects[index])
   }
}
