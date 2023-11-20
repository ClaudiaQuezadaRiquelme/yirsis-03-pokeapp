import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private baseUrl: string = 'https://pokeapi.co/api/v2/';
  private limit: number = 8;

  constructor(
    private http: HttpClient
  ) { }

  getList(page: number = 0) {
    return this.http.get(
      `${this.baseUrl}pokemon?`,
      {
        params: {
          "offset": page,
          "limit": this.limit
        }
      });
  }

  get getLimit() {
    return this.limit;
  }

  getPokeData(name: string) {
    return this.http.get(`${this.baseUrl}pokemon/${name}`);
  }
}
