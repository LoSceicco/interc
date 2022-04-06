import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient:HttpClient,
  ) { }

  getPeople() {
    return this.httpClient.get<any>('https://swapi.dev/api/people')
    .pipe(
      map((res:any) => res.results)
    );
  }

  getPlanets() {
    return this.httpClient.get<any>('https://swapi.dev/api/planets')
    .pipe(
      map((res:any) => res.results)
    );
  }
}
