import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { WorkXpComponent } from './work-xp/work-xp.component';
import { MidSection1Component } from './mid-section1/mid-section1.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillTemplateComponent } from './skill-template/skill-template.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainContentComponent,
    IntroductionComponent,
    WorkXpComponent,
    MidSection1Component,
    SkillsComponent,
    SkillTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
