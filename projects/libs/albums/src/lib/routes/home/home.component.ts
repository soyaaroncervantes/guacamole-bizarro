import { Component, OnInit } from '@angular/core';
import { websiteRoutes } from '../../const/website-routes.const';
import { slideLeftTrigger } from './home.animation';

@Component({
  selector: 'lib-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ slideLeftTrigger ]
})
export class HomeComponent implements OnInit {

  routes = websiteRoutes;

  constructor() { }

  ngOnInit(): void {
  }

}
