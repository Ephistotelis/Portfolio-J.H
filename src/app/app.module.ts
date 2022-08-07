import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponent } from './_main-content/main-content.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { WorkXpComponent } from './work-xp/work-xp.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillTemplateComponent } from './skill-template/skill-template.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { LegalnoticeModule } from './_modules/legalnotice/legalnotice.module';
import { ImpressumModule } from './_modules/impressum/impressum.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppPageComponent } from './_app-page/app-page.component';
import { AboutMePageModule } from './_modules/about-me-page/about-me-page.module';
import { HeaderFooterModule } from './_modules/header-footer/header-footer.module';
import { ProjectPageModule } from './_modules/project-page/project-page.module';




@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    IntroductionComponent,
    WorkXpComponent,
    SkillsComponent,
    SkillTemplateComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ContactMeComponent,
    AppPageComponent,
    AboutMeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LegalnoticeModule,
    ImpressumModule,
    AboutMePageModule,
    HeaderFooterModule,
    ProjectPageModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
