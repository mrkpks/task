import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-shortlist-item',
  templateUrl: 'shortlist-item.component.html',
  styleUrls: ['shortlist-item.component.scss']
})
export class ShortlistItemComponent {
  @Input() shortlistItem;
}
