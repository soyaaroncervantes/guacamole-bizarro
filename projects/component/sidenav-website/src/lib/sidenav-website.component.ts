import { Component, OnInit } from '@angular/core';
import { websiteRoutes } from '@const/website';

@Component({
  selector: 'sidenav-website',
  templateUrl: './sidenav-website.component.html',
  styleUrls: ['./sidenav-website.component.scss']
})
export class SidenavWebsiteComponent implements OnInit {

  websiteRoutes = websiteRoutes;

  constructor() { }

  ngOnInit(): void {}

}
