import { Component, OnInit } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
    public heroes:Heroe[] = [
        { name: "Goku", power : 8000 },
        { name: "Vegeta", power : 20000 },
        { name: "Napa", power : 5000 }
    ]
}