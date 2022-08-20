import { Component, Input, OnInit } from '@angular/core';
import { ProjectlistserviceService } from '../__projectlist/projectlistservice.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() projectList:any;
  projects:Array<any> = [];
  constructor(projectlist: ProjectlistserviceService) { 
    this.projects = projectlist.projects;
  }

  ngOnInit(): void {
  }

  projectsToText(index:number){
   return JSON.stringify(this.projects[index])
  }

  scrollToTop(){
    document.documentElement.scrollTop = 0;
  }
}
