import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarWebsiteComponent } from './toolbar-website.component';

describe('ToolbarWebsiteComponent', () => {
  let component: ToolbarWebsiteComponent;
  let fixture: ComponentFixture<ToolbarWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
