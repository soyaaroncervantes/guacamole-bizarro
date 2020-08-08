import { Component, Input, OnInit } from '@angular/core';
import { UserInfo } from '@firebase/auth-types';
import { websiteRoutes } from '@const/website';
import { FacadeUserService } from '@services/facade-user';

@Component({
  selector: 'lib-button-access',
  templateUrl: './button-access.component.html',
  styleUrls: ['./button-access.component.scss']
})
export class ButtonAccessComponent implements OnInit {

  @Input() userInfo: UserInfo;

  routes = websiteRoutes;

  constructor(
    private facadeUserService: FacadeUserService
  ) { }

  ngOnInit(): void { }

  logout(): void {
    this.facadeUserService.dispatchLogout();
  }

}
