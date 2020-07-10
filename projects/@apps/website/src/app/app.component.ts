import { AfterViewChecked, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BaseHeader } from '@shared/header';
import { HeaderComponent } from '@component/header';

@Component({
  selector: 'website-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseHeader implements AfterViewChecked {

  title = '@apps/website';
  @ViewChild( 'headerComponent', { static: false }) headerComponent: HeaderComponent;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    protected breakpointObserver: BreakpointObserver
  ) {
    super( breakpointObserver);
  }

  ngAfterViewChecked(): void {
    this.matSidenav = this.headerComponent.matSidenav;
    this.changeDetectorRef.detectChanges();
  }

}
