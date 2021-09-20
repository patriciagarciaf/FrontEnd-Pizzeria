import { TestBed } from '@angular/core/testing';

import { LibrarySpinnerService } from './library-spinner.service';

describe('LibrarySpinnerService', () => {
  let service: LibrarySpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrarySpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
