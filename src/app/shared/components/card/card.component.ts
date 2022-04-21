import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() title: string;
  @Input() hasHeader: boolean = false;
  @Input() shadowStrong: boolean = false;
  @Input() padding: string;

}
