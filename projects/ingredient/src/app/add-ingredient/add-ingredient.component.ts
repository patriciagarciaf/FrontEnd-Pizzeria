import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IngredientService } from '../service/ingredient.service';
import { IngredientCreateDTO } from '../service/ingredient';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent implements OnInit {

  constructor(private ingredientService: IngredientService) { }
  ingredientCreateDTO: IngredientCreateDTO|any;
  addForm= new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });

  ngOnInit(){
  }

  onSubmit(){
    this.ingredientCreateDTO=this.addForm.value;
    if(this.addForm.valid){
      const observer= this.ingredientService.createIngredient(this.ingredientCreateDTO)
      const unsuscribe= observer.subscribe((data)=>{
        console.log(data);
      });
    }
  }

}
