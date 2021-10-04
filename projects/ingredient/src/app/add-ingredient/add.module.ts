import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreLibraryModule } from 'core-library';
import { IngredientModule } from '../ingredient.module';
// import { IngredientComponent } from '../ingredient/ingredient.component';
// import { IngredientItemComponent } from '../ingredientitem/ingredientitem.component';
import { IngredientService } from '../service/ingredient.service';
import { AddRoutingModule } from './add-routing.module';
import { AddIngredientComponent } from './add-ingredient.component'; 

@NgModule({
  declarations: [
    AddIngredientComponent,
  ],
  imports: [
    CommonModule,
    AddRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreLibraryModule,
    HttpClientModule,
    IngredientModule
  ],
  providers: [
    IngredientService,
  ]
})
export class AddModule { }