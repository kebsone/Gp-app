import { Component, OnInit } from '@angular/core';
import {ListCoursService} from '../services/list-cours-services/list-cours.service';
import{ Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
nbCoursAjoutes: number;
  constructor(private listCoursServiece : ListCoursService) { }

  ngOnInit() {
this.listCoursServiece.getListCours().subscribe((value)=>{ console.log(value);this.nbCoursAjoutes = value.length});
  }

}
