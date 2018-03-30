import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListCoursService } from '../services/list-cours-services/list-cours.service';
import {Cour} from '../shared/cour-model'
@Component({
  moduleId: module.id,
  selector: 'app-details-cour',
  templateUrl: './details-cour.component.html',
  styleUrls: ['./details-cour.component.css']
})
export class DetailsCourComponent implements OnInit {
title : String;
detailOfCourchoisi : Cour;
  constructor(private activatedRouter : ActivatedRoute, 
    private listCoursService : ListCoursService,
    private router : Router
  ) { }

  ngOnInit() {

    let detail = this.activatedRouter.snapshot.params['detail'];
    this.detailOfCourchoisi = this.listCoursService.getCourByDetail(detail);
  
  }


  public back() {
    this.router.navigate(['cours']);
  }

  
}
