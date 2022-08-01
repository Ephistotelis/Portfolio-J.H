import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  projects:Array<any> = [
    {'projectName' : 'Skarkie',
    'description' : 'Sharkie is a small object oriented Jump & Run game.',
    'image' : 'URL'},
    {'projectName' : 'CRM',
    'description' : 'Simple CRM to manage customers, user, and employees.',
    'image' : 'URL'
    },
    {'projectName' : 'Portfolio',
    'description' : 'My own portfolio is a huge project aswell. This site is created with Angular.',
    'image' : 'URL'}]
  constructor() { }

  ngOnInit(): void {
  }

}
