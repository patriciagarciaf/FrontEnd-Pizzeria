import { Component, Input } from "@angular/core";
import { Ingredient } from "../service/ingredient";
import { Actions } from "../service/actions";

@Component({
    selector: 'cap-ingredient-item',
    templateUrl: './ingredientitem.component.html',
    styleUrls: ['./ingredientitem.component.css']
  })

export class IngredientItemComponent{
    @Input() ingredient: Ingredient | any
    selected: Actions = Actions.selected
    remove: Actions = Actions.remove

    get ingredientText(){
        const {name, price} = this.ingredient;
        return `${name}(${price})`;
    }
}