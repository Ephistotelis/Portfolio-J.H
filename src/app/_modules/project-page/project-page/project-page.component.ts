import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/__DataService/Data.service';


@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  projects:Array<any> = [];
  technologie:string = 'all'
  
  constructor(projectlist: DataService) {  
    this.projects = projectlist.projects;
  }
 
  

  ngOnInit(): void {
    
  }
  projectsToText(index:number){
    return JSON.stringify(this.projects[index])
   } 

   toggleByTech(technologie:string){
    if(this.technologie === technologie || this.technologie === 'all'){
      return true
    }else{
      return false
    }
   }

   filterAngular(){
    this.technologie = 'angular'
    document.getElementById('angular')?.classList.add('active')
    document.getElementById('all')?.classList.remove('active')
    document.getElementById('javascript')?.classList.remove('active')
   }

   filterJavascript(){
    this.technologie = 'javascript'
    document.getElementById('javascript')?.classList.add('active')
    document.getElementById('all')?.classList.remove('active')
    document.getElementById('angular')?.classList.remove('active')
   }

   filterAll(){
    this.technologie = 'all'
    document.getElementById('all')?.classList.add('active')
    document.getElementById('angular')?.classList.remove('active')
    document.getElementById('javascript')?.classList.remove('active')
   }
}
