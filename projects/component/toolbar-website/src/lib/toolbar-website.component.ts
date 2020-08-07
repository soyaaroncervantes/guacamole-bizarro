import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { UserInfo } from '@firebase/auth-types';

import { websiteRoutes } from '@const/website';

import { FacadeUserService } from '@services/facade-user';

import { Observable } from 'rxjs';

@Component({
  selector: 'toolbar-website',
  templateUrl: './toolbar-website.component.html',
  styleUrls: ['./toolbar-website.component.scss']
})
export class ToolbarWebsiteComponent implements OnInit {

  @Input() matSidenav: MatSidenav;
  @Output() matSidenavChange: EventEmitter<MatSidenav>;

  @Input() isHandset$: Observable<boolean>;
  @Output() isHandset$Change: EventEmitter<Observable<boolean>>;

  routes = websiteRoutes;
  userInfo$: Observable<UserInfo> = this.facadeUserService.info;

  constructor(
    private facadeUserService: FacadeUserService,
  ) {
    this.matSidenavChange = new EventEmitter<MatSidenav>();
    this.isHandset$Change = new EventEmitter<Observable<boolean>>();
    facadeUserService.dispatchUser();
  }

  ngOnInit(): void { }

}
