import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientGetallRoutingModule } from './ingredient-getall-routing.module';
import { IngredientGetallComponent } from './ingredient-getall.component';


@NgModule({
  declarations: [
    IngredientGetallComponent
  ],
  imports: [
    CommonModule,
    IngredientGetallRoutingModule
  ]
})
export class IngredientGetallModule { }