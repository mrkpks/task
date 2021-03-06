import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { ambassadorActions } from '../../reducers/ambassador.reducer';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Ambassador } from '../../ambassador';

@Component({
  selector: 'app-ambassador-detail',
  templateUrl: 'ambassador-detail.component.html',
  styleUrls: ['ambassador-detail.component.scss']
})
export class AmbassadorDetailComponent implements OnDestroy {

  detailForm: FormGroup;
  genders: string[] = ['male', 'female'];
  ambassador: Ambassador;
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>, private fb: FormBuilder, private route: ActivatedRoute) {
    this.detailForm = this.fb.group({
      name: '',
      age: '',
      amount: '',
      gender: ''
    });

    Observable.combineLatest([this.route.params, this.store.select('ambassadors')]).takeUntil(this.unsubscribe$).subscribe(
      ([params, state]: [Params, Ambassador[]]) => {
        this.ambassador = state.find(amb => amb.id === Number(params.id));
        this.detailForm.setValue({
          name: this.ambassador.name,
          age: this.ambassador.age,
          amount: this.ambassador.amount,
          gender: this.ambassador.gender
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onSubmit(): void {
    this.store.dispatch({
      type: ambassadorActions.UPDATE,
      payload: {...this.detailForm.value, id: this.ambassador.id, amount: Number(this.detailForm.value.amount)}
    });
  }
}
