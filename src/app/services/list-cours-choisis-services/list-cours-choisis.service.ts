import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class ListCoursChoisisService {
  nombreDeCoursChoisis : Number;

  constructor() { }

public getNombreDeCoursChoisis() : Observable<Number> {
  return Observable.of(this.nombreDeCoursChoisis);
}
  public setNombreDeCoursChoisis(nbCoursChoisis: Number){
    console.log(`dans le service chosis ${nbCoursChoisis}`);
    this.nombreDeCoursChoisis = nbCoursChoisis;
  }

}
