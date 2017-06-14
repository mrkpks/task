import { Component } from '@angular/core';
import { SHORTLIST } from '../ambassadors-data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  shList = SHORTLIST;

  shortlist = [...this.shList].sort(() => Math.random() - 0.5).slice(0, 5);

}
