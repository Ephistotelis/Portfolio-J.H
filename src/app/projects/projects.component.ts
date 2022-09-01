import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../__DataService/Data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() projectList:any;
  projects:Array<any> = [];
  constructor(projectlist: DataService) { 
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
