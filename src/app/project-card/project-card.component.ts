import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input('projectName') name : string = '';
  @Input('projectDescription') description: string = '';
  @Input('projectImage') url : string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
