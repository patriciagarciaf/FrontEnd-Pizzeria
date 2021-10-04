import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaComponent } from './add/pizza.component';

const routes: Routes = [
  { path:'pizza/add', component: PizzaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
