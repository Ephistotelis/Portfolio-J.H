import { Component, OnInit } from '@angular/core';
import { ProjectlistserviceService } from 'src/app/__projectlist/projectlistservice.service';


@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  projects:Array<any> = [];

  
  constructor(projectlist: ProjectlistserviceService) {  
    this.projects = projectlist.projects;
  }
 
  

  ngOnInit(): void {
    
  }
  projectsToText(index:number){
    return JSON.stringify(this.projects[index])
   }
}
