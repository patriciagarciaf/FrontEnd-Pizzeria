import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientCreateComponent } from './ingredient-create.component';

const routes: Routes = [
  {
    path: '', component:IngredientCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientCreateRoutingModule { }