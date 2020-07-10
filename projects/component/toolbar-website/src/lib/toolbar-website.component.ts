import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
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

  constructor() {
    this.matSidenavChange = new EventEmitter<MatSidenav>();
    this.isHandset$Change = new EventEmitter<Observable<boolean>>();
  }

  ngOnInit(): void {}

  toggleButton(): void {
    console.log( 'Funciona' );
    console.log( this.matSidenav );
    // this.matSidenav.toggle();
  }

}
