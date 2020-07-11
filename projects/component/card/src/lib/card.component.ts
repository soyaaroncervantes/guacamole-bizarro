import { Component, Input, OnInit } from '@angular/core';
import { Album } from '@interfaces/album';

@Component({
  selector: 'component-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() album: Album;

  constructor() { }

  ngOnInit(): void { }

}
