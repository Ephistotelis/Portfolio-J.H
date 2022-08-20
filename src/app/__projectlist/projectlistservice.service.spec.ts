import { TestBed } from '@angular/core/testing';

import { ProjectlistserviceService } from './projectlistservice.service';

describe('ProjectlistserviceService', () => {
  let service: ProjectlistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectlistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
