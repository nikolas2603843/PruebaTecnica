import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {
  data:any[]=[];
  termino:string;
  constructor(private Aroute:ActivatedRoute, private hs:HeroesService) { }

  ngOnInit(): void {
    this.Aroute.params.subscribe(params=>{
      this.termino=params['termino'];
       this.data = this.hs.buscar(params['termino']);

    })
  }
}
