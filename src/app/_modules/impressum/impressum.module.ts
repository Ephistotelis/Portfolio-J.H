import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImpressumRoutingModule } from './impressum-routing.module';
import { ImpressumComponent } from './impressum/impressum.component';
import { FooterComponent } from 'src/app/_modules/header-footer/footer/footer.component';
import { HeaderComponent } from 'src/app/_modules/header-footer/header/header.component';
import { AppModule } from 'src/app/app.module';
import { HeaderFooterModule } from '../header-footer/header-footer.module';


@NgModule({
  declarations: [
    ImpressumComponent
  ],
  imports: [
    CommonModule,
    ImpressumRoutingModule,
    HeaderFooterModule,
  ],
  exports:[
  ImpressumComponent
  ]
})
export class ImpressumModule { }
