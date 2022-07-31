import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderFooterRoutingModule } from './header-footer-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutMePageModule } from '../about-me-page/about-me-page.module';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderFooterRoutingModule,
    
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  
  ]
})
export class HeaderFooterModule { }
