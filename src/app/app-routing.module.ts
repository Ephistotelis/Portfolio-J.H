import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppPageComponent } from './_app-page/app-page.component';
import { AboutMeComponent } from './_modules/about-me/about-me/about-me.component';
import { ImpressumComponent } from './_modules/impressum/impressum/impressum.component';
import { LegalnoticeComponent } from './_modules/legalnotice/legalnotice/legalnotice.component';

const routes: Routes = [
{path: '', component: AppPageComponent},
{path: 'impressum', component: ImpressumComponent},
{path: 'legalnotice', component: LegalnoticeComponent},
{path: 'about-me', component: AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
