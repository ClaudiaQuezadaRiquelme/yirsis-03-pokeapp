import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  pokeList: Array<any> = [];
  page: number = 0;

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

  nextPage() {
    this.page += this.pokeService.getLimit;
    this.pokeService.getList(this.page).subscribe((resp: any)=> {
      console.log('pokeservice:',resp);
      this.pokeList = resp.results;
    });
  }

  prevPage() {
    this.page -= this.pokeService.getLimit;
    this.pokeService.getList(this.page).subscribe((resp: any)=> {
      console.log('pokeservice:',resp);
      this.pokeList = resp.results;
    });
  }

}
