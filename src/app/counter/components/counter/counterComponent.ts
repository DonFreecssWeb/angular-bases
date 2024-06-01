import { Component } from "@angular/core";

@Component({
    selector : "app-counter",
    template: `

<h3> {{counter}}</h3>

<button (click)="increaseBy(1)">+</button>
<button (click)="decreaseBy()">-</button>
<button (click)="reset()">Reset</button>
    `
})
export class CounterComponent {
    counter = 10
    //By default is public
    increaseBy(value:number):void{
      this.counter += 1
    }
    decreaseBy(){
      this.counter -= 1
    }
    reset() {
      this.counter = 10
      }
}