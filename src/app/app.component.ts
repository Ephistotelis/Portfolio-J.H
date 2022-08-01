import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Joshua-Herrmann';

  projects:Array<any> = [
    {'projectName' : 'Skarkie',
    'description' : 'Sharkie is a small object oriented Jump & Run game.',
    'image' : 'URL'},
    {'projectName' : 'CRM',
    'description' : 'Simple CRM to manage customers, user, and employees.',
    'image' : 'URL'
    },
    {'projectName' : 'Portfolio',
    'description' : 'My own portfolio is a huge project aswell. This site is created with Angular.',
    'image' : 'URL'}]
}
