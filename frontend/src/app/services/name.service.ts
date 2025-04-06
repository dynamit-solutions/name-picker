import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  postNames(selectedName: string, names: string[]) {
    let orderedNames = [selectedName];

    for (let i=0; i < names.length; i++) {
        if (names[i] == selectedName) {
            continue;
        }
        orderedNames.push(names[i]);
    }

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.apiUrl, orderedNames, {
        headers,
        responseType: 'text'
    });
  }
}
