import { TestBed } from '@angular/core/testing';

import { HeaderPictureHomeService } from './header-picture-home.service';

describe('HeaderPictureHomeService', () => {
  let service: HeaderPictureHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderPictureHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
