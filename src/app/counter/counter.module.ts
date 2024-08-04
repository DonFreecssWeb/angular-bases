import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counterComponent";

@NgModule({
    declarations: [
        CounterComponent
    ],
    exports: [
        CounterComponent
    ] //para que consuma el mundo externo de counter
})
export class CounterModule{

}