import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NameComponent } from './name.component';
import { NameService } from '../../services/name.service';
import { of } from 'rxjs';
describe('NameComponent', () => {
  let component: NameComponent;
  let fixture: ComponentFixture<NameComponent>;
  let nameService: jasmine.SpyObj<NameService>;

  beforeEach(() => {
    const nameServiceSpy = jasmine.createSpyObj('NameService', ['getNames']);

    TestBed.configureTestingModule({
      declarations: [NameComponent],
      providers: [
        { provide: NameService, useValue: nameServiceSpy }
      ]
    });

    fixture = TestBed.createComponent(NameComponent);
    component = fixture.componentInstance;
    nameService = TestBed.inject(NameService) as jasmine.SpyObj<NameService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and store names on initialization', () => {
    const mockNames = ['Alice', 'Bob', 'Charlie'];

    nameService.getNames.and.returnValue(of(mockNames));

    fixture.detectChanges();

    expect(component.names).toEqual(mockNames);
    expect(nameService.getNames).toHaveBeenCalled();
  });
});
