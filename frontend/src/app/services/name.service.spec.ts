import { TestBed } from '@angular/core/testing';

import { NameService } from './name.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('NameService', () => {
  let service: NameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
