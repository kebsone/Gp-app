import { TestBed, inject } from '@angular/core/testing';

import { ListCoursChoisisService } from './list-cours-choisis.service';

describe('ListCoursChoisisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListCoursChoisisService]
    });
  });

  it('should be created', inject([ListCoursChoisisService], (service: ListCoursChoisisService) => {
    expect(service).toBeTruthy();
  }));
});
