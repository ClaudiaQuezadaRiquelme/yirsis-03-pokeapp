import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent } from './grid.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokeService } from 'src/app/services/poke.service';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;
  let service: PokeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ PokeService ]
    })
    .compileComponents();
    service = TestBed.inject(PokeService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
