import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TwitterButtonComponent } from './twitter-button.component';

describe('TwitterButtonComponent', () => {
  let component: TwitterButtonComponent;
  let fixture: ComponentFixture<TwitterButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
