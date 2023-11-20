import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private baseUrl: string = 'https://pokeapi.co/api/v2/';
  private offset: number = 0;
  private limit: number = 20;

  constructor(
    private http: HttpClient
  ) { }

  getList(page?: number) {
    if (page) this.offset = page;
    return this.http.get(
      `${this.baseUrl}pokemon?`,
      {
        params: {
          "offset": this.offset,
          "limit": this.limit
        }
      });
  }

  getPokeData(name: string) {
    return this.http.get(`${this.baseUrl}pokemon/${name}`);
  }
}
