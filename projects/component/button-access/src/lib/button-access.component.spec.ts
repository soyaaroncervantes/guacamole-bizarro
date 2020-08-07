import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAccessComponent } from './button-access.component';

describe('ButtonAccessComponent', () => {
  let component: ButtonAccessComponent;
  let fixture: ComponentFixture<ButtonAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
