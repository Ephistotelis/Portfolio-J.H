import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppPageComponent } from './_app-page/app-page.component';
import { AboutMePageComponent } from './_modules/about-me-page/about-me-page/about-me-page.component';
import { ImpressumComponent } from './_modules/impressum/impressum/impressum.component';
import { LegalnoticeComponent } from './_modules/legalnotice/legalnotice/legalnotice.component';
import { ProjectPageComponent } from './_modules/project-page/project-page/project-page.component';


const routes: Routes = [
{path: '', component: AppPageComponent},
{path: 'impressum', component: ImpressumComponent},
{path: 'legalnotice', component: LegalnoticeComponent},
{path: 'about-me', component: AboutMePageComponent},
{path: 'projects', component: ProjectPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
