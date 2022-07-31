import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalnoticeComponent } from './legalnotice/legalnotice.component';
import { FooterComponent } from 'src/app/_modules/header-footer/footer/footer.component';
import { HeaderComponent } from 'src/app/_modules/header-footer/header/header.component';
import { AppModule } from 'src/app/app.module';
import { HeaderFooterModule } from '../header-footer/header-footer.module';



@NgModule({
  declarations: [
    LegalnoticeComponent
  ],
  imports: [
    CommonModule,
    HeaderFooterModule

  ]
})
export class LegalnoticeModule { }
