import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Ambassador } from "../ambassador";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  showDetail: boolean = false;
  ambassadors: Observable<Ambassador[]>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<AppState>) {
    this.route.params.subscribe(
      (params: Params) => {
        if (params['id']) {
          this.showDetail = true;
        }
      }
    );
    this.ambassadors = this.store.select('ambassadors');
  }

  onLoadAmbassador(id: number) {
    this.router.navigateByUrl(`/ambassadors/${id}/detail`);
  }
}
