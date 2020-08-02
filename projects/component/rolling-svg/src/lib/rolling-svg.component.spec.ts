import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollingSvgComponent } from './rolling-svg.component';

describe('RollingSvgComponent', () => {
  let component: RollingSvgComponent;
  let fixture: ComponentFixture<RollingSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollingSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollingSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
