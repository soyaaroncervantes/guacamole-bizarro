import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { websiteRoutes } from '@const/website';

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

  constructor() {
    this.matSidenavChange = new EventEmitter<MatSidenav>();
    this.isHandset$Change = new EventEmitter<Observable<boolean>>();
  }

  ngOnInit(): void {}

}
