import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacadeUserComponent } from './facade-user.component';

describe('FacadeUserComponent', () => {
  let component: FacadeUserComponent;
  let fixture: ComponentFixture<FacadeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacadeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacadeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
