import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';
import {v4 as uuid} from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor() { }
    
    public heroes:Heroe[] = [
        {id:uuid(), name: "Goku", power : 8000 },
        {id:uuid(), name: "Vegeta", power : 20000 },
        {id:uuid(), name: "Napa", power : 5000 }
    ]

    addHeroOther( hero: Heroe ) :void{
        const newHero:Heroe = {  id: uuid() , ... hero,}
        this.heroes.push(newHero)
        console.log(this.heroes)
    }

    // onDeleteHero(index:number){
    //     this.heroes.splice(index,1)        
    // }
    deleteHeroById(id:string){
         
       this.heroes = this.heroes.filter(temp => temp.id !== id)
    }
}