import { TestBed } from '@angular/core/testing';

import { NgxStepService } from './ngx-step.service';

describe('NgxStepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxStepService = TestBed.get(NgxStepService);
    expect(service).toBeTruthy();
  });
});
