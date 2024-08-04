import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = "Ironman"
  public age:number = 30  
  list = ["Hulk","Thor","Superman","Batman","Spiderman"]

  get capitalizedName():string{
    return this.name.toUpperCase()
  }

  getHeroDescription():string{
    return ` Heroe: ${this.name} - ${this.age}`
  }

  changeHero():void{
    const index = Math.floor(Math.random() * this.list.length)
    this.name = this.list[index]

  }
  changeAge():void{
    this.age = 30
  }
  resetForm():void{
    this.name = "Ironman"
    this.age = 50

    document.querySelectorAll("h1")!.forEach( element => {
      element.innerHTML = "<h1>Otro name</h1>"
    }) 

  }
}
