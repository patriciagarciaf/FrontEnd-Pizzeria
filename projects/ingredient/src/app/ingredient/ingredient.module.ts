import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecoratorService } from 'projects/core-library/src/lib/interceptor/decoratorservice';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class IngredientModule { 
  constructor(decoratorService: DecoratorService) {
    
  }
}
