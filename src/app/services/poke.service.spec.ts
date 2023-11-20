import { TestBed } from '@angular/core/testing';

import { PokeService } from './poke.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('PokeService', () => {
  let service: PokeService;
  let httpClient: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ HttpClient ]
    });
    httpClient = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debería hacer una petición http', ( done:DoneFn )=> {
    service.getList().subscribe((resp)=>{
      console.log('test PokeService');
      expect(1).toBe(1);
      done();
    });
    const request = httpClient.expectOne('https://pokeapi.co/api/v2/pokemon?offset=0&limit=8');
    request.flush({});
    httpClient.verify(); // verifica que todo se haya simulado
  });
});
