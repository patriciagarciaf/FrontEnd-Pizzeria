import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient';
import { Http2Server } from 'http2';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient-getall.component.html',
  styleUrls: ['./ingredient-getall.component.css']
})
export class IngredientGetallComponent implements OnInit {

  ingredients?: Ingredient[]

  constructor(private http2Server: Http2Server) { }

  ngOnInit(): void {
    this.getIngredients();
  }

  private getIngredients() {
    this.http2Server.findAll().subscribe(
      ingredientData => { this.ingredients = ingredientData }
    )
  }

}