import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Gender } from "../../../genders";

@Component({
  selector: 'app-select',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() gender: Gender;
  @Input() genders: Gender[];
  @Output() genderChange: EventEmitter<Gender>;

  selectClicked: boolean = false;

  constructor() {
    this.genderChange = new EventEmitter<Gender>();
  }

  ngOnInit() {

  }

  onSelectClicked(gender: Gender) {
    if (this.selectClicked === true) {
      this.selectClicked = false;
    }
    else {
      this.selectClicked = true;
    }

    this.genderChange.emit(gender);
  }
}
