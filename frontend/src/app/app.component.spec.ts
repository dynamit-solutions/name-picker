import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {provideHttpClient} from "@angular/common/http";
import {HttpClientTestingModule, provideHttpClientTesting} from "@angular/common/http/testing";
import {NameService} from "./services/name.service";
import {NameComponent} from "./components/name/name.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        NameComponent
      ],
      providers: [
        provideHttpClient(), provideHttpClientTesting(), NameService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
