import { TestBed, inject } from '@angular/core/testing';

import { ListCoursService } from './list-cours.service';

describe('ListCoursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListCoursService]
    });
  });

  it('should be created', inject([ListCoursService], (service: ListCoursService) => {
    expect(service).toBeTruthy();
  }));
});
