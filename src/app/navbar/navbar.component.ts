import { Component, OnInit } from '@angular/core';
import { SHORTLIST } from '../ambassadors-data';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  shList = SHORTLIST;

  shortlist = [...this.shList].sort(() => Math.random() - 0.5).slice(0, 5);
  total: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    for(let i of this.shortlist) {
      this.total += i.amount;
    }
  }

  onProceed() {
    this.router.navigate(['/payments']);
  }
}
