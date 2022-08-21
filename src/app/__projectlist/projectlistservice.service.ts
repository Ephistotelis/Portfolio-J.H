import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectlistserviceService {
  projects:Array<any> = [{'projectName' : 'Skarkie',
  'description' : 'Sharkie is a small object oriented Jump & Run game based on Javescript and HTML Canvas.',
  'image' : 'assets/image/project_img/sharkie_mockup.png',
  'github_url' : 'https://github.com/JoshuaHerrmann/Sharkie',
'web_app_url' : 'http://sharkie.joshua-herrmann.de/'},
  {'projectName' : 'Pokédex',
  'description' : 'Pokédex based on the open Pokéapi v2. Build with REST API and Javascript. ',
  'image' : 'assets/image/project_img/pokemon_mockup.png',
    'github_url' : 'https://github.com/JoshuaHerrmann/Pokedex',
    'web_app_url' : 'http://pokedex.joshua-herrmann.de/'},
  {'projectName' : 'Portfolio',
  'description' : 'My Own Portfolio, completly build with Angular. I gained a lot experience by coding it and maintenance.',
  'image' : 'assets/image/project_img/portfolio_mockup.png',
  'github_url' : 'https://github.com/JoshuaHerrmann/Portfolio-J.H',
'web_app_url' : '#'},
{'projectName' : 'Slack Clone',
'description' : 'A group project where we worked with Angular and Firebase. Gained a lot experience coding in a team and debugging together.',
'image' : 'assets/image/project_img/slackclone_mockup.png',
'github_url' : 'https://github.com/AndreHehn/slackclone',
'web_app_url' : 'http://slackclone.joshua-herrmann.de/main'},
/* {'projectName' : 'Transport App',
  'description' : 'Transport app for hospital',
  'image' : 'assets/image/project_img/mockup_placeholder.png',
  'github_url' : 'https://github.com/Ephistotelis',
'web_app_url' : '#'} */]
  constructor() { }
}
