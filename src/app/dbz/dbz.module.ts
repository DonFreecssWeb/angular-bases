import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { HeroComponent } from './components/hero/hero.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    HeroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent 
  ]
})
export class DbzModule { }
