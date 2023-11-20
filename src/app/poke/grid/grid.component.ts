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
    this.setData();
  }

  ngOnInit(): void {
  }

  setData(page?: number) {
    this.pokeService.getList(this.page).subscribe((resp: any)=> {
      console.log('pokeservice:',resp);
      this.pokeList = resp.results;
    });
  }

  nextPage() {
    this.page += this.pokeService.getLimit;
    this.setData(this.page);
  }

  prevPage() {
    this.page -= this.pokeService.getLimit;
    this.setData(this.page);
  }

}
