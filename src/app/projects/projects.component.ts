import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:Array<any> = [{'projectName' : 'Skarkie',
  'description' : 'Sharkie is a small object oriented Jump & Run game.',
  'image' : 'URL'},
  {'projectName' : 'CRM',
  'description' : 'Simple CRM to manage customers, user, and employees.',
  'image' : 'URL'
  },
  {'projectName' : 'Portfolio',
  'description' : 'My own portfolio is a huge project aswell. This site is created with Angular.',
  'image' : 'URL'},
{'projectName' : 'Transport App',
  'description' : 'Transport app for hospital',
  'image' : 'URL'}]
  constructor() { }

  ngOnInit(): void {
  }

}
