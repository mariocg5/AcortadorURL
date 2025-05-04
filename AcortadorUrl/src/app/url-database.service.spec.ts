import { TestBed } from '@angular/core/testing';

import { UrlDatabaseService } from './url-database.service';

describe('UrlDatabaseService', () => {
  let service: UrlDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
