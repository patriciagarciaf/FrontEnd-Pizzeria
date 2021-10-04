import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IngredientService } from '../service/ingredient.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent implements OnInit {

  constructor(private ingredientService: IngredientService) { }

  addForm= new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });

  ngOnInit(){
  }

  onSubmit(){
    const observer= this.ingredientService.createIngredient(this.addForm.value)
    const unsuscribe= observer.subscribe((data)=>{
      console.log(data);
    });
  }

}
