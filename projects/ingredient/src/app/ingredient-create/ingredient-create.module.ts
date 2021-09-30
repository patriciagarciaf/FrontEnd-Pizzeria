import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IngredientService } from '../service/ingredient.service';
import { IngredientCreateRoutingModule } from './ingredient-create-routing.module';
import { IngredientCreateComponent } from './ingredient-create.component';

@NgModule({
  declarations: [
    IngredientCreateComponent,
  ],
  imports: [
    CommonModule,
    IngredientCreateRoutingModule,
    FormsModule,
  ],
  providers: [
    IngredientService,
  ],
})
export class IngredientCreateModule { }