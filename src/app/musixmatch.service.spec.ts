import { TestBed } from '@angular/core/testing';

import { MusixmatchService } from './musixmatch.service';

describe('MusixmatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusixmatchService = TestBed.get(MusixmatchService);
    expect(service).toBeTruthy();
  });
});
