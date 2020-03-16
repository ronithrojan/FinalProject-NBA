import { TestBed } from '@angular/core/testing';

import { TriviaquizService } from './triviaquiz.service';

describe('TriviaquizService', () => {
  let service: TriviaquizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriviaquizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
