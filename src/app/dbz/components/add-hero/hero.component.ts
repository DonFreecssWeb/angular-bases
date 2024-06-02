import { Component, EventEmitter, Output } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'dbz-add-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Output()
  onNewHero : EventEmitter<Heroe> = new EventEmitter();

  heroes: Heroe = {
    name: '',
    power: 0
  }
  
  emitHeroe(){
    // debugger
    console.log(this.heroes)
    if(this.heroes.name.length === 0) return

    this.onNewHero.emit(this.heroes)

    // this.heroes.name = "" si se utiliza esto, al volver a escribir la lista cambia conforme uno escribe
    // this.heroes.power = 0
    this.heroes = { name: "" , power : 0}
  }

 
}
