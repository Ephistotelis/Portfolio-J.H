import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMePageRoutingModule } from './about-me-page-routing.module';
import { HeaderFooterModule } from '../header-footer/header-footer.module';
import { HeaderComponent } from '../header-footer/header/header.component';
import { FooterComponent } from '../header-footer/footer/footer.component';
import { ImpressumModule } from '../impressum/impressum.module';
import { ImpressumComponent } from '../impressum/impressum/impressum.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';


@NgModule({
  declarations: [
    AboutMePageComponent
  ],
  imports: [
    CommonModule,
    AboutMePageRoutingModule,
    HeaderFooterModule,
  ],
  exports:[
    AboutMePageComponent
  ]
})
export class AboutMePageModule { }
