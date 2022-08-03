import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Array<object> =[
    {'skill' : 'HTML',
    'image' : 'assets/image/java script.png'},
    {'skill' : 'CSS/SCSS',
    'image' : 'assets/image/Group 205.png'},
    {'skill' : 'Javascript',
    'image' : 'assets/image/javascript_logo.png'},
    {'skill' : 'Typescript',
    'image' : 'assets/image/Typescript_logo_2020.svg.png'},
    {'skill' : 'Angular',
    'image' : 'assets/image/angular.png'},
    {'skill' : 'Google Firebase',
    'image' : 'assets/image/google_firebase.png'},
    {'skill' : 'Git/Github',
    'image' : 'assets/image/Git-Icon-1788C 2.png'},
    {'skill' : 'Rest API',
    'image' : 'assets/image/icons8-rest-api-80 2.png'},
    {'skill' : 'Databases',
    'image' : 'assets/image/icons8-database-52 2.png'},
    {'skill' : 'SCRUM',
    'image' : 'assets/image/Group 226.png'},

  ]
  constructor() { }

  ngOnInit(): void {
  }
  skillsToText(index:number){
    return JSON.stringify(this.skills[index])
   }
}
