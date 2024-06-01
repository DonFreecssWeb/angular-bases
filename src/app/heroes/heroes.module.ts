import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
//a-Modul y luego tab
@NgModule({
    //buena practica ordenarlo ascendentemente, selecccionamos todas la declaraciones y control + shift + p
    //buscamos sort lines ascending y lo ordena todo
    declarations:[
        HeroComponent, 
        ListComponent
    ],
    exports: [
        ListComponent,
        HeroComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule{

}