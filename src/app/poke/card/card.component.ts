import { Component, OnInit, Input } from '@angular/core';
import { PokeService } from '../../services/poke.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  data: any = {name:''};

  urlImg: string = '';

  constructor(
    private pokeService: PokeService
  ) { }

  ngOnInit(): void {
    this.pokeService.getPokeData(this.data.name).subscribe((resp:any) => {
      console.log('getPokeData:',resp);
      this.urlImg = resp.sprites.front_default;
    });
  }

}
