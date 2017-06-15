import { Component, OnInit } from '@angular/core';
import { SHORTLIST } from "../ambassadors-data";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ambassadors = SHORTLIST;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onLoadAmbassador(id: number) {
    this.router.navigateByUrl(`/ambassadors/${id}/detail`);
  }

}
