import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderFooterRoutingModule } from './header-footer-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutMePageModule } from '../about-me-page/about-me-page.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderFooterRoutingModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  
  ]
})
export class HeaderFooterModule { }
