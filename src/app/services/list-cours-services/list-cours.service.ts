import { Injectable } from '@angular/core';
import {Cour} from '../../../app/shared/cour-model';
import {Observable} from 'rxjs';

@Injectable()
export class ListCoursService {
  cours : Observable<Array<Cour>>
   constructor() {
    this.cours = Observable.of([
      new Cour(1,"Cour  de mathématique niveau primaire et secondaire. Vous pouvez réserver vos horaires en suivant le lien","mathématique","50€","https://www.mathematiquesfaciles.com/index-2.php"),
      new Cour(2,"Cour anglais tous les niveaux. Suivez ce lien pour choisir votre formation","anglais","20€","https://www.britishcouncil.fr/anglais/en-ligne"),
      new Cour(3,"Cour de physique et chimie. Tous les niveaux. Suivez ce lien pour découvrir notre site", "Physique chimie","20€", "https://www.doc-etudiant.fr/Sciences/Physique/"),
      new Cour(4,"Cour informatique Tous les niveaux. Suivez ce lien pour découvrir notre site", "Informatique","20€","https://www.superprof.fr/blog/le-b-a-ba-du-cours-dinformatique/")
  
     ])

   }
  public  getListCours() : Observable<Array<Cour>>{
    return this.cours;
  }

  public setListCours(cours){
    console.log("ser",cours);
    this.cours = cours
  }

  public getListCoursChoisis() : Observable<Array<Cour>>{
    
  }

}
