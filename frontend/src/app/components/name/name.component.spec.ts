import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameComponent } from './name.component';

describe('AppComponent', () => {
  let component: NameComponent;
  let fixture: ComponentFixture<NameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
