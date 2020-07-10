import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

export class BaseHeader {

  matSidenav: MatSidenav;
  isHandset$: Observable<boolean>;

  constructor(
    protected breakpointObserver: BreakpointObserver
  ) {
    this.isHandset$ = this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

}
