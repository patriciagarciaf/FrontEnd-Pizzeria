import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientItemComponent } from './ingredientItem/ingredientitem.component';

@NgModule({
  declarations: [
    IngredientItemComponent,
    
  ],
  exports: [
    IngredientItemComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class IngredientModule {}
