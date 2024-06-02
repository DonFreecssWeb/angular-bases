import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  heroes: Heroe[] = [
    {name: "Krillin", power : 3000}
  ]

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter()

  // onDeleteHero(index:number):void{
  //   this.onDelete.emit(index)
  // }

  onDeleteHeroByuiid(uuid?:string):void{
   if(!uuid) return;
    this.onDelete.emit(uuid)
  }


  
}
