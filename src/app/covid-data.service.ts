import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  private apiUrl = 'assets/data/';

  constructor(private http: HttpClient) { }

  getCovidUpdates(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'covid19-download.json').pipe(
      map(response => response.filter(item => item.prname === 'Canada'))
    );
  }

  getOntarioData(): Observable<any> {
    return this.http.get(this.apiUrl + '/ontarioData.json');
  }
}
