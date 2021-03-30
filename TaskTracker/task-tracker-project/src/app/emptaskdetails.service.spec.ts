import { TestBed } from '@angular/core/testing';

import { EmptaskdetailsService } from './emptaskdetails.service';

describe('EmptaskdetailsService', () => {
  let service: EmptaskdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmptaskdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
