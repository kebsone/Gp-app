import { Component, OnInit } from '@angular/core';
//import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {Cour} from '../shared/cour-model'

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  cours : Array<Cour>;
  coursesObservable: Observable<any[]>;

  constructor() { 
  }

  ngOnInit() {
    this.cours = [
       new Cour(1,"Cour  de mathématique niveau primaire et secondaire. Vous pouvez réserver vos horaires en suivant le lien","mathématique","50€","https://www.mathematiquesfaciles.com/index-2.php"),
       new Cour(2,"Cour anglais tous les niveaux. Suivez ce lien pour choisir votre formation","anglais","20€","https://www.britishcouncil.fr/anglais/en-ligne"),
       new Cour(3,"Cour de physique et chimie. Tous les niveaux. Suivez ce lien pour découvrir notre site", "Physique chimie","20€", "https://www.doc-etudiant.fr/Sciences/Physique/"),
       new Cour(4,"Cour informatique Tous les niveaux. Suivez ce lien pour découvrir notre site", "Informatique","20€","https://www.superprof.fr/blog/le-b-a-ba-du-cours-dinformatique/")

      ]
   // this.coursesObservable = this.getCourses('/courses');
  }

  /*getCourses(listPath): Observable<any[]> {
    //console.log(this.db);
    console.log(this.cours)
   // return this.db.list(listPath).valueChanges();
  }*/

}
