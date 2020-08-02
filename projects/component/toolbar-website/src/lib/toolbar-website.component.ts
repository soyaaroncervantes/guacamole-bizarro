import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { FacadeUserService } from '@services/facade-user';

import { UserInfo } from '@firebase/auth-types';

import { websiteRoutes } from '@const/website';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

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
  userInfo$: Observable<UserInfo>;

  constructor(
    private facadeUserService: FacadeUserService
  ) {
    this.matSidenavChange = new EventEmitter<MatSidenav>();
    this.isHandset$Change = new EventEmitter<Observable<boolean>>();
    this.userInfo$ = this.facadeUserService.user;
  }

  ngOnInit(): void {
    this.facadeUserService.get();
    this.userInfo$.subscribe( console.log );
  }

}
