import { Component, OnInit } from '@angular/core';
import { SHORTLIST } from '../ambassadors-data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  ambassadors = SHORTLIST;

  constructor() {}

  ngOnInit() {
  }

}
