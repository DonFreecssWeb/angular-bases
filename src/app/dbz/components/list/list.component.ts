import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/heroe.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  characters: Character[] = [
    {name: "Krillin", power : 3000}
  ]

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter()

  // onDeleteHero(index:number):void{
  //   this.onDelete.emit(index)
  // }

  onDeleteCharacterByuiid(uuid?:string):void{
   if(!uuid) return;
   this.onDelete.emit(uuid)
  }


  
}
