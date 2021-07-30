import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStepComponent } from './ngx-step.component';

describe('NgxStepComponent', () => {
  let component: NgxStepComponent;
  let fixture: ComponentFixture<NgxStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
