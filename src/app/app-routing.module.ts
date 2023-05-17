import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './nav-bar/home/home.component';
import { AboutComponent } from './nav-bar/about/about.component';
import { ContactComponent } from './nav-bar/contact/contact.component';
import { TournamentComponent } from './nav-bar/tournament/tournament.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tournament', component: TournamentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }