import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:Array<any> = [{'projectName' : 'Skarkie',
  'description' : 'Sharkie is a small object oriented Jump & Run game.',
  'image' : 'URL',
  'github_url' : 'https://github.com/Ephistotelis',
'web_app_url' : '#'},
  {'projectName' : 'CRM',
  'description' : 'Simple CRM to manage customers, user, and employees.',
  'image' : 'URL',
    'github_url' : 'https://github.com/Ephistotelis',
    'web_app_url' : '#'
  },
  {'projectName' : 'Portfolio',
  'description' : 'My own portfolio is a huge project aswell. This site is created with Angular.',
  'image' : 'URL',
  'github_url' : 'https://github.com/Ephistotelis',
'web_app_url' : '#'},
{'projectName' : 'Transport App',
  'description' : 'Transport app for hospital',
  'image' : 'URL',
  'github_url' : 'https://github.com/Ephistotelis',
'web_app_url' : '#'}]
  constructor() { 
  }

  ngOnInit(): void {
  }

  projectsToText(index:number){
   return JSON.stringify(this.projects[index])
  }
}
