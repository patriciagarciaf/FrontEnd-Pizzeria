import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Ingredient } from "../ingredient/ingredient";
import { IngredientService } from "../service/ingredient.service";

@Component({
  selector: 'app-ingredient-create',
  templateUrl: './ingredient-create.component.html',
  styleUrls: ['./ingredient-create.component.css']
})


export class IngredientCreateComponent {

  ingredient: Ingredient = new Ingredient();

  constructor(
    private ingredientService?: IngredientService,
    private router?: Router) { }

  ngOnInit(): void { }

  onSubmitForm() {
    console.log(this.ingredient);
    this.commitIngredient();
  }

  commitIngredient() {
    this.ingredientService?.create(this.ingredient).subscribe(
      ingredientData => {
        console.log(ingredientData);
        this.redirectIngredientList();
      },
      error => console.log(error));

  }

  redirectIngredientList() {
    this.router?.navigate(['/ingredient/getall']);
  }
}