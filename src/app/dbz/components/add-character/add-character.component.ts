import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/heroe.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  @Output()
  onNewCharacter : EventEmitter<Character> = new EventEmitter();

  character: Character = {
    name: '',
    power: 0
  }
  
  emitCharacter(){
    // debugger
    console.log(this.character)
    if(this.character.name.length === 0) return

    this.onNewCharacter.emit(this.character)

    // this.heroes.name = "" si se utiliza esto, al volver a escribir la lista cambia conforme uno escribe
    // this.heroes.power = 0
    this.character = { name: "" , power : 0}
  }

 
}
