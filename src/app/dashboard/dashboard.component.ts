import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AmbassadorsService } from "../ambassadors.service";
import { Ambassador } from "../ambassador";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ambassadors: Ambassador[] = this.ambassadorsService.getShortlist();
  showDetail: boolean = false;

  constructor(private router: Router,
              private ambassadorsService: AmbassadorsService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params: Params) => {
        if (params['id']) {
          this.showDetail = true;
        }
      }
    );
  }

  ngOnInit() {

  }

  onLoadAmbassador(id: number) {
    this.router.navigateByUrl(`/ambassadors/${id}/detail`);
  }

}
