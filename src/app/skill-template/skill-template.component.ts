import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-template',
  templateUrl: './skill-template.component.html',
  styleUrls: ['./skill-template.component.scss']
})
export class SkillTemplateComponent implements OnInit {
  @Input() skilljson : any;
  skill: any ;
  constructor() { }

  ngOnInit(): void {
    this.skillToJson();
  }
  skillToJson(){
    let text = JSON.parse(this.skilljson)
    this.skill = text
  }
}
