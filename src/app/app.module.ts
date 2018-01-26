import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AboutComponent } from './components/about/about.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamtableComponent } from './components/teamtable/teamtable.component';
import { HomeComponent } from '.components//home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { MembersComponent } from './components/members/members.component';
import { MentorsComponent } from './components/mentors/mentors.component';


import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  storageBucket: '',
  messagingSenderId: ''
};


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MembersComponent,
    MentorsComponent,
    TeamsComponent,
    TeamtableComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
