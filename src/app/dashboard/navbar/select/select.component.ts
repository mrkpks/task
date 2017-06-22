import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Gender } from '../../../genders';

@Component({
  selector: 'app-select',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.scss']
})
export class SelectComponent {

  @Input() gender: Gender;
  @Input() genders: Gender[];
  @Output() genderChange: EventEmitter<Gender>;

  selectClicked = false;

  constructor() {
    this.genderChange = new EventEmitter<Gender>();
  }


  onSelectClicked(gender: Gender): void {
    if (this.selectClicked === true) {
      this.selectClicked = false;
    } else {
      this.selectClicked = true;
    }

    this.genderChange.emit(gender);
  }
}
