import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientGetallComponent } from './ingredient-getall.component';

const routes: Routes = [
  {
    path: '', component: IngredientGetallComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientGetallRoutingModule { }