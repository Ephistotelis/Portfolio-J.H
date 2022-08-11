import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dropdown: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleDropDown(){
    if(this.dropdown === false){
      this.dropdown = true;
    }else{
      this.dropdown = false;
    }
    
  }
}
