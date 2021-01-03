import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RollingSvgComponentComponent } from './rolling-svg-component.component';

describe('RollingSvgComponentComponent', () => {
  let component: RollingSvgComponentComponent;
  let fixture: ComponentFixture<RollingSvgComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RollingSvgComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollingSvgComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
