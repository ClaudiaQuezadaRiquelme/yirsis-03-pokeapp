import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  pokeList: Array<any> = [];

  constructor(
    private pokeService: PokeService,
  ) {
    pokeService.getList().subscribe((resp: any)=> {
      console.log('pokeservice:',resp);
      this.pokeList = resp.results;
    });
  }

  ngOnInit(): void {
  }

}
