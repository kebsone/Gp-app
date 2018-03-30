import {Routes} from '@angular/router';
import {DetailsCourComponent} from './details-cour/details-cour.component' ;
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CoursesListComponent} from './courses-list/courses-list.component';
import {AcceuilComponent } from './acceuil/acceuil.component';
export const appRoutes : Routes = [
    {
      path : 'acceuil',
      component : AcceuilComponent
    },
    {
      path :'cours', 
      component:CoursesListComponent, 
    },
    {
      path: 'cours/:detail', 
      component :DetailsCourComponent
    },
    { 
      path: '',
      redirectTo: '/acceuil',
      pathMatch:'full'
    },
    {
      path: '**',
      component: PageNotFoundComponent
     }
  ];