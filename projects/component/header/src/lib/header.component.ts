import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemePalette } from '@angular/material/core/common-behaviors/color';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'component-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() themePalette: ThemePalette;

  @Input() isHandset$: Observable<boolean>;
  @Output() isHandset$Change: EventEmitter<Observable<boolean>>;

  @ViewChild( 'drawer', { static: false } ) matSidenav: MatSidenav;

  constructor() {
    this.isHandset$Change = new EventEmitter<Observable<boolean>>();
  }

}
