import { Component, OnInit } from '@angular/core';
import { HeroesService, heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  data:heroe[]=[];
  constructor(private servicio:HeroesService) { }

  ngOnInit(): void {
    this.data = this.servicio.getData();
    console.log(this.data)

  }

}
