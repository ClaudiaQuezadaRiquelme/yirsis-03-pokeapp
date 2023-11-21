import { TestBed } from '@angular/core/testing';

import { PokeService } from './poke.service';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { pokeListMock } from '../__mocks__/pokeList.mock';
import { HttpRequest } from '@angular/common/http';

describe('PokeService', () => {
  let service: PokeService;
  let httpClient: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ PokeService ]
    });
    httpClient = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PokeService);
  });

  afterEach(()=> {
    httpClient.verify(); // verifica que todo se haya simulado
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debería hacer una petición http de tipo GET', ( done:DoneFn )=> {
    const url: string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=8';
    service.getList().subscribe(()=>{
      done();
    });
    const request: TestRequest = httpClient.expectOne(url); // espero que se haga una petición
    console.log('request:',request);
    expect(request.request.url).toEqual(service.getUrl);
    expect(request.request.urlWithParams).toEqual(url);
    expect(request.request.method).toEqual('GET');
    request.flush({}); // permite simular una respuesta
  });
});
