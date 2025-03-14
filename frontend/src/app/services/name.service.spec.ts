import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NameService } from './name.service';

describe('NameService', () => {
  let service: NameService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NameService]
    });

    service = TestBed.inject(NameService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch names from the API', () => {
    const mockNames = ['Alice', 'Bob', 'Charlie'];

    service.getNames().subscribe((names) => {
      expect(names).toEqual(mockNames);
    });

    const req = httpTestingController.expectOne('http://localhost:8080/api/names');
    expect(req.request.method).toBe('GET');

    req.flush(mockNames);
  });
});
