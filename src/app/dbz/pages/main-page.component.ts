import { Component, OnInit } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
      constructor(private dbzService: DbzService){}

      get heroes(): Heroe[]{
        //return this.dbzService.heroes para no modificar el original crearemos una copia
        return [... this.dbzService.heroes]
      }
      deleteHeroById(id:string):void{
        this.dbzService.deleteHeroById(id)
      }

      onNewHeroeOther( hero: Heroe){
        this.dbzService.addHeroOther(hero)
      }
}