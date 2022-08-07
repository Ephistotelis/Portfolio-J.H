import { Component, Input, OnInit } from '@angular/core';
import { ProjectlistComponent } from '../__projectlist/projectlist.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() projectList:any;
  projects:Array<any> = [];
  constructor(projectlist: ProjectlistComponent) { 
    this.projects = projectlist.getList()
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
