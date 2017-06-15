import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { Ambassador } from "../ambassador";
import { AmbassadorsService } from "../ambassadors.service";

@Component({
  selector: 'app-ambassador-detail',
  templateUrl: './ambassador-detail.component.html',
  styleUrls: ['./ambassador-detail.component.scss']
})
export class AmbassadorDetailComponent implements OnInit {

  ambassador: Ambassador;

  constructor(private ambassadorsService: AmbassadorsService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params: Params) => {
        this.ambassador = this.ambassadorsService.getAmbassador(+params['id']);
      }
    );
  }

  ngOnInit() {

  }

}
