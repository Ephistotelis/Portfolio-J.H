import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectlistserviceService {
  projects:Array<any> = [{'projectName' : 'Skarkie',
  'description' : 'Sharkie is a small object oriented Jump & Run game.',
  'image' : 'assets/image/project_img/sharkie_mockup.png',
  'github_url' : 'https://github.com/JoshuaHerrmann/Sharkie',
'web_app_url' : 'https://joshua-herrmann.developerakademie.net/DevAc_Pjk_15_Sharkie/index.html'},
  {'projectName' : 'Pokedex',
  'description' : 'Pokedex based on the open Pokeapi v2. ',
  'image' : 'assets/image/project_img/pokemon_mockup.png',
    'github_url' : 'https://github.com/JoshuaHerrmann/Pokedex',
    'web_app_url' : 'https://joshua-herrmann.developerakademie.net/DevAc_Pjk_14_Pokedex/index.html'
  },
  {'projectName' : 'Portfolio',
  'description' : 'My own portfolio is a huge project aswell. This site is created with Angular.',
  'image' : 'assets/image/project_img/portfolio_mockup.png',
  'github_url' : 'https://github.com/JoshuaHerrmann/Portfolio-J.H',
'web_app_url' : '#'},
{'projectName' : 'Slack Clone',
'description' : 'A group project where we worked with Angular and Firebase.',
'image' : 'assets/image/project_img/mockup_placeholder.png',
'github_url' : 'https://github.com/JoshuaHerrmann',
'web_app_url' : '#'},
{'projectName' : 'Transport App',
  'description' : 'Transport app for hospital',
  'image' : 'assets/image/project_img/mockup_placeholder.png',
  'github_url' : 'https://github.com/Ephistotelis',
'web_app_url' : '#'}]
  constructor() { }
}
