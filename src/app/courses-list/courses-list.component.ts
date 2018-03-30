import { Component, OnInit } from '@angular/core';
//import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Cour} from '../shared/cour-model'
import {ListCoursService} from '../services/list-cours-services/list-cours.service';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  cours : Array<Cour>;
  coursPanier: Observable<Array<Cour>>;
  coursPanierTmp : Array<Cour>;
  coursesObservable: Observable<any[]>;

  constructor(private listCousService: ListCoursService) { 
  }

  ngOnInit() {
    this.listCousService.getListCours().subscribe((value:Array<Cour>)=>{this.cours=value});
   // this.coursesObservable = this.getCourses('/courses');
  }

  /*getCourses(listPath): Observable<any[]> {
    //console.log(this.db);
    console.log(this.cours)
   // return this.db.list(listPath).valueChanges();
  }*/

  public ajouterCour(course){
    console.log("fsfsfsfsfsffs", course);
    this.coursPanierTmp  =  Array<Cour>();
    this.coursPanierTmp.push(course);
;
    this.listCousService.setListCours(Observable.of(this.coursPanierTmp));

  }

}
