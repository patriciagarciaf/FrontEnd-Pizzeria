import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientItemComponent } from './ingredientItem/ingredientitem.component';

const routes: Routes = [{
  path: '',
  component: IngredientItemComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModuleChild { }