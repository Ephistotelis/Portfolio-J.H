import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() projecttext : any;
  project : any;
  constructor() {
   
   }

  ngOnInit(): void {
    this.projectsToJson()
  }
  projectsToJson(){
    let text = JSON.parse(this.projecttext)
    this.project = text
  }
} 
