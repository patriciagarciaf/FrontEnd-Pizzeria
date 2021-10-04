import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';
import { Observable } from 'rxjs';
import { Ingredient, IngredientCreateDTO } from './ingredient';
import { Authorize } from 'projects/core-library/src/lib/components/autorize/authorize';

@Injectable({
  providedIn: 'root'
})

@Authorize()
export class IngredientService {

  private server: string = environment.server;
  private v1: string = environment.v1;

  constructor(public http: HttpClient) { }

  getAll(): Observable<Ingredient []>{
    return <Observable<Ingredient []>> this.http.get(`${this.server, this.v1}/ingredients`)
  }

  createIngredient(ingredient: IngredientCreateDTO): Observable<Object>{
    return this.http.post(`${this.server, this.v1}`, ingredient);
  }

  deleteIngredient(id: string): Observable<Object>{
    return this.http.delete(`${this.server, this.v1}/${id}`);
  }

  getIngredientById(id: string): Observable<Ingredient>{
    return this.http.get<Ingredient>(`${this.server, this.v1}/${id}`);
  }
   //TODO: updateIngredient ??
}
