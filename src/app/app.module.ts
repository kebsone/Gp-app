import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {appRoutes} from './app.route';


//import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireAuthModule } from 'angularfire2/auth';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { environment } from './../environments/environment';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
 import { DetailsCourComponent } from './details-cour/details-cour.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AcceuilComponent } from './acceuil/acceuil.component'; 
import { ListCoursService } from './services/list-cours-services/list-cours.service';
import {ListCoursChoisisService} from './services/list-cours-choisis-services/list-cours-choisis.service';
@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CoursesListComponent,
    PageNotFoundComponent,
    DetailsCourComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
   // AngularFireModule.initializeApp(environment.firebase),
   // AngularFireDatabaseModule,
  //  AngularFireAuthModule,
  RouterModule.forRoot(
    appRoutes)
  ],
  providers: [ListCoursService, ListCoursChoisisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
