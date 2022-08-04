import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:Array<any> = [{'projectName' : 'Skarkie',
  'description' : 'Sharkie is a small object oriented Jump & Run game.',
  'image' : 'assets/image/project_img/sharkie_placeholder_MU.png',
  'github_url' : 'https://github.com/Ephistotelis/Sharkie',
'web_app_url' : '#'},
  {'projectName' : 'Pokedex',
  'description' : 'Pokedex based on the open Pokeapi v2. ',
  'image' : 'assets/image/project_img/pokedex_placeholder_MU.png',
    'github_url' : 'https://github.com/Ephistotelis/Pokedex',
    'web_app_url' : '#'
  },
  {'projectName' : 'Portfolio',
  'description' : 'My own portfolio is a huge project aswell. This site is created with Angular.',
  'image' : 'assets/image/project_img/portfolio_placeholder_MU.png',
  'github_url' : 'https://github.com/Ephistotelis/Portfolio-J.H',
'web_app_url' : '#'},
{'projectName' : 'Transport App',
  'description' : 'Transport app for hospital',
  'image' : 'assets/image/project_img/mockup_placeholder.png',
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
