import { Injectable } from '@angular/core';
import {Cour} from '../../../app/shared/cour-model';
import {Observable} from 'rxjs';

@Injectable()
export class ListCoursService {
  cours : Observable<Array<Cour>>
  listCOurs : Array<Cour>
   constructor() {
     this.listCOurs = [
      new Cour(1,"Cour  de mathématique niveau primaire et secondaire. Vous pouvez réserver vos horaires en suivant le lien","mathématique","50€","https://www.mathematiquesfaciles.com/index-2.php", "cour-mathématique"),
      new Cour(2,"Cour anglais tous les niveaux. Suivez ce lien pour choisir votre formation","anglais","20€","https://www.britishcouncil.fr/anglais/en-ligne", "cour-anglais"),
      new Cour(3,"Cour de physique et chimie. Tous les niveaux. Suivez ce lien pour découvrir notre site", "Physique chimie","20€", "https://www.doc-etudiant.fr/Sciences/Physique/", "cour-PC"),
      new Cour(4,"Cour informatique Tous les niveaux. Suivez ce lien pour découvrir notre site", "Informatique","20€","https://www.superprof.fr/blog/le-b-a-ba-du-cours-dinformatique/", "cour-informatique")
  
     ]
    this.cours = Observable.of(this.listCOurs);

   }
  public  getListCours() : Observable<Array<Cour>>{
    return this.cours;
  }
  public getCourByDetail(detail) : Cour{
    let retour : Cour
    this.listCOurs.forEach(cour =>{
      console.log(cour.getDetail());
     if(cour.getDetail() === detail){
      retour = cour;
     }
    })
    return retour;
  }

  public setListCours(cours){
    this.cours = cours
  }

  /*public getListCoursChoisis() : Observable<Array<Cour>>{
    return 
  }*/

}
