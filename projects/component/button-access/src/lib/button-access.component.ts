import { Component, Input, OnInit } from '@angular/core';
import { UserInfo } from '@firebase/auth-types';
import { websiteRoutes } from '@const/website';

@Component({
  selector: 'lib-button-access',
  templateUrl: './button-access.component.html',
  styleUrls: ['./button-access.component.scss']
})
export class ButtonAccessComponent implements OnInit {

  @Input() userInfo: UserInfo;

  routes = websiteRoutes;

  constructor() { }

  ngOnInit(): void {
  }

}
