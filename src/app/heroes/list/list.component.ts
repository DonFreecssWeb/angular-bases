import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  heroes:string[] = ["Hulk","Thor","Superman","Batman","Spiderman"]
  public heroeborrado?:string 


  borrarHeroe():void{
    this.heroeborrado =  this.heroes.pop()    
    console.log(this.heroeborrado)
  }
}
