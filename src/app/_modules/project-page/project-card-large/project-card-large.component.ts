import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card-large',
  templateUrl: './project-card-large.component.html',
  styleUrls: ['./project-card-large.component.scss']
})
export class ProjectCardLargeComponent implements OnInit {
  @Input() projecttext : any;
  project : any;
  constructor() { }

  ngOnInit(): void {
    this.projectsToJson()
  }
  projectsToJson(){
    let text = JSON.parse(this.projecttext)
    this.project = text
  }
}
