import { Component, OnInit } from '@angular/core';
import{ Observable} from 'rxjs/Observable';
import { ListCoursChoisisService } from '../services/list-cours-choisis-services/list-cours-choisis.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
nbCoursAjoutes: number;
navBarCollapse = true;
  constructor(private listCoursChoisisService : ListCoursChoisisService) { }

  ngOnInit() {
  this.listCoursChoisisService.getNombreDeCoursChoisis().subscribe((value)=>{console.log(value)});
  }

public afficherMenu(){
  this.navBarCollapse = !this.navBarCollapse;
}

}
