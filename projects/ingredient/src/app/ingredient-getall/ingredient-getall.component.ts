import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient';
import { IngredientService } from '../service/ingredient.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient-getall.component.html',
  styleUrls: ['./ingredient-getall.component.css']
})
export class IngredientGetallComponent implements OnInit {

  ingredients?: Ingredient[]

  constructor(private http2Server: IngredientService) { }

  ngOnInit(): void {
    this.getIngredients();
  }

  private getIngredients() {
    this.http2Server.getAll().subscribe(
      ingredientData => { this.ingredients = ingredientData }
    )
  }

}