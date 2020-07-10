import { Component, OnInit } from '@angular/core';
import { websiteRoutes } from '@const/website';

@Component({
  selector: 'lib-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  routes = websiteRoutes;

  constructor() { }

  ngOnInit(): void {
  }

}
