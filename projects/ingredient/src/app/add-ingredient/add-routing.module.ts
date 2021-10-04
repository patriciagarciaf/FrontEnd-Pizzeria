import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddIngredientComponent } from "./add-ingredient.component";

const routes: Routes=[
    {
        path: 'add', component: AddIngredientComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddRoutingModule{}