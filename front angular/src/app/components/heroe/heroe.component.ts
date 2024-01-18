import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {
  heroe:any={};

  constructor(private aRoute:ActivatedRoute,private hservice:HeroesService) { 
    this.aRoute.params.subscribe(params=>{
      this.heroe = this.hservice.getData2(params['id']);

    })
  }

  ngOnInit(): void {
  }

}
