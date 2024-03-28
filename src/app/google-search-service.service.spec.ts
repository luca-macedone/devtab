import { TestBed } from '@angular/core/testing';

import { GoogleSearchServiceService } from './google-search-service.service';

describe('GoogleSearchServiceService', () => {
  let service: GoogleSearchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleSearchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
