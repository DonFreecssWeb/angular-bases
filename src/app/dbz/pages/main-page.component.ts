import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/heroe.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
      constructor(private dbzService: DbzService){}

      get characters(): Character[]{
        //return this.dbzService.heroes para no modificar el original crearemos una copia
        return [... this.dbzService.characterList]
      }
      deleteHeroById(id:string):void{
        this.dbzService.deleteHeroById(id)
      }

      onNewCharacter( hero: Character){
        this.dbzService.addNewcharacter(hero)
      }
}