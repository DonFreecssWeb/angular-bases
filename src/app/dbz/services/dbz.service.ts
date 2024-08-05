import { Injectable } from '@angular/core';
import { Character } from '../interfaces/heroe.interface';
import {v4 as uuid} from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor() { }
    
    public characterList:Character[] = [
        {id:uuid(), name: "Goku", power : 8000 },
        {id:uuid(), name: "Vegeta", power : 2000 },
        {id:uuid(), name: "Krilin", power : 1000 },
        {id:uuid(), name: "Yamcha", power : 9000 },
        {id:uuid(), name: "Napa", power : 5000 }
    ]

    addNewcharacter( character: Character ) :void{
        //traeme todos los heroes y le agrego el id
        const newHero:Character = {  id: uuid() , ... character,}
        this.characterList.push(newHero)
        console.log(this.characterList)
    }

    // onDeleteHero(index:number){
    //     this.heroes.splice(index,1)        
    // }
    deleteHeroById(id:string){
       //retorna todos los heroes menos el que se quiera borrar  
       this.characterList = this.characterList.filter(temp => temp.id !== id)
    }
}