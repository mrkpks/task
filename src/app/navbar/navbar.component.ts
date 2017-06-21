import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Ambassador } from "../ambassador";
import { AppState } from "../app.state";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  ambassadors: Ambassador[];

  genderOptions = [
    {key: 'both', value: 'Male & Female'},
    {key: 'male', value: 'Male'},
    {key: 'female', value: 'Female'}
  ];

  selectedGender = 'both';

  private refresh$ = new BehaviorSubject<null>(null);

  constructor(private router: Router,
              private store: Store<AppState>) {
    this.store.select('ambassadors').subscribe(
      (amb: Ambassador[]) => {
        this.ambassadors = amb;
      }
    );
  }

  get shortList(): Ambassador[] {
    return this.ambassadors
      .filter((x) => x.gender === this.selectedGender || this.selectedGender === 'both')
      .slice(0, 3);
  }

  get total(): number {
    return this.shortList.reduce((acc, val) => acc + val.amount, 0);
  }

  onProceed() {
    this.router.navigate(['/payments']);
  }

  get gender(): string {
    return this.selectedGender;
  }

  set gender(gender: string) {
    this.selectedGender = gender;
    this.refresh$.next(null);
  }
}
