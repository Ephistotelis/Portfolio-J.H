import { Component, OnInit } from '@angular/core';
import { DataService } from '../__DataService/Data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills:Array<object> = []
  constructor(public data : DataService) { }

  ngOnInit(): void {
    this.skills = this.data.skills
  }
  skillsToText(index:number){
    return JSON.stringify(this.data.skills[index])
   }
}
