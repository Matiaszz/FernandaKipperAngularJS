import { TestBed } from '@angular/core/testing';

import { SendForm } from './send-form';

describe('SendForm', () => {
  let service: SendForm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendForm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
