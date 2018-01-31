import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamTableComponent } from './components/team-table/teamtable.component';
import { HomeComponent } from './components/home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { MembersComponent } from './components/members/members.component';
import { MentorsComponent } from './components/mentors/mentors.component';


import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyA_CqfkMZ7K79xcTGxsoAPq91UUA7vqq-k",
  authDomain: "ideas-54a31.firebaseapp.com",
  databaseURL: "https://ideas-54a31.firebaseio.com",
  projectId: "ideas-54a31",
  storageBucket: "ideas-54a31.appspot.com",
  messagingSenderId: "449871727011"
};


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MembersComponent,
    MentorsComponent,
    TeamsComponent,
    TeamTableComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      {path: 'about', component: AboutComponent }
      // {path: 'about', component: AboutComponent },
      // {path: 'about', component: AboutComponent },
      // {path: 'about', component: AboutComponent },
      // {path: 'about', component: AboutComponent },
      // {path: 'about', component: AboutComponent },

    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
