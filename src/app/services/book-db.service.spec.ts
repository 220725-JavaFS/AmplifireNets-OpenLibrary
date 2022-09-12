import { TestBed } from '@angular/core/testing';

import { BookDBService } from './book-db.service';

describe('BookDBService', () => {
  let service: BookDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
