import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {City, SportType} from '../../interfaces/sport-types';
import {Observable, of} from 'rxjs';
import {summerSports} from './summer-sports';
import {winterSports} from './winter-sports';

@Injectable({
  providedIn: 'root'
})
export class SportTypesService {
  private readonly baseUrl: string;

  constructor(private httpClient: HttpClient) {}

  getCities(): Observable<City[]> {
    return of([
      { name: 'Харків' },
      { name: 'Київ' },
      { name: 'Львів' },
      { name: 'Одесса' },
      { name: 'Дніпро' }
    ]);
    // return this.httpClient.get<City[]>(`${this.baseUrl}/cities`);
  }

  getSportTypes(type: string): Observable<SportType[]> {
    if (type === 'summer') {
      return of(summerSports);
    } else {
      return of(winterSports);
    }
    // return this.httpClient.get<SportType[]>(`${this.baseUrl}/sport-types`, { params: { type } });
  }
}
