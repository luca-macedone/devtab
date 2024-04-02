import { TestBed } from '@angular/core/testing';

import { HackerNewsServiceService } from './hacker-news-service.service';

describe('HackerNewsServiceService', () => {
  let service: HackerNewsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HackerNewsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
