import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NameService {

  private apiUrl = 'http://localhost:8080/api/names';

  constructor(private http: HttpClient) {}

  getNames(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
}
