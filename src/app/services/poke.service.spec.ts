import { TestBed } from '@angular/core/testing';

import { PokeService } from './poke.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PokeService', () => {
  let service: PokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(PokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
