import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavWebsiteComponent } from './sidenav-website.component';

describe('SidenavWebsiteComponent', () => {
  let component: SidenavWebsiteComponent;
  let fixture: ComponentFixture<SidenavWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
