import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/__DataService/Data.service';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.scss']
})
export class AboutMePageComponent implements OnInit {
  language:string = 'eng'
  constructor(public data: DataService) { }

  ngOnInit(): void {
  }
  toggleLan(){
    this.language=='eng'? this.language='de' : this.language='eng'
  }
}
